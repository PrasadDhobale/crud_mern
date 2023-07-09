import { useEffect, useState } from "react";
import {Table, TableHead, TableCell, TableRow, TableBody, styled, Button } from "@mui/material";
import {getStudents, deleteStudent} from "../service/api";

import {Link} from 'react-router-dom'

const StyledTable = styled(Table)`
    width: 90%;
    margin: 50px auto 0 auto;
`

const THead = styled(TableRow)`
    background-color: #000000;
    & > th{
        color: #ffff;
        font-size: 20px;
    }
`

const TBody = styled(TableRow)`
    & > td{
        font-size: 15px;
    }
`

const Allstudent = () => {

    const [students, setStudents] = useState([]);

    useEffect(() =>{
        getAllStudents();
    }, []);

    const getAllStudents = async () =>{
        let response = await getStudents();
        setStudents(response.data);
    }

    const deleteStudentDetails = async (id) =>{
        await deleteStudent(id)
        getAllStudents();
    }
    return(
        <StyledTable>
            <TableHead>
                <THead>
                    <TableCell>Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell>Action</TableCell>
                </THead>
            </TableHead>
            <TableBody>
                {
                    students.map(s =>(
                        <TBody key={s._id}>
                            <TableCell>{s.fname} {s.lname}</TableCell>
                            <TableCell>{s.email}</TableCell>
                            <TableCell>{s.phone}</TableCell>
                            <TableCell>
                                <Button variant="contained" style={{marginRight: 10}} component={Link} to={`/edit/${s._id}`}>Edit</Button>
                                <Button variant="contained" color="secondary" onClick={()=>{deleteStudentDetails(s._id)}}>Delete</Button>
                            </TableCell>
                        </TBody>
                    ))
                }
            </TableBody>
        </StyledTable>
    )
}

export default Allstudent;