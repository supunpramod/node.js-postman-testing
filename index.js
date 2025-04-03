import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import student_routers from './routes/student_routes.js'; // Import the router

const app = express();

app.use(bodyParser.json());

const mongourl="mongodb+srv://admin:supun123@cluster0.7goad3v.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
mongoose.connect(mongourl,{});
const connection=mongoose.connection;

connection.once('open',()=>{
    console.log('MongoDB Connected');
})

// app.get('/',(req,res)=>{
//     console.log('Hello World!');

//     console.log(req.body)
//     res.send('welcome');
    
// });

app.use('/api/student', student_routers); // Use the student router for the /api/students endpoint


app.listen(3000,()=>{
    console.log('Server is running on port 3000');
});