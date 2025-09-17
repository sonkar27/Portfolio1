import { useState } from 'react';
import type { FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import { emailjsConfig } from '../config/emailjs';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState({
    submitted: false,
    error: false,
    sending: false,
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus({ submitted: false, error: false, sending: true });

    try {
      await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Ankur Sonkar', // Your name
          reply_to: formData.email,
        },
        emailjsConfig.publicKey
      );

      // Show success message
      setStatus({ submitted: true, error: false, sending: false });
      // Reset form
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus({ submitted: false, error: true, sending: false });
    }
  };

  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Contact Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                ></textarea>
              </div>
              {status.submitted && (
                <div className="text-green-600 text-center">
                  Thank you! Your message has been sent successfully. I'll get back to you soon!
                </div>
              )}
              {status.error && (
                <div className="text-red-600 text-center">
                  Oops! Something went wrong. Please try again later.
                </div>
              )}
              <button 
                type="submit" 
                className="btn-primary w-full flex items-center justify-center"
                disabled={status.sending}
              >
                {status.sending ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : 'Send Message'}
              </button>
            </form>
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <p className="flex items-center text-gray-600">
                  <span className="font-medium mr-2">Address:</span>
                  147 Ashok Nagar, Kalyanpur, Kanpur, U.P.
                </p>
                <p className="flex items-center text-gray-600">
                  <span className="font-medium mr-2">Phone:</span>
                  <a href="tel:+918957509507" className="hover:text-primary">
                    +91-8957509507
                  </a>
                </p>
                <p className="flex items-center text-gray-600">
                  <span className="font-medium mr-2">Email:</span>
                  <a
                    href="mailto:ankursonkar222@gmail.com"
                    className="hover:text-primary"
                  >
                    ankursonkar222@gmail.com
                  </a>
                </p>
                <p className="flex items-center text-gray-600">
                  <span className="font-medium mr-2">GitHub:</span>
                  <a
                    href="https://github.com/sonkar27"
                    className="hover:text-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    sonkar27
                  </a>
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Languages</h3>
              <div className="space-y-2">
                <p className="text-gray-600">Hindi (Native)</p>
                <p className="text-gray-600">English (Fluent)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
