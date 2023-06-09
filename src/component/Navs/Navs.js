 import React from "react";
import "./Navs.css";
import {Navbar , Nav , Container} from "react-bootstrap";

 const Navs = ()=> {
    return (
        <Navbar expand="lg" fixed='top' >
        <Container >
            <Navbar.Brand href="#home" >
                <Nav.Link id="logo" href="logo">Domus</Nav.Link>
                
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">

                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Ratings</Nav.Link>
                <Nav.Link href="#link">menu</Nav.Link>
                
            </Nav>

                
            <Nav>
               <Nav.Link id='ln' href="https://www.glosscairo.com/cosmetics-category/">Let's Connect</Nav.Link>
        </Nav> 

          </Navbar.Collapse>
       </Container> 
     </Navbar>
          
          
    );
}
export default Navs;