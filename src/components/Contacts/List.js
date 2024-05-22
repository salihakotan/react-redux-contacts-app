import React from 'react'
import { useSelector } from 'react-redux'
import { contactSelectors } from '../../redux/contactsSlice'
import "./styles.css"
import { Link } from 'react-router-dom'

function List() {


    const contacts = useSelector(contactSelectors.selectAll)

   

  return (
    <div>List
    
        <ul className='contacts-ul'>
            {contacts.map((contact) => (
                <li key={contact.id}>
                    <span>{contact.name}</span>
                    <span>{contact.phone}</span>
                    <Link to="/edit">Edit</Link>
                </li>
            ))}
        </ul>
    
    </div>
  )
}

export default List