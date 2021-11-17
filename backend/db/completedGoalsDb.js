import mongodb from 'mongodb'
const ObjectId = mongodb.ObjectId
let comGoals

export default class completedGoalsDb{
    static async injectDb(client){
        if(comGoals)return
        try{
            comGoals = client.db(process.env.userDB).collection('completed-goals')
            console.log('comgoals connection success')
        }catch(e){
            console.log(`connection to completed goals failed ${e}`)
        }
    }
    
    static async addCompletedGoal(goal){
        try{
            return await comGoals.insertOne(goal)
        }catch(e){
            console.log('error occured at insert comgoal db')
        }
    }
    
    static async getCompletedGoals(id){
        try{
            console.log('get completed goal id = ',id)
            // return await comGoals.find({_id:ObjectId(id)},{projection:{_id:0,userId:0}})
            return await comGoals.find({"userId":id}).toArray()
        }catch(e){
            console.log(`error at getCompleted goals db ${e}`)
        }
    }
}
