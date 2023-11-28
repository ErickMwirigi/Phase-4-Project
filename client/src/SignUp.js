import React from 'react'
import { useState } from 'react'

export default function SignUp({ formdata }){ 

    // const [confirmPass, setConfirmPass] = useState("")
    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        contact:"",
        password:"",

    })

    function handleChange(e){
        const id = e.target.id
        const value = e.target.value

        setFormData({...formData, [id]:value})
        }

    function handleSubmit(e){
        e.preventDefault()
        if(!formData) return 
        setFormData({
            firstname: "",
            lastname: "",
            email: "",
            contact:"",
            password:"",
    
        })
        alert(`Welcome ${formData.lastname}`)
    }


  return (
        <div className='login-dialogue'>
            <h1>Logo</h1>
            <div className='form-dialogue'>
                <form onSubmit={handleSubmit}>
                    <h2>Welcome to Our App!</h2>
                    <label htmlFor='firstname'> Firstname :
                        <input
                        type="text"
                        id="firstname"
                        value={formData.firstname}
                        autoComplete="off"
                        onChange={handleChange}
                        />
                    </label>
                    <label htmlFor='lastname'> Lastname :
                        <input
                        type="text"
                        id="lastname"
                        value={formData.lastname}
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
                    <label htmlFor='contact'> Contact :
                        <input
                        type="number"vfsed
                        id="contact"
                        value={formData.contact}
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
