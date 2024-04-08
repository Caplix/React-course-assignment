import React, { useState } from 'react';
import contact from '../assets/images/miles-burke-idhx-MOCDSk-unsplash.jpg';

const ContactPage = () => {
  const [fullName, setFullName] = useState('');
  const [subject, setSubject] = useState('');
  const [email, setEmail] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all input values meet the criteria
    if (fullName.length >= 3 && subject.length >= 3 && body.length >= 3) {
      console.log('Full Name:', fullName);
      console.log('Subject:', subject);
      console.log('Email:', email);
      console.log('Body:', body);
      // You can perform further actions such as submitting the form data here
    } else {
      console.log('Please fill in all fields with at least 3 characters.');
    }
  };

  return (
    <div className="contact-container">
      <img src={contact} alt="Contact us" className="contact-us-image" />
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullName">Full Name:</label>
          <input
            type="text"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            minLength={3}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="subject">Subject:</label>
          <input
            type="text"
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            minLength={3}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="body">Body:</label>
          <textarea
            id="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            minLength={3}
            required
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactPage;

