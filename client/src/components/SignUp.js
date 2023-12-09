import React from 'react'
import { useState } from 'react'

export default function SignUp({ formdata }){ 

    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        address:"",
        password:"",

    })

    function handleChange(e){
        const id = e.target.id
        const value = e.target.value

        setFormData({...formData, [id]:value})
        }

    function handleSubmit(e){
        e.preventDefault()
        // if(!formData) return 

        alert(`Welcome ${formData.firstname}`)
        // console.log(formData)
        fetch("http://127.0.0.1:5555/customers",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(formData)
        })
        .then((r)=>r.json())
        .then((r)=>console.log(r))
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
