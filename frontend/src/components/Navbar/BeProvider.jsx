import { useSnackbar } from 'notistack'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const BeProvider = () => {

    const [ serviceTitle, setServiceTitle ] = useState('')
    const [ serviceDetails, setServiceDetails ] = useState('')
    const [ servicePrice, setServicePrice ] = useState('')
    const [ serviceCategory, setServiceCategory ] = useState('')
    const navigate = useNavigate();

    const { enqueueSnackbar } = useSnackbar()

    const handleSubmit = () => {
        
    }

return(
    <div className='white-ground'>
        <div className='container regiter'>
            <form method='post' action='' className='d-flex flex-column gap-2 w-25 mx-auto rounded p-3 sign-form mt-36'>
                <img src ={require("../../assets/brand.png")} alt="" className='mx-auto' />
                <label htmlFor="username"> اسم الخدمة </label>
                <input  type="text"
                        id='username' 
                        value={serviceTitle} 
                        onInput={(e) => {
                            setServiceTitle(e.target.value)
                }} 
                />
                <label htmlFor="userEmail"> تفاصيل الخدمة </label>
                <input  type="text" 
                        id='userEmail' 
                        value={serviceDetails} 
                        onInput={(e) => {
                            setServiceDetails(e.target.value)
                }} 
                />
                <label htmlFor="password"> سعر الخدمة </label>
                <input  type="password" 
                        id='password' 
                        value={servicePrice} onInput={(e) => {
                            setServicePrice(e.target.value)
                }} 
                />
                <label htmlFor="password"> نوع الخدمة </label>
                <input  type="password" 
                        id='password' 
                        value={serviceCategory} onInput={(e) => {
                            setServiceCategory(e.target.value)
                }} 
                />
                <hr className='mx-auto'/>
                <button  type="submit" 
                        className='submit hover:bg-[#1EAAAD] hover:text-white p-2 rounded' 
                        onClick={(e) =>{
                            e.preventDefault()
                            handleSubmit()
                            }}> أنشأ حسابك </button>
                <Link to={'/'} style={{textDecoration: 'none'}}> لاحقا </Link>
            </form>
        </div>
    </div>
)
}

export default BeProvider