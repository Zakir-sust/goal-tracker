import taskTrackerDataService from '../services/goal_tracker_axios.js'
import React,{ useState,useEffect } from 'react'
import './login.css'

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
            <div>
                <form className = 'log-form'>
                    <label htmlFor = 'loginId'>loginId</label>
                    <input className = 'inp' type = "text" id = 'loginId' onChange ={ ((e)=> setLoginId(e.target.value)) }/>
                    <label htmlFor = 'password'>password</label>
                    <input className = 'inp' type = 'password' id = 'password' onChange = {((e)=> setPassword(e.target.value))}/>
                    <button className = 'bt-log' onClick = {login}> submit </button>
                </form>
            </div>
        </div>
    )
}

export default Login
