import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContact, deleteContact, fetchContacts, setFilter } from "../redux/counterSlice";
import ContactForm from "./ContactForm.jsx";
import ContactList from "./ContactList.jsx";
import Filter from "./Filter.jsx";

function App() {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.contacts.filter);
  const contacts = useSelector((state) => state.contacts.items);
  const isLoading = useSelector((state) => state.contacts.isLoading);
  const error = useSelector((state) => state.contacts.error);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleAddContact = (newContact) => {
    const existingContact = contacts.find(
      (contact) =>
        contact.name &&
        contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (existingContact) {
      alert(`Contact ${existingContact.name} was already added.`);
      return;
    }

    dispatch(addContact(newContact));
  };

  const handleFilterChange = (event) => {
    dispatch(setFilter(event.target.value));
  };

  const handleDeleteContact = (contactId) => {
    dispatch(deleteContact(contactId));
  };

  const filteredContacts = contacts
    ? contacts.filter((contact) =>
        contact.name && contact.name.toLowerCase().includes(filter.toLowerCase())
      )
    : [];

  return (
    <div style={{ marginLeft: "20px" }}>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={handleAddContact} />

      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <>
          <h2 style={{ marginLeft: "20px" }}>Contacts</h2>
          <Filter filter={filter} onFilterChange={handleFilterChange} />
          <ContactList
            contacts={filteredContacts}
            onDeleteContact={handleDeleteContact}
          />
        </>
      )}
    </div>
  );
}

export default App;