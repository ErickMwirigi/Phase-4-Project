import React, { useState, useEffect } from 'react'

export default function ProfileSettings( { userID}) {

const [ formData, setFormData ] = useState('')

  const fetchUser =  fetch(`http://127.0.0.1:5555/customers/${userID}`)
                    .then((r)=>r.json())
                    .then((r)=>setFormData(r))

useEffect(()=> fetchUser(), [])

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
    function handleChange(){
        
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
                    value={formData.name}
                    autoComplete="off"
                    onChange={handleChange}
                    />
                </label>
                <label htmlFor='email'> Email :
                    <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    />
                </label>
                <label htmlFor='address'> Address :
                    <input
                    type="text"vfsed
                    id="address"
                    value={formData.address}
                    onChange={handleChange}
                    />
                </label>
                <label htmlFor='password'> Password :
                    <input
                    type="password"
                    id="password"
                    value={formData.password}
                    onChange={handleChange}
                    />
                </label>
                
                <button className='login-btn' type='submit'>Sign Up</button>
            </form>
        </div>
    </div>
)
}
