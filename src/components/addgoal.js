import React,{ useState,useEffect } from "react"
import dataService from "../services/goal_tracker_axios"
import './addgoal.css'
const AddGoal = (props)=>{
    const [description,setDescription] = useState("")
    const [date,setDate] = useState(null)
    const [time,setTime] = useState(null)

    const addgoal = (event)=>{
        event.preventDefault()
        const goal = {
            userId:props.user,
            description:description,
            date:date,
            time:time,
        }

        dataService.addGoal(goal)
        .then((res)=>{
            console.log('goal = ',goal)
            console.log(res.data)
            props.func(props.user)
        })
    }
    return (
        <div>
            <p>Add a Goal:</p>
            <form>
                <label htmlFor = 'description' >Description </label>
                <input placeholder = 'add a description' className = 'inp' type = 'text' id = 'description' onChange = {((e)=>setDescription(e.target.value))}/>
                <label htmlFor = 'date' >Date </label>
                <input placeholder = 'valid date mm/dd/yyyy' className = 'inp' type = 'text' id = 'date' onChange = {((e)=>setDate(e.target.value))}/>
                <label htmlFor = 'time' >time </label>
                <input placeholder = 'date or time range' className = 'inp' type = 'text' id = 'time' onChange = {((e)=>setTime(e.target.value))}/>
                <button onClick = {addgoal}> submit</button>
            </form>
        </div>
    )
}

export default AddGoal
