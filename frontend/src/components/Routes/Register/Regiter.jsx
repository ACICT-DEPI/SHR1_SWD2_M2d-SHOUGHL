import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Regiter.css'
import { useState } from 'react';


const Regiter = () => {

    const [ username, setUsername ] = useState('')
    const [ userEmail, setUserEmail ] = useState('')
    const [ userPassword, setUserPassword ] = useState('')
    const navigate = useNavigate();

    const handleSubmit = () => {
        axios
            .post('http://localhost:4000/api/users/register')
            .then(()=> {
                console.log('success');
                navigate('/')
            })
}


    return (
    <div className='white-ground'>
        <div className='container regiter'>
            <form method='post' action='' className='d-flex flex-column gap-2 w-25 mx-auto rounded p-8 sign-form mt-36'>
                <img src ={require("../../../assets/brand.png")} alt="" className='mx-auto' />
                <label htmlFor="username"> اسم المستخدم </label>
                <input  type="text"
                        id='username' 
                        value={username} 
                        onInput={(e) => {
                            setUsername(e.target.value)
                }} 
                />
                <label htmlFor="userEmail"> البريد الالكترونى </label>
                <input  type="text" 
                        id='userEmail' 
                        value={userEmail} 
                        onInput={(e) => {
                            setUserEmail(e.target.value)
                }} 
                />
                <label htmlFor="password"> كلمة المرور </label>
                <input  type="password" 
                        id='password' 
                        value={userPassword} onInput={(e) => {
                            setUserPassword(e.target.value)
                }} 
                />
                <hr className='mx-auto'/>
                <button  type="submit" 
                        // value={' إنشأ حساب '} 
                        className='submit hover:bg-[#1EAAAD] hover:text-white p-2 rounded' 
                        onClick={(e) =>{
                            e.preventDefault()
                            handleSubmit()
                            }}> أنشأ حسابك </button>
            </form>
        </div>
    </div>
    )
}

export default Regiter