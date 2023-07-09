import axios from "axios"


const URL = "";
export const addStudent = async (student) =>{
    try{
        return await axios.post(`${URL}/add`, student)

    }catch(error){
        console.log("Error while calling addstudent api", error)
    }
}

export const getStudents = async() =>{
    try{
        return await axios.get(`${URL}/all`);
    }catch(error){
        console.log(`Error while calling getstudent api ${error}`);
    }
    
}

export const getStudent = async(id) =>{
    try {
        return await axios.get(`${URL}/${id}`);
    } catch (error) {
        console.log(`Error while calling getStudent ${error}`);
        
    }
}

export const editStudent = async(student, id) => {
    try {
        return await axios.post(`${URL}/${id}`, student)
    } catch (error) {
        console.log('Error while calling editStudent', error);
        
    }
}

export const deleteStudent = async(id) => {
    try {
        await axios.delete(`${URL}/${id}`);
    } catch (error) {
    console.log('Error while calling deleteStudent', error);       
    }
}