import express from "express";
import {addStudent, getStudents, getStudent, editStudent, deleteStudent} from "../controller/student-controller.js";


const router = express.Router();

router.post('/add', addStudent)
router.get('/all', getStudents)
router.get('/:id', getStudent)
router.post('/:id', editStudent)    //also can use put
router.delete('/:id', deleteStudent)


export default router;