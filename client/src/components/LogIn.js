import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function LogIn({ onLogIn }) {

    const [formData, setFormData] = useState({
        username:"",
        password:""
    })

   const navigate = useNavigate()
    function handleSubmit(e){
        e.preventDefault()
        if(!formData) return 
        setFormData({
            username: "",
            password: "",
    
        })
        fetch("http://127.0.0.1:5555/login", {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(formData),
        })
        .then((r)=>r.json())
        .then((resp)=>{
            console.log(resp)
            alert(`Welcome back ${resp.name}`)
            onLogIn(resp)
            navigate('/products', {replace:true})

        })
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
