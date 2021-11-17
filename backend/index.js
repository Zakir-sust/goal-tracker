import mongodb from 'mongodb'
import app from './server.js'
import userDb from './db/userDb.js'
import goalsDb from './db/goalsDb.js'
import comGoalsDb from './db/completedGoalsDb.js'
import dotenv from 'dotenv'
dotenv.config()
const mongoClient = mongodb.MongoClient;
const port = 5000;
async function conect(){
    console.log('inside conect');
    const client = await mongoClient.connect(process.env.URI,{useNewUrlParser:true,UseUnifiedTopology:true})
    console.log('got client');

    userDb.injectDb(client)
    goalsDb.injectDb(client)
    comGoalsDb.injectDb(client)
    app.listen(port,()=>{
        console.log(`App runnign on port ${port}`)
    })
    
}

conect();
