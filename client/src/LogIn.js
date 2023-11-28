import React from 'react'
import { useState } from 'react'

export default function LogIn({prop}) {

    // const [isloggedIn, setLoggedIn] = useState(false)
    const [formData, setFormData] = useState({
        username:"",
        password:""
    })

    function handleSubmit(e){
        e.preventDefault()
        if(!formData) return 
        setFormData({
            username: "",
            password:"",
    
        })
        alert(`Welcome ${formData.username}`)
        // fetch("url", {
        //     method:"POST",
        //     body:
        //         JSON.stringify(formData),
        //     headers:{
        //         "Content-Type":"application/json"
        //     }
        // })
        // .then((r)=>r.json())
        // .then((resp)=>{
        //     return formData
        // })
    }

    function handleChange(e){
        const nam = e.target.name
        const value = e.target.value
        setFormData({...formData, [nam] : value})
    }

  return (
    <div className='login-dialogue'>
        <span id='logo'><h1>Logo</h1></span>
        <div className='form-dialogue'>
            <form onSubmit={handleSubmit}>
                <h2>Welcome Back</h2>
                <label className='username'> Username :
                    <input
                    type='text'
                    name='username'
                    value={formData.username}
                    onChange={handleChange}
                    />
                </label>
                <label className='password'> Password :
                    <input
                    type='password'
                    name='password'
                    value={formData.password}
                    onChange={handleChange}
                    />
                </label>
                <button className='login-btn' type='submit'>Log In</button>
            </form>
        </div>
    </div>
  )
}
