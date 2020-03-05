import React, {Component} from "react";
import {uuid} from 'uuidv4';
import AddContactForm from "./AddContactForm";
import ContactList from "./ContactList";
import Filter from "./Filter";
import ThemeSelector from "./ThemeSelector";
import ThemeContext from "../context/themeContext";
import {themeConfig} from "../context/themeContext";
import Container from "./Container";

export default class App extends Component {

  state = {
    contacts: [],
    filter: '',
    theme: 'light'
  };

  getFilteredContacts() {
    const {contacts, filter} = this.state;
    if (filter === "")
      return contacts;
    else
      return contacts.filter(contact => contact.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1);
  }

  componentDidMount() {
    const storedContacts = localStorage.getItem('contacts');

    if (storedContacts) {
      this.setState({
        contacts: JSON.parse(storedContacts)
      });
    }
  };

  handleChange = e => {
    const {name, value} = e.target;

    this.setState({[name]: value});
  };

  onAddContact = (name, number) => {
    const contact = {
      id: uuid(),
      name: name,
      number: number
    };

    if (name === "" || number === "") {
      return alert("Please fill all fields!");
    }

    if (this.state.contacts.find(element => (element.name.toLowerCase() === name.toLowerCase()))) {
      return alert("This contact already added!")
    }

    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, contact]
      }
    })
  };

  handleDelete = (contactId) => {
    const {contacts} = this.state;
    const newContacts = contacts.filter(contact => contact.id !== contactId);
    this.setState({contacts: newContacts});
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts)
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
  };

  toggleTheme = () => {
    this.setState({
      theme: this.state.theme === "dark" ? "light" : "dark"
    });
  };

  render() {
    return (

      <ThemeContext.Provider
        value={{
          type: this.state.theme,
          config: themeConfig[this.state.theme]
        }}
      >
        <Container>
          <ThemeSelector toggleTheme={this.toggleTheme}/>
          <h2>PhoneBook</h2>
          <AddContactForm onAddContact={this.onAddContact}/>
          <h3>Contacts</h3>
          <Filter handleChange={this.handleChange}/>
          <ContactList contacts={this.getFilteredContacts()} handleDelete={this.handleDelete}/>
        </Container>
      </ThemeContext.Provider>

    )
  }
}
