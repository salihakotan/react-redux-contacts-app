import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {  updateContact } from "../../redux/contactsSlice";
import {  useNavigate } from "react-router-dom";

function EditForm({contact}) {
    

    const dispatch = useDispatch()
    const navigate = useNavigate()

    

  const [name,setName] = useState(contact.name)
  const [phone,setPhone] = useState(contact.phone)

  const handleSubmit = (e) => {
    e.preventDefault()
        
    console.log("updated")

    if(!name || !phone) return false
        
   


     dispatch(updateContact({
        id: contact.id,
        changes: {
            name,
            phone
        }
     }))

      navigate("/")

}

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
          placeholder="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <br />
        <div className="btn">
          <button type="submit">Update</button>
        </div>
      </form>
    </div>
  );
}

export default EditForm;
