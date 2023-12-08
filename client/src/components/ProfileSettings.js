import React, { useState, useEffect } from 'react'

export default function ProfileSettings( { userData }) {

const [formData, setFormData] = useState({
})

useEffect(()=> {
    fetch(`http://127.0.0.1:5555/customers`)
    .then((r)=>r.json())
    .then((r)=>console.log(r))})

  function handleSubmit(e){
    e.preventDefault()
    // if(!formData) return 

    // alert(`Welcome ${formData.name}`)
    console.log(formData)
    fetch(`http://127.0.0.1:5555/customers/${userData.id}`,{
        method:"PATCH",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(formData)
    })
    .then((r)=>r.json())
    .then((r)=>console.log(r))
}

function handleChange(e){
    const id = e.target.id
    const value = e.target.value

    setFormData({...formData, [id]:value})
}

  return (
    <div className='login-dialogue'>
        <h4>User Details</h4>
        <div className='settings-dialogue'>
            <form onSubmit={handleSubmit}>
                <label htmlFor='name'> name :
                    <input
                    type="text"
                    id="name"
                    placeholder={userData.name}
                    value={formData.name}
                    autoComplete="off"
                    onChange={handleChange}
                    />
                </label>
                <label htmlFor='email'> Email :
                    <input
                    type="email"
                    id="email"
                    placeholder={userData.email}
                    value={formData.email}
                    onChange={handleChange}
                    />
                </label>
                <label htmlFor='address'> Address :
                    <input
                    type="text"
                    id="address"
                    placeholder={userData.address}
                    value={formData.address}
                    onChange={handleChange}
                    />
                </label>
                <label htmlFor='password'> Password :
                    <input
                    type="password"
                    id="password"
                    // placeholder={userData.password}
                    value={formData.password}
                    onChange={handleChange}
                    />
                </label>
                <button className='save-btn' type='submit'>Save Changes</button>
            </form>
        </div>
    </div>
)
}
