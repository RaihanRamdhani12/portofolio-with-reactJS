import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'service_t5nid3g', // Ganti dengan Service ID Anda
        'template_88nly0f', // Ganti dengan Template ID Anda
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        'MbnVxbBBAnHkjFQwC' // Ganti dengan User ID Anda
      )
      .then(
        (response) => {
          setStatus('Message sent successfully!');
          setFormData({ name: '', email: '', message: '' });
        },
        (error) => {
          setStatus('Failed to send message. Please try again later.');
        }
      );
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col bg-black justify-center items-center text-white px-4"
    >
      <div className="contact-content mb-20 md:mb-52 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Contact Me</h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col mt-8 gap-4 w-full max-w-md mx-auto"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="p-2 rounded bg-gray-800 border border-gray-700 text-white"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="p-2 rounded bg-gray-800 border border-gray-700 text-white"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="p-2 rounded bg-gray-800 border border-gray-700 text-white"
            required
          ></textarea>
          <button
            type="submit"
            className="p-2 rounded bg-blue-600 hover:bg-blue-700 transition duration-300"
          >
            Send Message
          </button>
        </form>
        {status && <p className="mt-4 text-center">{status}</p>}
      </div>
    </section>
  );
};

export default Contact;
