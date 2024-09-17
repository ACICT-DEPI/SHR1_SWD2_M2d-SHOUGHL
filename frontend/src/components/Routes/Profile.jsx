import React, { useEffect, useState } from 'react'

const Profile = () => {

    const [ user, setUser] = useState({})
    useEffect( () => {
        const userId = JSON.parse(localStorage.getItem('user')).id
        fetch(`http://localhost:4000/api/users/${userId}`)
        .then( res => res.json())
        .then( data => setUser(data))
    }, [])

return (
    <div>
        <div>
            {user.image ? 
                <div>
                    <img src={user.image} alt='' />
                    <button> تعديل الصورة </button>
                </div> 
                :
                <button> أضف صورة شخصية </button>}
            <h1>{user.username} <button> تعديل الاسم </button></h1>
            
        </div>
    </div>
)
}

export default Profile