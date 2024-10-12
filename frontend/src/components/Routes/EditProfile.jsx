import { useSnackbar } from 'notistack'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const EditProfile = () => {
    const { id } = JSON.parse(localStorage.getItem('currentUser'))
    const [ user, setUser ] = useState({})

useEffect(() => {
    fetch(`http://localhost:4000/api/users/${id}`)
    .then( res => res.json())
    .then( data => setUser(data.data))
}, [id])


const [ Username, setUsername ] = useState(user.username)
const [ UserEmail, setUserEmail ] = useState(user.userEmail)
const [ UserConfirmPassword, setUserConfirmPassword ] = useState('')
const [ UserNewPassword, setUserNewPassword ] = useState('')
const [ UserCountry, setUserCountry ] = useState(user.userCountry || '')
const [ UserPhoneNumber, setUserPhoneNumber ] = useState(user.userPhoneNumber || '')
const [ UserGender, setUserGender ] = useState(user.userGender || '')
const navigate = useNavigate();
    
    
    console.log(Username)

    const { enqueueSnackbar } = useSnackbar()

    const handleSubmit = async () => {

        const res = await fetch(`http://localhost:4000/api/users/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({  
                                    UserEmail,      
                                    UserConfirmPassword,   
                                    Username,
                                    UserNewPassword,
                                    UserCountry,
                                    UserPhoneNumber,
                                    UserGender
                                })
        })
        const data = await res.json()        
        if(data.success){
            enqueueSnackbar(data.data, {variant: 'success'})
            navigate('/')
        }else {
            enqueueSnackbar(data.data, {variant: 'error'})
        }
}


    return (
    <div className='white-ground'>
        <div className='container regiter'>
            <form method='post' action='' className='d-flex flex-column gap-2 w-50 mx-auto rounded p-3 sign-form mt-28'>
                <img src ={require("../../assets/brand.png")} alt="" className='mx-auto' />
                <label htmlFor="username"> اسم المستخدم </label>
                <input  type="text"
                        id='username' 
                        value={Username} 
                        onInput={(e) => {
                            setUsername(e.target.value)
                }} 
                />
                <label htmlFor="userEmail"> البريد الالكترونى </label>
                <input  type="text" 
                        id='userEmail' 
                        value={UserEmail} 
                        onInput={(e) => {
                            setUserEmail(e.target.value)
                }} 
                />
                <div className='d-flex gap-2'>
                    <div className='d-flex flex-column w-50'>
                        <label htmlFor="password"> كلمة المرور الحالية </label>
                        <input  type="password" 
                            id='password' 
                            value={UserConfirmPassword} onInput={(e) => {
                                setUserConfirmPassword(e.target.value)
                            }}
                        />
                    </div>
                    <div className='d-flex flex-column w-50'>
                        <label htmlFor="newpassword"> كلمة المرور الجديدة </label>
                        <input  type="password" 
                            id='newpassword' 
                            value={UserNewPassword} onInput={(e) => {
                                setUserNewPassword(e.target.value)
                            }} 
                        />
                    </div>
                </div>
                <div className='d-flex'>
                    <div>
                        <label htmlFor="country"> الدولة </label>
                        <input  type="text" 
                            id='country' 
                            value={UserCountry} onInput={(e) => {
                                setUserCountry(e.target.value)
                            }} 
                        />
                    </div>
                    <div>
                        <label htmlFor="phonenumber"> رقم الهاتف </label>
                        <input  type="text" 
                            id='phonenumber' 
                            value={UserPhoneNumber} onInput={(e) => {
                                setUserPhoneNumber(e.target.value)
                            }} 
                        />
                    </div>
                    <div>
                        <label htmlFor="gender"> الجنس </label>
                        <input  type="text" 
                            id='gender' 
                            value={UserGender} onInput={(e) => {
                                setUserGender(e.target.value)
                            }} 
                        />
                    </div>
                    </div>
                    <label htmlFor='image'> الصورة الشخصية </label>
                <input type='file' id='image'/>
                <hr className='mx-auto'/>
                <button  type="submit" 
                        className='submit hover:bg-[#1EAAAD] hover:text-white p-2 rounded' 
                        onClick={(e) =>{
                            e.preventDefault()
                            handleSubmit()
                            }}> تحديث الملف الشخصي </button>
            </form>
        </div>
    </div>
)
}

export default EditProfile