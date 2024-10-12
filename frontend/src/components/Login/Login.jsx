import { useState } from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import { useSnackbar } from 'notistack'
const Login = () => {

    const [ userEmail, setUserEmail ] = useState('')
    const [ userPassword, setUserPassword ] = useState('')
    const [ forgotPassword, setForgotPassword ] = useState(false)
    const navigate = useNavigate();

    const { enqueueSnackbar } = useSnackbar()

    const handleSubmit = async () => {

        const res = await fetch('http://localhost:4000/api/users/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({  
                                    userEmail,      
                                    userPassword,   
                                })
        })
        const data = await res.json()        
        if(data.success){
            enqueueSnackbar(data.data, {variant: 'success'})
            localStorage.setItem('currentUser', JSON.stringify(data.body))
            navigate(`/`)
        }else {
            enqueueSnackbar(data.data, {variant: 'error'})
            if(data.data.includes('Password')){
                setForgotPassword(true)
            }
        }
}

return (
    <div className='white-ground'>
        <div className='container regiter'>
            <form method='post' action='' className='d-flex flex-column gap-2 w-50 mx-auto rounded p-3 sign-form mt-36'>
                <img src ={require("../../assets/brand.png")} alt="" className='mx-auto' />
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
                {forgotPassword && <div><Link to={'/forgotPassword'}> نسيت كلمة السر؟ </Link></div>}
                <hr className='mx-auto'/>
                <button  type="submit" 
                        className='submit hover:bg-[#1EAAAD] hover:text-white p-2 rounded' 
                        onClick={(e) =>{
                            e.preventDefault()
                            handleSubmit()
                            }}> تسجيل دخول </button>
            </form>
        </div>
    </div>
)
}

export default Login