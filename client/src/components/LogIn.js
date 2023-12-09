import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Logo from "../assets/logo.png";


export default function LogIn({ onLogIn }) {

    const [formData, setFormData] = useState({
        username: "",
        password: ""
    })

    const navigate = useNavigate()
    function handleSubmit(e) {
        e.preventDefault()
        if (!formData) return
        setFormData({
            username: "",
            password: "",

        })
        fetch("http://127.0.0.1:5555/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData),
        })
            .then((r) => r.json())
            .then((resp) => {

                alert(`Welcome back ${resp.firstname}`)
                onLogIn(resp)
                navigate('/products', { replace: true })

            })
    }

    function handleChange(e) {
        const nam = e.target.name
        const value = e.target.value
        setFormData({ ...formData, [nam]: value })
    }

    return (
        <div className='login-dialogue'>
            <img className="logo" alt='logo' src={Logo} />
            <div className='form-dialogue'>
                <form onSubmit={handleSubmit}>
                    <h2>Welcome Back</h2>
                    <div className='form-item'>
                        <label className='username'>Username:</label>
                        <input
                            type='text'
                            name='username'
                            value={formData.username}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='form-item'>

                        <label className='password'>Password:</label>
                        <input
                            type='password'
                            name='password'
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </div>
                    <button className='login-btn' type='submit'>Log In</button>
                </form>
            </div>
        </div >
    )
}
