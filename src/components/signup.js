import taskTrackerDataService from '../services/goal_tracker_axios.js'
import React,{ useState,useEffect } from 'react'

const Signup = ()=>{
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const [loginId,setLoginId] = useState("")
    
    const signup = (e)=> {
        e.preventDefault()
        taskTrackerDataService.addUser({
            username:username,
            password:password
        }).then((res)=>{
            console.log(`username:${username}, pass:${password} and response : `,res.data)
            setLoginId(res.data.insertedId)
        })
    }

    return (
        <div>
             <p> at signup page</p>
            <div>
                <form>
                    <label htmlFor = 'username'>username</label>
                    <input type = "text" id = 'username' onChange ={ ((e)=> setUsername(e.target.value)) }/>
                    <label htmlFor = 'password'>password</label>
                    <input type = 'password' id = 'password' onChange = {((e)=> setPassword(e.target.value))}/>
                    <button onClick = {signup}> submit </button>
                </form>
            </div>

            {loginId && 
            <div>
                <p>loginId : {loginId} </p>
                <p>password: {password} </p>
            </div>}    
        </div>
    )
}


export default Signup