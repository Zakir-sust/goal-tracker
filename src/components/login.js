import taskTrackerDataService from '../services/goal_tracker_axios.js'
import React,{ useState,useEffect } from 'react'


const Login = (props)=>{
    const [password,setPassword] = useState("")
    const [loginId,setLoginId] = useState("")
    const login = (e)=>{
        props.login(loginId)
        localStorage.setItem('user',loginId)
        console.log('localstorage: ',localStorage.getItem('user'))
        props.history.push('/userGoals')
    }
    
    return (
        <div>
            Login page
            <div>
                <form>
                    <label htmlFor = 'loginId'>loginId</label>
                    <input type = "text" id = 'loginId' onChange ={ ((e)=> setLoginId(e.target.value)) }/>
                    <label htmlFor = 'password'>password</label>
                    <input type = 'password' id = 'password' onChange = {((e)=> setPassword(e.target.value))}/>
                    <button onClick = {login}> submit </button>
                </form>
            </div>
        </div>
    )
}

export default Login
