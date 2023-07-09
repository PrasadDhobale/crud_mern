import { AppBar, Toolbar, styled } from '@mui/material';
import { NavLink } from 'react-router-dom';

const Header = styled(AppBar)`
    background-color: black;
`

const Tabs = styled(NavLink)`
    margin-left : 20px;
    font-size: 20px;
    color: inherit;
    text-decoration: none;
`

const Navbar = () => {
    return(
        <Header position='static'>
            <Toolbar>
                <Tabs to="/">Propad</Tabs>
                <Tabs to="add">Register</Tabs>
                <Tabs to="all">All Students</Tabs>
            </Toolbar>
        </Header>
    )
}

export default Navbar;