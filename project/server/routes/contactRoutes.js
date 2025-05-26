import express from 'express';
import Contact from '../models/Contact.js';

const router = express.Router();

// Submit contact form
router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    
    // Create new contact message
    const contact = new Contact({
      name,
      email,
      message
    });
    
    // Save to database
    await contact.save();
    
    res.status(201).json({ 
      success: true, 
      message: 'Message sent successfully' 
    });
  } catch (error) {
    console.error('Error submitting contact form:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to send message', 
      error: error.message 
    });
  }
});

export default router;