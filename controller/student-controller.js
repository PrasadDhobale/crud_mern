import Student from '../schema/student-schema.js';

export const addStudent = async (request, response) => {
    const student = request.body;

    const newStudent = new Student(student);

    try{
        await newStudent.save();
        response.status(201).json(newStudent);
    }catch(error){
        response.status(409).json({message: error.message});
    }

}

export const getStudents = async(request, response) => {
    try {
        const Students = await Student.find({});
        response.status(200).json(Students);
    } catch (error) {
        response.status(404).json({message: error.message});
    }
}

export const getStudent = async(request, response) => {
    try {
        
        // const Stud = await Student.findOne({_id: request.params.id});
        const Stud = await Student.findById(request.params.id);
        response.status(200).json(Stud);
    } catch (error) {
        response.status(404).json({message: error.message});        
    }
}

export const editStudent = async(request, response) => {
    let stud = request.body;
    const editStudent = new Student(stud);

    try {
        const s = await Student.updateOne({_id: request.params.id},  editStudent);
        response.status(201).json(editStudent);
    } catch (error) {
        response.status(409).json({message: error.message});
    }
}

export const deleteStudent = async(request, response) => {
    try {
        await Student.deleteOne({_id: request.params.id});
        response.status(201).json({message: 'Student deleted successfully'});
    } catch (error) {
        response.status(409).json({message: error.message});
    }
}