import express from 'express'
import cors from 'cors'
import taskRoute from './api/route.js'
import mongodb from 'mongodb'
import dotenv from 'dotenv'
const app = express();

app.use(cors());
app.use(express.json());

const port = 5000;

app.use('/api/goal-tracker',taskRoute);
app.use('*',(req,res)=>{
    res.status(400).json({error:'invalid url'});
})


export default app;