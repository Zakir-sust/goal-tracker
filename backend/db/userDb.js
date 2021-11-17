import mongodb from 'mongodb'
const ObjectId = mongodb.ObjectId
let users

export default class UserDb{
    
    static async injectDb(client){
        if(users)return
        else{
            try{
                users = await client.db(process.env.db).collection('users')
                console.log('connection to users collection success! and db = ',process.env.db)
                
            }catch(e){
                console.log(`error occured ${e}`)
            }
        }
    }
    
    static async addUser(userName,passWord){
        try{
            const user = {
                username:userName,
                password:passWord
            }
            return await users.insertOne(user);
        }catch(e){
            console.log(`error occured at db addUser :${e}`)
        }
    }

    static async getUsers(){
        try{
            const data = await users.find({}).toArray();
            // console.log('at db data is ',data);
            return data;
        }catch(e){
            console.log(`error at db getUsers ${e}`)
        }
    }
    
}
