import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { addContacts } from '../../redux/contactsSlice'
import { nanoid } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

function EditContact() {

    const id = useParams()

    
    const dispatch = useDispatch()

    const [name,setName] = useState('')
    const [phone,setPhone] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
            
        console.log("submitted")

        if(!name || !phone) return false
            
        // const names = name.split(',')

        // const data = names.map((name) =>({id:nanoid(),name,phone}) )

        // dispatch(addContacts(data))


        // dispatch(addContact({id:nanoid(), name:name,phone}))

        setName('')
        setPhone('')
    }



  return (
    <div>
    <form onSubmit={handleSubmit}>
        <input value={name} onChange={(e) => setName(e.target.value)}/>
        <input value={phone} onChange={(e)=> setPhone(e.target.value)}/>
        <button type='submit'>Save</button>
        </form>

    </div>
  )
}

export default EditContact