import React from 'react'
import { Container } from 'react-bootstrap'
import NavBar from '../Navbar/Navbar'
import SearchBar from '../Searchbar/SearchBar'
import Footer from '../Footer/Footer'

const Chat = () => {

const chats =[
    {
        image: require("../../assets/user.jpg"),
        name: "mo'men anwar",
        message: 'mmmmmmmmmmmmmmmmmmmmmmmmmmm'
    },
    {
        image: require("../../assets/user.jpg"),
        name: "mo'men anwar",
        message: 'mmmmmmmmm'
    },
    {
        image: require("../../assets/user.jpg"),
        name: "mo'men anwar",
        message: 'mmmmmmmmm'
    },
    {
        image: require("../../assets/user.jpg"),
        name: "mo'men anwar",
        message: 'mmmmmmmmm'
    },
    {
        image: require("../../assets/user.jpg"),
        name: "mo'men anwar",
        message: 'mmmmmmmmm'
    },
    {
        image: require("../../assets/user.jpg"),
        name: "mo'men anwar",
        message: 'mmmmmmmmm'
    },
    {
        image: require("../../assets/user.jpg"),
        name: "mo'men anwar",
        message: 'mmmmmmmmm'
    },
    {
        image: require("../../assets/user.jpg"),
        name: "mo'men anwar",
        message: 'mmmmmmmmm'
    },
    {
        image: require("../../assets/user.jpg"),
        name: "mo'men anwar",
        message: 'mmmmmmmmm'
    },
    {
        image: require("../../assets/user.jpg"),
        name: "mo'men anwar",
        message: 'mmmmmmmmm'
    },
]

return (
    <>
    <div style={{ position: 'sticky', top: '0', zIndex: '10', backgroundColor: 'white'}}>
        <NavBar />
        <SearchBar />
    </div>
    <div className='py-2'>
        <Container className='d-flex' style={{height: '500px'}}>
            <div className="chats w-25 d-flex flex-column gap-3 p-2 bg-[#02304d]" style={{overflow: 'auto', borderRadius: '0 20px 20px 0'}}>
                { chats.map( (chat, i) => (
                    <div key={i} className='d-flex cursor-pointer' style={{borderBottom: '2px solid #1EAAAD'}}>
                        <div className='w-25'>
                            <img src={chat.image} alt="" className='rounded-circle ratio ratio-1*1 w-full'/>
                        </div>
                        <div className='px-3 text-white w-75 text-end'>
                            <h5>{ chat.name }</h5>
                            <div style={{opacity: '0.6', textOverflow: 'ellipsis', overflow: 'hidden'}}>{ chat.message }</div>
                        </div>
                    </div>
                )) }
            </div>
            <div className='w-75 p-3' style={{backgroundImage: 'linear-gradient(to right, rgb(41, 177, 190), rgb(107, 121, 185))', borderRadius: '20px 0 0 20px'}}>
                <div className="port w-5/6">

                </div>
                <div className="sending">

                </div>
            </div>
        </Container>
    <Footer />
    </div>
    </>
)
}

export default Chat