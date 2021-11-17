import mongodb from 'mongodb'
const ObjectId = mongodb.ObjectId
let goals

export default class goalsDb{
    static async injectDb(client){
        try{
            if(goals)return 
            goals = await client.db(process.env.db).collection('goals');
            console.log('connection to goalsDb success');
        }catch(e){
            console.log(`injection error occured at goalsDb: ${e}`)
        }
    }
    static async addGoal(goal){
        try {
            console.log('goal = ',goal);
            return await goals.insertOne(goal);
        } catch (error) {
            console.log(`add goal db failed :${error}`);
        }
    }
    static async getGoals(id){
        try {
            console.log(`id = ${id}`)
            const data =  await goals.find({userId:id}).toArray();
            // const data = await goals.find({}).toArray()
            // console.log('goals = ',data)
            return data;
        } catch (error) {
            console.log(`error occured at getGoals db ${error}`)
        }
    }
    static async deleteGoal(id){
        console.log(`id = ${id}`)
        try{
            return await goals.deleteOne({_id:ObjectId(id)})
        }catch(e){
            console.log(`delete failed ${e}`)
        }
    }
}
