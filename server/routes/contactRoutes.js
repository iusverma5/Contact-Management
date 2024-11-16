// server/routes/contactRoutes.js
const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// POST: Create a new contact
router.post('/', async (req, res) => {
    try {
        const contact = new Contact(req.body);
        await contact.save();
        res.status(201).json(contact);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// GET: Get all contacts
router.get('/', async (req, res) => {
    try {
        const contacts = await Contact.find();
        res.json(contacts);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// PUT: Update a contact
router.put('/:id', async (req, res) => {
    try {
        const updatedContact = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedContact);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// DELETE: Delete a contact
router.delete('/:id', async (req, res) => {
    try {
        await Contact.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Contact deleted' });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
