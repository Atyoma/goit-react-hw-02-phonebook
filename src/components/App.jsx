import {Component} from 'react';
import { ContactForm } from './ContactForm';
import { Filter } from './Filter';
import { ContactList } from './ContactList';
import { FormBox, Phonebook} from './ContactForm.styled';
import { ContactListBox } from './ContactList.styled';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

export class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'}
    ],
    filter: ''
  }

  onDelete = (id) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(
      contact => contact.id !== id)
    }))
  }
    matchСheck = (data) => {
    const currentName = this.state.contacts.find(el => (el.name.toLowerCase() === data.name.toLowerCase()));
    if (currentName) return alert(currentName.name + " is already in contacts");
    
    data.id = nanoid();
    this.setState(prev => ({ contacts: [data, ...prev.contacts] }))
  }
  filterChange = (e) => {
    e.preventDefault();
    this.setState({ filter: e.currentTarget.value });
  }

  render() {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    const filteredContacts = contacts.filter(contact => (contact.name.toLowerCase().includes(normalizedFilter)));

    return (
      <Phonebook>
        <FormBox>
          <h1>Phonebook</h1>
          <ContactForm submitHandle={this.submitHandle}/>
        </FormBox>
        <ContactListBox>
          <h2>Contact List</h2>
          <Filter filter={filter} filterChange={this.filterChange}/>
          {contacts.length ?
            <ContactList contacts={filteredContacts} onDelete={this.onDelete} /> :
            <p>No any contacts</p>}
        </ContactListBox>
      </Phonebook>
    );
  };
}
ContactForm.propTypes = {
  submitHandle: PropTypes.func
}
Filter.propTypes = {
  filter: PropTypes.string,
  filterChange: PropTypes.func
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  onDelete: PropTypes.func
}







