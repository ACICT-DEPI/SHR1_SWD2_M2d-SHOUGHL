import React, { useEffect, useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import { FaHeart } from 'react-icons/fa'
import { MdOutlineAddShoppingCart } from 'react-icons/md'
import NavBar from '../Navbar/Navbar'
import SearchBar from '../Searchbar/SearchBar'
import Footer from '../Footer/Footer'
import { useSnackbar } from 'notistack'

const Services = () => {

  const [ services, setServices ] = useState([])

  const { enqueueSnackbar } = useSnackbar()

  useEffect(()=> {
    fetch('http://localhost:4000/api/services')
    .then(res => res.json())
    .then(data => setServices(data.data))
  }, [])

  const buyService = async(id) => {    
    const res = await fetch(`http://localhost:4000/api/services/${id}/${JSON.parse(localStorage.getItem('currentUser')).id}`)
  const data = await res.json()
  
  if(data.success){
    enqueueSnackbar(data.data, {variant: 'success'})
}else {
    enqueueSnackbar(data.data, {variant: 'error'})
}
  }
  return (
    <div>
      <div style={{ position: 'sticky', top: '0', zIndex: '10', backgroundColor: 'white'}}>
        <NavBar />
        <SearchBar />
      </div>
      <Container className='bg-[#eee] my-3 rounded'>
      <div className='d-flex gap-3 flex-wrap py-4 justify-evenly'>
                { services.map( service => (<div key={service._id} style={{boxShadow: '0 8px 10px #0000001F', width: '300px'}}>
                    <div className='d-flex gap-4 bg-[#02304d] p-2'>
                        <img src={ service.provider.image } alt="" className='rounded-circle w-20 m-0'/>
                        <h4 className='text-white'>{ service.provider.name }</h4>
                    </div>
                    <div style={{backgroundImage: 'linear-gradient(to right, rgb(41, 177, 190), rgb(107, 121, 185))'}}>
                        <p className='text-black text-capitalize p-2'>{ service.serviceTitle }</p>
                        <p className='text-black text-capitalize p-2'>{ service.servicePrice }</p>
                        <p className='text-black text-capitalize p-2'>{ service.serviceDetails }</p>
                        <p className='text-black text-capitalize p-2'>{ service.serviceCategory }</p>
                    </div>
                    <div className="d-flex py-2 justify-around">
                        <Button className='btn-success' onClick={()=>buyService(service._id)}><MdOutlineAddShoppingCart /></Button>
                    </div>
                </div>)) }
            </div>
      </Container>
      <Footer />
    </div>
  )
}

export default Services