import React, { useState, useEffect } from 'react'

export default function ProfileSettings( { userData }) {

const [formData, setFormData] = useState({
        name: "",
        email: "",
        address:"",
        password:"",

    })

useEffect(()=> {
    fetch(`http://127.0.0.1:5555/customers/${userData.id}`)
    .then((r)=>r.json())
    .then((r)=>console.log(r))})

  function handleSubmit(e){
    e.preventDefault()
    // if(!formData) return 

    // alert(`Welcome ${formData.name}`)
    console.log(formData)
    fetch("http://127.0.0.1:5555/customers",{
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
        <h1>Logo</h1>
        <div className='form-dialogue'>
            <form onSubmit={handleSubmit}>
                <h2>Welcome to Our App!</h2>
                <label htmlFor='name'> name :
                    <input
                    type="text"
                    id="name"
                    value={userData.name}
                    autoComplete="off"
                    onChange={handleChange}
                    />
                </label>
                <label htmlFor='email'> Email :
                    <input
                    type="email"
                    id="email"
                    value={userData.email}
                    onChange={handleChange}
                    />
                </label>
                <label htmlFor='address'> Address :
                    <input
                    type="text"
                    id="address"
                    value={userData.address}
                    onChange={handleChange}
                    />
                </label>
                <label htmlFor='password'> Password :
                    <input
                    type="password"
                    id="password"
                    value={userData.password}
                    onChange={handleChange}
                    />
                </label>
                <button className='login-btn' type='submit'>Sign Up</button>
            </form>
        </div>
    </div>
)
}
