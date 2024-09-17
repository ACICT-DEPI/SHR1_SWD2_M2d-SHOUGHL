
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import './Navbar.css'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

const NavBar = () => {
    const navigate = useNavigate()

    const [user, setUser] = useState()
    useEffect(() => {
        if(localStorage.getItem('user')){
            setUser(localStorage.getItem('user'))
        }
    }, [])

return (
    <Navbar expand="lg" className='p-0' style={{boxShadow: '0 2px 0 0 #eee'}}>
    <Container style={{width: '80%'}}>
        <span className='nav-top'></span>
        <Navbar.Brand href="#home">
            <img src ={require("../../assets/brand.png")} alt="" className='ml-4' />
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
            {!user ? <div className="account d-flex gap-2">
                <Button className='text-nowrap'>
                    <Link className='text-white text-decoration-none' to={'login'}> تسجيل دخول </Link>
                </Button>
                <div className='w-1 h-7 rounded bg-[#1EAAAD] mt-2'></div>
                <Button className='text-nowrap'>
                    <Link className='text-[#1EAAAD] text-decoration-none' to="register"> إنشأ حساب </Link>
                </Button>
            </div> 
            : 
            <div className='d-flex' onClick={() => navigate('profile')}>
                <img src="" alt="" className='rounded-circle w-1 h-1 cursor-pointer' />
                <div>{JSON.parse(localStorage.getItem('user')).name}</div>
            </div> }
    </Container>
    </Navbar>
)}

export default NavBar