import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addContact, addContacts } from '../../redux/contactsSlice'
import { nanoid } from '@reduxjs/toolkit'

function Form() {


    const dispatch = useDispatch()

    const [name,setName] = useState('')
    const [phone,setPhone] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault()
            
        console.log("submitted")

        if(!name || !phone) return false
            
       


         dispatch(addContact({id:nanoid(), name, phone:phone}))

        setName('')
        setPhone('')
    }





  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input placeholder='name' value={name} onChange={(e) => setName(e.target.value)}/>
            <br/>
            <input placeholder='phone' value={phone} onChange={(e) => setPhone(e.target.value)}/>
            <br/>
            <div className='btn'>
            <button  type='submit'>Add</button>

            </div>
            </form>
    </div>
  )
}

export default Form