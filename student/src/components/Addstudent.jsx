import { useState } from "react"
import { FormControl, FormGroup, InputLabel, Input, Typography, styled, Button } from "@mui/material"
import { addStudent } from "../service/api"
import {useNavigate} from "react-router-dom";


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

const Addstudent = () => {

    const [student, setStudent] = useState(defaultValue);

    const Navigate = useNavigate();
    const onValueChange = (e) =>{
        
        setStudent({ ...student, [e.target.name]: e.target.value});
    }

    const addStudentDetails = async() =>{
        await addStudent(student);
        Navigate('/all');
    }
    return(
        <Container>
            <Typography variant='h4'>Add User</Typography>
            <FormControl>
                <InputLabel>First Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="fname" />
            </FormControl>
            <FormControl>
                <InputLabel>Last Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="lname" />
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="email" />
            </FormControl>
            <FormControl>
                <InputLabel>Phone</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="phone" />
            </FormControl>
            <FormControl>
                <Button variant="contained" onClick={() => addStudentDetails()}>Add Student</Button>
            </FormControl>
        </Container>
    )
}

export default Addstudent;