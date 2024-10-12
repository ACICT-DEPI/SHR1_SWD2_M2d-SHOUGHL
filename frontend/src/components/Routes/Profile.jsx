import { Button, Container } from 'react-bootstrap'
import { FaUserEdit, FaPlus, FaHeart } from "react-icons/fa"
import { Link, useNavigate, useParams } from 'react-router-dom'
import { IoIosLogOut } from "react-icons/io"
import { PiChatsBold } from "react-icons/pi"
import { useEffect, useState } from 'react'
import { enqueueSnackbar } from 'notistack'
import NavBar from '../Navbar/Navbar'
import SearchBar from '../Searchbar/SearchBar'
import Footer from '../Footer/Footer'
import { TbEdit } from "react-icons/tb"
import { IoTrashBin } from "react-icons/io5"
import { MdOutlineAddShoppingCart } from 'react-icons/md'
import Swal from 'sweetalert2'




const Profile = () => {

    const navigate = useNavigate()
    const { id } = useParams()
    const [ user, setUser ] = useState({})
    const [ ismyProfile, setIsMyProfile ] = useState(false)

    
useEffect(() => {
        fetch(`http://localhost:4000/api/users/${id}`)
        .then( res => res.json())
        .then( data => setUser(data.data))
    if(id === JSON.parse(localStorage.getItem('currentUser')).id){
            setIsMyProfile(true)
        }
}, [id])

    const logOut = async () => {
        
        const res = await fetch('http://localhost:4000/api/users/logout')
        const data = await res.json()

        if(data.success){
            enqueueSnackbar(data.data , { variant: 'success'})
            localStorage.setItem('currentUser', JSON.stringify({}))
            navigate('/')
        } else {
            enqueueSnackbar(data.data , { variant: 'error'})
        }
    }

    const buyService = async(id) => {    
        const res = await fetch(`http://localhost:4000/api/services/${id}/${JSON.parse(localStorage.getItem('currentUser')).id}`)
      const data = await res.json()
      
      if(data.success){
        enqueueSnackbar(data.data, {variant: 'success'})
    }else {
        enqueueSnackbar(data.data, {variant: 'error'})
    }
      }

    const deleteService = (id)=> {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:4000/api/services/${id}`)
                .then( res => res.json())
                .then( data => {if(data.success){
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your Service has been deleted.",
                        icon: "success"
                    });
                }})

                
            }
        });
    }


    const services = [
        {
            title: 'one',
            price: 100,
            description: 'jjjjjjjjjjjjjjjl;;;llcmnm',
            category: 'software',
            provider: {
                image: require('../../assets/user.jpg'),
                name: 'momen anwar'
            }
        },
        {
            title: 'one',
            price: 100,
            description: 'jjjjjjjjjjjjjjjl;;;llcmnm',
            category: 'software',
            provider: {
                image: require('../../assets/user.jpg'),
                name: 'momen anwar'
            }
        },
        {
            title: 'one',
            price: 100,
            description: 'jjjjjjjjjjjjjjjl;;;llcmnm',
            category: 'software',
            provider: {
                image: require('../../assets/user.jpg'),
                name: 'momen anwar'
            }
        },
        {
            title: 'one',
            price: 100,
            description: 'jjjjjjjjjjjjjjjl;;;llcmnm',
            category: 'software',
            provider: {
                image: require('../../assets/user.jpg'),
                name: 'momen anwar'
            }
        },
        {
            title: 'one',
            price: 100,
            description: 'jjjjjjjjjjjjjjjl;;;llcmnm',
            category: 'software',
            provider: {
                image: require('../../assets/user.jpg'),
                name: 'momen anwar'
            }
        },
        {
            title: 'one',
            price: 100,
            description: 'jjjjjjjjjjjjjjjl;;;llcmnm',
            category: 'software',
            provider: {
                image: require('../../assets/user.jpg'),
                name: 'momen anwar'
            }
        },
        {
            title: 'one',
            price: 100,
            description: 'jjjjjjjjjjjjjjjl;;;llcmnm',
            category: 'software',
            provider: {
                image: require('../../assets/user.jpg'),
                name: 'momen anwar'
            }
        },
        {
            title: 'one',
            price: 100,
            description: 'jjjjjjjjjjjjjjjl;;;llcmnm',
            category: 'software',
            provider: {
                image: require('../../assets/user.jpg'),
                name: 'momen anwar'
            }
        },
        {
            title: 'one',
            price: 100,
            description: 'jjjjjjjjjjjjjjjl;;;llcmnm',
            category: 'software',
            provider: {
                image: require('../../assets/user.jpg'),
                name: 'momen anwar'
            }
        },
        {
            title: 'one',
            price: 100,
            description: 'jjjjjjjjjjjjjjjl;;;llcmnm',
            category: 'software',
            provider: {
                image: require('../../assets/user.jpg'),
                name: 'momen anwar'
            }
        },
    ]

return (
    <div>
        <div style={{ position: 'sticky', top: '0', zIndex: '10', backgroundColor: 'white'}}>
        <NavBar />
        <SearchBar />
    </div>
    <div className='w-100 py-2'>
        <div className='container bg-[#eee] py-2 d-flex flex-column gap-4 '>
            <div className='d-flex justify-between'>
                <div className='ratio ratio-1x1 w-25 border-[#1EAAAD]'>
                    <img src={ require('../../assets/user.jpg') } alt='' className='rounded-circle'/>
                </div> 
                <div style={{textAlign: 'start', width: '400px'}}>
                    <h2 className='text-[#02304d] text-capitalize '> الاسم: { user.username }</h2>
                    <h6 className='text-[#02304d] text-capitalize '> البريد الالكترونى : { user.userEmail }</h6>
                    <h6 className='text-[#02304d] text-capitalize '> الدولة: { user.userCountry }</h6>
                    <h6 className='text-[#02304d] text-capitalize '> رقم الهاتف: { user.userPhoneNumber }</h6>
                </div>
                <div className='d-flex flex-column gap-4 p-5'>
                    { ismyProfile? <>
                        <Button> <Link to='/editProfile' className='text-white text-decoration-none'> تعديل الملف الشخصى <FaUserEdit className='d-inline'/></Link></Button>
                        <Button className=' btn-danger' onClick={logOut}> تسجيل خروج  <IoIosLogOut className='d-inline'/></Button>
                        </>
                        :
                        <Button className='btn-success'> <PiChatsBold /></Button> }
                </div>
            </div>
            <h2 className='text-end px-5'>خدماتى: </h2>
            <Container>
                {ismyProfile && <Button className='mb-3 btn-success'> أضف خدمة <FaPlus className='d-inline'/> </Button>}
            <div className='d-flex gap-3 flex-wrap justify-evenly'>
                { services.map( (service, i) => (<div key={i} style={{boxShadow: '0 8px 10px #0000001F'}}>
                    <div className='d-flex gap-4 bg-[#02304d] p-2 align-items-center'>
                        <img src={ service.provider.image } alt="" className='rounded-circle w-20 m-0'/>
                        <h4 className='text-white'>{ service.provider.name }</h4>
                    </div>
                    <div>
                        <p className='text-black text-capitalize p-2'>{ service.title }</p>
                        <p className='text-black text-capitalize p-2'>{ service.price }</p>
                        <p className='text-black text-capitalize p-2'>{ service.description }</p>
                        <p className='text-black text-capitalize p-2'>{ service.category }</p>
                    </div>
                    <hr className='mx-auto mb-0'/>
                    <div className="d-flex justify-around p-3">
                        { ismyProfile? <>
                            <Button className='btn-success' onClick={()=> deleteService(service._id)}><TbEdit /></Button>
                            <Button className='btn-danger'><IoTrashBin /></Button>
                        </>
                        :
                        <>
                        
                            <Button className='btn-success' onClick={()=>buyService(service._id)}><MdOutlineAddShoppingCart /></Button></>}
                    </div>
                </div>)) }
            </div>
            </Container>
        </div>
    </div>
    <Footer />
    </div>
)
}

export default Profile