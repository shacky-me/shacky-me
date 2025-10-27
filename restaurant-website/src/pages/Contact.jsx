import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const locations = [
    {
      id: 1,
      name: "Downtown Location",
      address: "123 Main Street, Downtown, State 12345",
      phone: "(555) 123-4567",
      hours: "Mon-Sun: 10:00 AM - 11:00 PM",
      icon: "🏢"
    },
    {
      id: 2,
      name: "Mall Location",
      address: "456 Shopping Center, Mall District, State 12346",
      phone: "(555) 234-5678",
      hours: "Mon-Sun: 11:00 AM - 10:00 PM",
      icon: "🛍️"
    },
    {
      id: 3,
      name: "Airport Terminal",
      address: "789 Airport Blvd, Terminal B, State 12347",
      phone: "(555) 345-6789",
      hours: "24/7",
      icon: "✈️"
    }
  ];

  const contactMethods = [
    {
      title: "Phone",
      value: "(555) 123-FOOD",
      description: "Call us for orders or questions",
      icon: "📞"
    },
    {
      title: "Email",
      value: "info@chickencraze.com",
      description: "Send us your feedback",
      icon: "📧"
    },
    {
      title: "Live Chat",
      value: "Available 24/7",
      description: "Chat with our support team",
      icon: "💬"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-brand-red text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-red-100">We'd love to hear from you!</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-heading font-bold text-brand-dark mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-transparent"
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="feedback">Feedback</option>
                  <option value="complaint">Complaint</option>
                  <option value="franchise">Franchise Information</option>
                  <option value="careers">Careers</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-transparent"
                  placeholder="Tell us how we can help you..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-brand-red text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-200"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-heading font-bold text-brand-dark mb-6">Get in Touch</h2>
              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="text-2xl">{method.icon}</div>
                    <div>
                      <h3 className="font-semibold text-brand-dark">{method.title}</h3>
                      <p className="text-brand-red font-medium">{method.value}</p>
                      <p className="text-gray-600 text-sm">{method.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-heading font-bold text-brand-dark mb-6">Business Hours</h2>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Monday - Thursday</span>
                  <span className="font-medium">10:00 AM - 11:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Friday - Saturday</span>
                  <span className="font-medium">10:00 AM - 12:00 AM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sunday</span>
                  <span className="font-medium">11:00 AM - 10:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Locations */}
        <div className="mt-16">
          <h2 className="text-3xl font-heading font-bold text-brand-dark text-center mb-12">
            Our Locations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {locations.map((location) => (
              <div key={location.id} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="text-center mb-4">
                  <div className="text-4xl mb-2">{location.icon}</div>
                  <h3 className="text-xl font-semibold text-brand-dark">{location.name}</h3>
                </div>
                <div className="space-y-3 text-center">
                  <p className="text-gray-600 flex items-center justify-center">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    {location.address}
                  </p>
                  <p className="text-brand-red font-medium flex items-center justify-center">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    {location.phone}
                  </p>
                  <p className="text-gray-600 flex items-center justify-center">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    {location.hours}
                  </p>
                </div>
                <div className="mt-4 text-center">
                  <button className="bg-brand-red text-white px-4 py-2 rounded-lg font-medium hover:bg-red-700 transition-colors duration-200">
                    Get Directions
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-heading font-bold text-brand-dark text-center mb-8">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-brand-dark mb-2">What are your delivery hours?</h3>
              <p className="text-gray-600 mb-4">We deliver from 11:00 AM to 10:30 PM daily. Some locations may have extended hours.</p>
              
              <h3 className="font-semibold text-brand-dark mb-2">Do you offer catering services?</h3>
              <p className="text-gray-600">Yes! We offer catering for events of all sizes. Contact us at least 24 hours in advance.</p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-dark mb-2">How can I apply for a job?</h3>
              <p className="text-gray-600 mb-4">Visit any of our locations to apply in person, or send your resume to careers@chickencraze.com.</p>
              
              <h3 className="font-semibold text-brand-dark mb-2">Do you have vegetarian options?</h3>
              <p className="text-gray-600">We offer several vegetarian sides and salads. Check our menu for details.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;