import student from "../models/student_model.js";


export function getallStudent(req, res) {
    student.find().then((studentList) => {
    
            res.json({
                list: studentList // studentList එක JSON විදියට පිළිතුර යවනවා.
            });
        
        }).catch(err => {
            console.log(err);
            res.status(500).json({ error: "Internal server error" });
        });
    
    }


//create student

export function createStudent(req, res) {
    const newStudent = new student(req.body);
    newStudent.save().then((student) => {
            res.json({
                student,
            });
        }).catch((err) => {
            console.log(err);
            res.status(500).json({ error: "Internal server error" });
        });
}

    //delete student by name
export function deleteStudent(req, res) {
    const studentName = req.body.name; // Get the student name from the request body
    student.deleteOne({ name: studentName }).then(() => {
        res.json({
            message: "Student deleted successfully",
        });
    }).catch((err) => {
        console.log(err);
        res.status(500).json({ error: "Internal server error" });
    });
}


// using find() with name

export function findStudentByName(req, res) {
    const studentName = req.body.name; // Get the student name from the request body
    student.find({ name: studentName }).then((student) => {
        if (student.length === 0) {
            return res.status(404).json({ message: "Student not found" });
        }
        res.json({
            student,
        });
    }).catch((err) => {
        console.log(err);
        res.status(500).json({ error: "Internal server error" });
    });
}




