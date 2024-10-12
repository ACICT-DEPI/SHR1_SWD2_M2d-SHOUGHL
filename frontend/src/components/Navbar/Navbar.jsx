
import './Navbar.css'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

const NavBar = () => {
    const navigate = useNavigate()

    const [ user, setUser ] = useState({})

    useEffect(() => {
        if(localStorage.getItem('currentUser')){
            setUser(JSON.parse(localStorage.getItem('currentUser')))
        }
    }, [])


return (
    <Navbar expand="lg" className='p-0' style={{boxShadow: '0 2px 0 0 #eee'}}>
    <Container>
        <span className='nav-top'></span>
        <Navbar.Brand onClick={()=> navigate('/')}>
            <img src ={require("../../assets/brand.png")} alt="" className='ml-4' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav >
                <Link to='/' className='link'> الرئيسية </Link>
                <Link to='/services' className='link'> الخدمات </Link>
                <Link to='/providers' className='link'> المشتغلين </Link>
                <Link to='/contact' className='link'> تواصل معنا </Link>
            </Nav>
        </Navbar.Collapse>
        <div className="d-flex gap-2 mx-5 nav-extra">
                <Link to='/chat' ><i className="fa-regular fa-message"></i></Link>
            </div>
            {!user.id ? <div className="account d-flex gap-2">
                <Button className='text-nowrap' onClick={()=> navigate('/login')}> تسجيل دخول </Button>
                <div className='w-1 h-7 rounded bg-[#1EAAAD] mt-2'></div>
                <Button className='text-nowrap' onClick={()=> navigate('/register') }> إنشأ حساب </Button>
            </div> 
            : 
            <div className='d-flex px-2 cursor-pointer align-items-center' style={{borderRadius: '30px', border: '1px solid #1EAAAD'}} onClick={() => navigate(`/profile/${user.id}`)}>
                <img src={require('../../assets/user.jpg')} alt="" className='rounded-circle ratio ratio-1x1 m-0' />
                <div>{ user.name }</div>
            </div> }
    </Container>
    </Navbar>
)}

export default NavBar