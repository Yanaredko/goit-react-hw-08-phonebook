import ContactForm from 'components/contactForm/contactForm';
import ContactList from 'components/contactList/contactList';
import Filter from 'components/filter/filter';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contactsOperations';

const ContactsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <ContactForm />
      <Filter />
      <ContactList />
    </>
  );
};

export default ContactsPage;