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
            
        const names = name.split(',')

        const data = names.map((name) =>({id:nanoid(),name,phone}) )

        dispatch(addContacts(data))


        // dispatch(addContact({id:nanoid(), name:name,phone}))

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
            <button type='submit'>Add Contact</button>
        </form>
    </div>
  )
}

export default Form