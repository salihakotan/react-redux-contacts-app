import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { contactSelectors, deleteContacts } from "../../redux/contactsSlice";
import "./styles.css";
import { Link } from "react-router-dom";
import Item from "./Item";

function List() {
  const contacts = useSelector(contactSelectors.selectAll);
  const total = useSelector(contactSelectors.selectTotal);
  const dispatch = useDispatch();

  const handleDeleteAll = () => {
    if (window.confirm("are you sure?")) {
      dispatch(deleteContacts());
    }
  };

  return (
    <>
      {total > 0 && (
        <div onClick={handleDeleteAll} className="deleteAllBtn">
          Delete All
        </div>
      )}
      <ul className="list">
        {contacts.map((contact) => (
          <Item key={contact.id} contact={contact} />
        ))}
      </ul>
    </>
  );
}

export default List;
