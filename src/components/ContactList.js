import { ContactItem } from "./ContactItem";

export function ContactList({ contacts, onDelete }) {
  return (
    <>
      {contacts.map((contact, idx) => (
        <ContactItem
          key={contact.id}
          contact={contact}
          idx={idx}
          method={onDelete}
        />
      ))}
    </>
  );
}

// import { OptionsBtn } from "./ContactList.styled";

// import React from "react";
// const ContactList = ({ contacts, onDeleteContact }) => (
//   <ul>
//     {contacts.map((contact) => (
//       <li key={contact.id}>
//         <p>{contact.name}</p>
//         <OptionsBtn type="button" onClick={() => onDeleteContact(contact.id)}>
//           Delete
//         </OptionsBtn>
//       </li>
//     ))}
//   </ul>
// );

// export default ContactList;
