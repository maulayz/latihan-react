import { Navbar, Container, Nav } from "react-bootstrap"

const NavigationBar = () => {
    return (
        <div>
            <Navbar variant="dark">
               <Container>
                   <Navbar.Brand href="/">RIKIFILM</Navbar.Brand>
                   <Nav>
                       <Nav.Link href="#trending">Trending</Nav.Link>
                       <Nav.Link href="#superhero">SuperHiro</Nav.Link>
                       <Nav.Link href="#Contact">Contact</Nav.Link>
                   </Nav>
               </Container>
            </Navbar> 
        </div>
    )

}

export default NavigationBar