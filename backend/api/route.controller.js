import userDb from '../db/userDb.js'
import goalsDb from '../db/goalsDb.js'
import comGoalsDb from '../db/completedGoalsDb.js'
// import completedGoalsDb from '../db/completedGoalsDb.js'

export default class RouteCtrl{
    static async apiAddUser(req,res){
        console.log('at add user')
        const db_res = await userDb.addUser(req.body.username,req.body.password)
        console.log('db_res = ',db_res)
        res.json(db_res);
    }
    
        static async apiGetUsers(req,res){
        console.log('at apiGetUsers');
        const data = await userDb.getUsers();
        res.json(data);
    }

    static async apiAddGoal(req,res){
        const date = new Date(req.body.date);
        if(!(date instanceof Date && isFinite(date)))res.json({error:"invalid date"})
        const data = {
            userId:req.body.userId,
            description:req.body.description,
            date:date.toDateString(),
            time:req.body.time
        }
        const response = await goalsDb.addGoal(data)
        res.json(response);
    }

    static async apiGetGoal(req,res){
        console.log(`at api get goals id = ${req.query.id}`)
        const goals = await goalsDb.getGoals(req.query.id)
        res.json(goals)
    }

    
    static async apiDeleteGoal(req,res){
        console.log(`at apiDeleteGoal. id = `,req)
        const delRes = await goalsDb.deleteGoal(req.query.id)
        res.json(delRes)
    }
    
    static async apiGetCompletedGoals(req,res){

        // res.send('api get completed Goals')
        const result = await comGoalsDb.getCompletedGoals(req.query.id)
        res.json(result)
    }

    static async apiAddCompletedGoal(req,res){
        const goal = {
            userId:req.body.userId,
            description:req.body.description,
            date:req.body.date,
            time:req.body.time,
        }
        const response = await comGoalsDb.addCompletedGoal(goal)
        res.json(response)
    }

}