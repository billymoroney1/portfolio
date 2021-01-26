import React, {useState} from 'react'
const axios = require('axios')

export default function Contact() {

    const [name, setName] = useState("")
    const [message, setMessage] = useState("")
    const [email, setEmail] = useState("")

    const handleChange = (e) => {
        const target = e.target
        const value = target.value
        const user = target.name

        if (user === 'name'){
            setName(value)
        } else if (user === 'email'){
            setEmail(value)
        } else {
            setMessage(value)
        }
    }

    const handleSubmit = (e) => {
        console.log(name, email, message)
        e.preventDefault()
        axios.post('https://billy-moroney-portfolio.herokuapp.com/send', {
            name: name,
            email: email,
            message: message
        }).then((response) => {
            console.log(response)
        }).catch((error)=>{
            console.log(error)
        })
    }

    const resetForm = () => {
        setName("")
        setEmail("")
        setMessage("")
    }

    return (
        <div className='bg-cyan-100'>
            <div className='flex items-center h-screen w-full'>
                <div className='w-full bg-rose-500 rounded shadow-lg p-4 m-4 md:max-w-3xl md:mx-auto text-gray-800'>
                <h1 className='mb-2 md:flex md:flex-wrap md:justrify-between uppercase font-bold text-3xl text-grey-darkest'>contact</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="flex flex-col mb-4">
                            <label className='mb-2 uppercase font-bold text-lg text-grey-darkest' for='name'>name</label> 
                            <input className='border py-2 px-3 text-grey-darkest' name='name' type='text' value={name} onChange={handleChange}/>
                        </div>
                        <div className="flex flex-col mb-4">
                            <label className='mb-2 uppercase font-bold text-lg text-grey-darkest' for='email'>email</label>
                            <input className='border py-2 px-3 text-grey-darkest' name='email' type='email' value={email} onChange={handleChange}/>
                        </div>
                        <div className="flex flex-col mb-4">
                            <label className='mb-2 uppercase font-bold text-lg text-grey-darkest' for='message'>message</label>
                            <textarea className='border py-2 px-3 text-grey-darkest' name='message' value={message} onChange={handleChange} />
                        </div>
                        
                        <button className='block border bg-gray-400 hover:bg-cyan-500 uppercase text-lg mx-auto rounded p-4' type="submit" value="Submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
