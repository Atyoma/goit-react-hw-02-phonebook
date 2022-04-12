import {
  ListItem,
  NumberOrder,
  Number,
  DeleteContact,
} from "./ContactList.styled";

export const ContactList = ({ contacts, method }) => {
  return (
    <>
      {contacts.map((contact, index) => (
        <ListItem>
          <NumberOrder>{index + 1}</NumberOrder>
          {contact.name}: <Number>{contact.number}</Number>
          <DeleteContact type="button" onClick={() => method(contact.id)}>
            Delete
          </DeleteContact>
        </ListItem>
      ))}
    </>
  );
};
