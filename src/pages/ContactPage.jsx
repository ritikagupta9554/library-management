import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/sections/Footer";
import Input from "../components/ui/Input";
import Textarea from "../components/ui/Textarea";
import Button from "../components/ui/Button";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("Thank you for contacting us! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: "📍",
      title: "Visit Us",
      details: ["Library Road, Gorakhnath", "Gorakhpur, Uttar Pradesh 273001", "India"]
    },
    {
      icon: "📞",
      title: "Call Us",
      details: ["Phone: +91 98765 43210", "Fax: +91 551 234 5678", "Mon-Fri: 9AM - 8PM"]
    },
    {
      icon: "✉️",
      title: "Email Us",
      details: ["info@library.com", "support@library.com", "24/7 Response Time"]
    }
  ];

  const departments = [
    { name: "General Inquiries", email: "info@library.com" },
    { name: "Membership Services", email: "membership@library.com" },
    { name: "Events & Programs", email: "events@library.com" },
    { name: "Technical Support", email: "support@library.com" },
    { name: "Donations", email: "donations@library.com" },
    { name: "Volunteer Program", email: "volunteer@library.com" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl font-bold mb-4"
            >
              Contact Us
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl"
            >
              We'd love to hear from you. Get in touch with us!
            </motion.p>
          </div>
        </section>

        {/* Contact Info Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="text-5xl mb-4">{info.icon}</div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">{info.title}</h3>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600 mb-1">
                      {detail}
                    </p>
                  ))}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & Map Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-6 text-gray-800">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-lg">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Your Name *</label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Email Address *</label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 123-4567"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Subject *</label>
                    <Input
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="How can we help you?"
                      required
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Message *</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us more about your inquiry..."
                      rows={6}
                      required
                      className="w-full"
                    />
                  </div>

                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md font-medium text-lg transition duration-300">
                    Send Message
                  </Button>
                </form>
              </motion.div>

              {/* Map & Operating Hours */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-gray-800">Visit Our Library</h2>
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="h-80 bg-gray-300 flex items-center justify-center">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56964.07098565406!2d83.36785227910156!3d26.755716800000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3991446a0c332489%3A0x1ff3f8ea265e0b97!2sGorakhpur%2C%20Uttar%20Pradesh%2C%20India!5e0!3m2!1sen!2sus!4v1629794729807!5m2!1sen!2sus"
                        width="100%"
                        height="320"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        title="Library Location"
                      ></iframe>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">Operating Hours</h3>
                  <div className="space-y-3">
                    {[
                      { day: "Monday - Thursday", hours: "9:00 AM - 8:00 PM" },
                      { day: "Friday - Saturday", hours: "9:00 AM - 6:00 PM" },
                      { day: "Sunday", hours: "12:00 PM - 5:00 PM" },
                      { day: "Public Holidays", hours: "Closed" }
                    ].map((schedule, index) => (
                      <div key={index} className="flex justify-between py-2 border-b border-gray-200">
                        <span className="font-medium text-gray-700">{schedule.day}</span>
                        <span className="text-gray-600">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Departments Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold mb-4 text-gray-800">Department Contacts</h2>
              <p className="text-gray-600 text-lg">
                Reach out to the right department for faster assistance
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {departments.map((dept, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <h4 className="text-xl font-bold mb-2 text-gray-800">{dept.name}</h4>
                  <a
                    href={`mailto:${dept.email}`}
                    className="text-blue-600 hover:text-blue-700 hover:underline"
                  >
                    {dept.email}
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold mb-4 text-gray-800">Frequently Asked Questions</h2>
              <p className="text-gray-600 text-lg">
                Quick answers to common questions
              </p>
            </motion.div>

            <div className="space-y-6">
              {[
                {
                  question: "How do I get a library card?",
                  answer: "Visit our library with a valid ID and proof of address. Fill out a membership form, and you'll receive your card immediately."
                },
                {
                  question: "What are the loan periods?",
                  answer: "Books can be borrowed for 30 days, with the option to renew twice if no one has placed a hold. DVDs are available for 7 days."
                },
                {
                  question: "Do you offer meeting room rentals?",
                  answer: "Yes! Our study rooms can be reserved by members. Contact us or use our online booking system to check availability."
                },
                {
                  question: "Can I access online resources from home?",
                  answer: "Absolutely! All members have access to our digital library, including e-books, audiobooks, and research databases from anywhere."
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-lg shadow-md"
                >
                  <h4 className="text-xl font-bold mb-3 text-gray-800">{faq.question}</h4>
                  <p className="text-gray-600">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
