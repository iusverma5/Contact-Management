// src/App.jsx
import React, { useState, useEffect } from 'react';
import ContactForm from './components/ContactForm';
import ContactsTable from './components/ContactsTable';
import { Container, Typography, Box } from '@mui/material';
import axios from 'axios';

function App() {
  const [contacts, setContacts] = useState([]);

  // Function to fetch the contacts from the backend
  const fetchContacts = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/contacts');
      setContacts(response.data);
    } catch (err) {
      console.error('Error fetching contacts:', err);
    }
  };

  // Fetch contacts when the component mounts or when a new contact is added
  useEffect(() => {
    fetchContacts();
  }, []); // Empty dependency array means this will only run on mount

  // Callback to refresh the contacts list when a new contact is added
  const handleContactAdded = () => {
    fetchContacts(); // Re-fetch the contacts after adding
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Contact Management System
      </Typography>
      <Box mb={3}>
        <ContactForm onContactAdded={handleContactAdded}   />
      </Box>
      <ContactsTable contacts={contacts} setContacts={setContacts} />
    </Container>
  );
}

export default App;
