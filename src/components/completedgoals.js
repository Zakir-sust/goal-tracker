import React,{ useState,useEffect } from "react"
import dataService from "../services/goal_tracker_axios"
import './comgoals.css'
import { useHistory } from "react-router-dom"
const CompletedGoals = ()=>{
    
    const [comGoals,setComGoals] = useState([])
    const history = useHistory()
    const getCompletedGoals = (user)=>{
        dataService.getCompletedGoals(user).then((res)=>{
            setComGoals(res.data)
        })
    }
    useEffect(()=>{
        const user = localStorage.getItem('user')
        console.log('completed goals,user = ',user)
        getCompletedGoals(user)
    },[])

    return (
        <div>
            <div>
                <button onClick = {(()=> {
                    history.push('/userGoals')
                })}> Go back</button>
            </div>
            <div class = 'comgoals-wrapper'>
                {comGoals.map((item)=>{
                    return (
                        <div class = 'comgoals'>
                            <strong> Description: </strong> {item.description} <br/>
                            <strong> Date: </strong> {item.date} <br/>
                            <strong> Time: </strong> {item.time} <br/>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default CompletedGoals;