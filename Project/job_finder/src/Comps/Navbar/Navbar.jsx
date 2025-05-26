import React from "react";
import { Link ,useNavigate} from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import { signOut, getAuth } from "firebase/auth";
const NavbarComp = () => {
  const navigate=useNavigate()

  const loggedinUser = JSON.parse(localStorage.getItem("loggedInRecruiter")) || JSON.parse(localStorage.getItem("loggedInJobSeeker"));
  const handleLogout = async () => {
    const auth = getAuth();
    try {
      await signOut(auth);
      localStorage.removeItem("loggedInRecruiter")
      alert("loggedout done")
      navigate("/login")
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#">job_Kaavaalaa</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              {loggedinUser ? (
                <>
                  <button onClick={handleLogout}>logout</button>
                </>
              ) : (
                <>
                  <Link to="/signup">Signup</Link>
                  <Link to="/login">Login</Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComp;
