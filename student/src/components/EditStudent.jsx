import { useState, useEffect } from "react"
import { FormControl, FormGroup, InputLabel, Input, Typography, styled, Button } from "@mui/material"
import { editStudent, getStudent } from "../service/api"
import {useNavigate, useParams} from "react-router-dom";


const Container = styled(FormGroup)`
    width: 50%;
    margin: 10% auto 0 auto;
    & > div {
        margin-top: 20px;
    }
`

const defaultValue = {
    fname: '',
    lname: '',
    email: '',
    phone: ''
}

const Editstudent = () => {

    const [student, setStudent] = useState(defaultValue);

    const Navigate = useNavigate();

    const {id} = useParams();

    useEffect(() =>{
        loadStudentDetails();        
    }, []);

    const loadStudentDetails = async() =>{
        const response = await getStudent(id);
        setStudent(response.data);
    }
    const onValueChange = (e) =>{
        
        setStudent({ ...student, [e.target.name]: e.target.value});
    }

    const editStudentDetails = async() =>{
        await editStudent(student, id);
        Navigate('/all');
    }
    return(
        <Container>
            <Typography variant='h4'>Edit User</Typography>
            <FormControl>
                <InputLabel>First Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="fname" value={student.fname} />
            </FormControl>
            <FormControl>
                <InputLabel>Last Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="lname" value={student.lname} />
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="email" value={student.email}/>
            </FormControl>
            <FormControl>
                <InputLabel>Phone</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="phone" value={student.phone}/>
            </FormControl>
            <FormControl>
                <Button variant="contained" onClick={() => editStudentDetails()}>Edit Student</Button>
            </FormControl>
        </Container>
    )
}

export default Editstudent;