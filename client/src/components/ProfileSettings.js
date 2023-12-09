import React, { useState } from 'react'

export default function ProfileSettings({ userData = {} }) {

    const [formData, setFormData] = useState(userData);

    function handleSubmit(e) {
        e.preventDefault()

        // Remove created_at field because it needs to be parsed to DateTime in the backend
        // Yet we don't have to pass it because it gets created in the backend

        const { created_at: fda, ...fd} = formData;

        fetch(`http://127.0.0.1:5555/customers/${userData.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(fd)
        })
            .then((r) => r.json())
            .then((r) => console.log(r))
    }


    function handleChange(e) {
        const id = e.target.id
        const value = e.target.value
        setFormData({ ...userData, ...formData, [id]: value })
    }

    return (
        <div className='settings-dialogue'>
            <h4>User Details</h4>
            <form onSubmit={handleSubmit}>
                <div className='name-section'>
                    <label htmlFor='firstname'> Firstname :
                        <input
                            type="text"
                            id="firstname"
                            placeholder={userData.firstname}
                            value={formData.firstname}
                            autoComplete="off"
                            onChange={handleChange}
                        />
                    </label>
                    <label htmlFor='lastname'> Lastname :
                        <input
                            type="text"
                            id="lastname"
                            placeholder={userData.lastname}
                            value={formData.lastname}
                            autoComplete="off"
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div className='addresses'>
                    <label htmlFor='email'> Email :
                        <input
                            type="email"
                            id="email"
                            // placeholder={userData.email}
                            value={formData.email}
                            autoComplete="off"
                            onChange={handleChange}
                        />
                    </label>
                    <label htmlFor='address'> Address :
                        <input
                            type="text"
                            id="address"
                            // placeholder={userData.address}
                            value={formData.address}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div>
                    <label htmlFor='password'> Password :
                        <input
                            type="password"
                            id="password"
                            // placeholder={userData.password}
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <button className='save-btn' type='submit'>Save Changes</button>
            </form>
        </div>
    )
}
