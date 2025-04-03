import express from 'express';  
import { getallStudent, createStudent, deleteStudent,findStudentByName } from '../controller/student_controller.js'; // Import the controller function



const studentRouter = express.Router(); // Create a new router instance

studentRouter.get("/", getallStudent)
studentRouter.post("/", createStudent); // Define the route for creating a new student
studentRouter.delete("/", deleteStudent); // Define the route for deleting a student by name
studentRouter.post("/supun",findStudentByName); // Define the route for finding a student by name
    
export default studentRouter; // Export the router instance
