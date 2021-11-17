import React,{ useState,useEffect } from "react"
import dataService from "../services/goal_tracker_axios"
import {BrowserRouter as Router,Link,Route,Switch,Redirect} from 'react-router-dom'
import AddGoal from './addgoal'
import CompletedGoals from "./completedgoals"
import './usergoals.css'
import { useHistory } from "react-router-dom";
const UserGoals = (props)=>{
    const [goals,setGoals] = useState([])
    const [user,setUser] = useState(localStorage.getItem('user'))
    const history = useHistory()
    const getGoals = id =>{
        dataService.getGoals(id)
        .then(response =>{
            setGoals(response.data)
        })
        .catch(e=>{
            console.log(`error: ${e}`)
        })
    }
    const addCompleted = (param)=>{
        console.log(param)
        const data = {
            userId:param.userId,
            description:param.description,
            date:param.date,
            time:param.time
        }
        dataService.addCompletedGoal(data)
        .then(res=>{
            console.log('add completed goal response: ',res.data)
        })
    }
    const deleteGoal = (id)=>{
        dataService.deleteGoal(id)
        .then((res)=>{
            console.log('delete goal',res.data)
            getGoals(user)
        })
    }
    useEffect(()=>{
        getGoals(user)
        // console.log('userEffect loaded',goals)
    },[user])
    const changeLink = (tp,props)=>{
        console.log('at change link props = ',props)
        history.push(props)
    }
    return (
        <div>
            <button className = 'bt-comgoals' onClick = {(e)=>{changeLink(e,'/completedgoals')}}>Completed Goals</button>
            <div className= 'addgoal'>
               <AddGoal user = {user} func = {getGoals}/>
            </div>
            <div>   
            </div>
            <div className = 'goal-wrapper'>
                {goals.map((item) => {
                    return(
                        <div className = 'goal' >
                            <div className = 'goal-inside'>
                            <strong>Description: </strong> {item.description}<br/>
                            <strong>Date: </strong> {item.date} <br/>
                            <strong>Time: </strong> {item.time} <br/>
                            <div>
                                <button className = 'bt-completed' onClick = {(e)=>{
                                  addCompleted(item)  
                                  deleteGoal(item._id)
                                }}> mark completed</button>
                            </div>
                            <div>
                                <button className = 'bt-delete' onClick = {(e)=>{
                                    deleteGoal(item._id)
                                }}>Delete</button>
                            </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default UserGoals

