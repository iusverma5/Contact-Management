// src/components/ContactForm.jsx
import React, { useState } from 'react';
import { TextField, Button, Box, Grid, Typography } from '@mui/material';
import axios from 'axios';

const ContactForm = ({ onContactAdded }) => {
  const [contact, setContact] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    company: '',
    jobTitle: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/contacts', contact);
      onContactAdded(); // Notify the parent to refresh the contact list
      setContact({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        company: '',
        jobTitle: '',
      });
    } catch (err) {
      console.error('Error adding contact:', err);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ width: '400px', margin: 'auto' }}>
      <Typography variant="h6" gutterBottom>Add New Contact</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="First Name"
            fullWidth
            name="firstName"
            value={contact.firstName}
            onChange={handleChange}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Last Name"
            fullWidth
            name="lastName"
            value={contact.lastName}
            onChange={handleChange}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Email"
            fullWidth
            name="email"
            value={contact.email}
            onChange={handleChange}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Phone Number"
            fullWidth
            name="phoneNumber"
            value={contact.phoneNumber}
            onChange={handleChange}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Company"
            fullWidth
            name="company"
            value={contact.company}
            onChange={handleChange}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Job Title"
            fullWidth
            name="jobTitle"
            value={contact.jobTitle}
            onChange={handleChange}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary">
            Add Contact
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactForm;
