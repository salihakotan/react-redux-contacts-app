import React from "react";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import { Link } from "react-router-dom";

function Item({ contact }) {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    if (window.confirm("are you sure?")) {
      dispatch(deleteContact(id));
    }
  };

  return (
    <li>
      <span>{contact.name}</span>
      <span>{contact.phone}</span>
      <div className="editButtons">,
      <span className="editBtn">
            <Link to={`/edit/${contact.id}`}>Edit</Link>
        </span>
        <span
            className="deleteBtn"
            onClick={() => handleDelete(contact.id)}
        >X</span>
       
      </div>
    </li>
  );
}

export default Item;
