import React from 'react'
import { NavLink } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const Navigation = () =>{
    return(
        <div>
            <Navbar expand="lg" bg="dark" variant="dark">
                <NavLink to="/"><Navbar.Brand>Scubadiving Journal</Navbar.Brand></NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <NavLink className="nav-link" to="/" activeClassName="active">
                            Home
                        </NavLink>
                        <NavLink
                            className="nav-link"
                            to="/add-scubadiving"
                            activeClassName="active">
                            Form
                </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
export default Navigation