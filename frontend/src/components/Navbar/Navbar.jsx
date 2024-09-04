
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import './Navbar.css'
import { Link } from 'react-router-dom'

const NavBar = () => {
return (
    <Navbar expand="lg" className='p-0' style={{boxShadow: '0 2px 0 0 #eee'}}>
    <Container style={{width: '80%'}}>
        <span className='nav-top'></span>
        <Navbar.Brand href="#home">
            <img src ={require("../../assets/brand.png")} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav >
                <Link className='link' to='/'> الرئيسية </Link>
                <Link className='link'> الاعلانات </Link>
                <Link className='link'> الطلبات </Link>
                <Link className='link'> المشتغلين </Link>
                <Link className='link'> تواصل معنا </Link>
            </Nav>
        </Navbar.Collapse>
        <div className="d-flex gap-2 mx-5 nav-extra">
                <Link ><i className="fa-regular fa-message"></i></Link>
                <Link ><i className="fa-regular fa-bell"></i></Link>
            </div>
            <div className="account d-flex gap-2">
                <Button className='text-nowrap'>كن مشتغل</Button>
                <Button className='text-nowrap'>تسجيل الدخول</Button>
            </div>
    </Container>
    </Navbar>
)}

export default NavBar