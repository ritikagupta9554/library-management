import { motion } from "framer-motion";
import { useState } from "react";
import Input from "../components/ui/Input";
import Textarea from "../components/ui/Textarea";
import Button from "../components/ui/Button";
import Navbar from "../components/Navbar";
import Footer from "../components/sections/Footer";
import Card from "../components/ui/Card";
import CardContent from "../components/ui/CardContent";

export default function EnquiryPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    enquiryType: "",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Enquiry submitted:", formData);
    alert("Thank you for your enquiry! We will get back to you within 24 hours.");
    setFormData({ fullName: "", phone: "", email: "", enquiryType: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const enquiryTypes = [
    { icon: "📚", title: "Membership", description: "Join our library community" },
    { icon: "📖", title: "Book Inquiry", description: "Ask about specific books" },
    { icon: "🎓", title: "Programs", description: "Information about our events" },
    { icon: "💼", title: "Partnerships", description: "Collaborate with us" }
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
              Make an Enquiry
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl"
            >
              We're here to help! Fill out the form below and we'll respond within 24 hours.
            </motion.p>
          </div>
        </section>

        {/* Enquiry Types */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-center mb-12 text-gray-800"
            >
              What Can We Help You With?
            </motion.h2>
            <div className="grid md:grid-cols-4 gap-6 mb-12">
              {enquiryTypes.map((type, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardContent className="p-6 text-center">
                      <div className="text-4xl mb-3">{type.icon}</div>
                      <h4 className="text-lg font-bold mb-2 text-gray-800">{type.title}</h4>
                      <p className="text-gray-600 text-sm">{type.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Enquiry Form Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">Send Your Enquiry</h2>
              <p className="text-center text-gray-600 mb-12 text-lg">
                Fill out the form below and our team will get back to you as soon as possible
              </p>

              <div className="bg-white rounded-lg shadow-xl p-8 md:p-12">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        Full Name *
                      </label>
                      <Input
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        required
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        Phone Number *
                      </label>
                      <Input
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 123-4567"
                        required
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Email Address *
                    </label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Enquiry Type *
                    </label>
                    <select
                      name="enquiryType"
                      value={formData.enquiryType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                    >
                      <option value="">Select an enquiry type</option>
                      <option value="membership">Membership Inquiry</option>
                      <option value="books">Book Information</option>
                      <option value="programs">Programs & Events</option>
                      <option value="partnerships">Partnerships</option>
                      <option value="donations">Donations</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Your Message *
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please provide details about your enquiry..."
                      rows={6}
                      required
                      className="w-full"
                    />
                  </div>

                  <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
                    <p className="text-sm text-gray-700">
                      <strong>Privacy Notice:</strong> Your information will be kept confidential and used only to respond to your enquiry. We typically respond within 24 hours during business days.
                    </p>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-md font-medium text-lg transition duration-300"
                  >
                    Submit Enquiry
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Additional Info Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-white rounded-lg shadow-md"
              >
                <div className="text-4xl mb-4">⚡</div>
                <h4 className="text-xl font-bold mb-2 text-gray-800">Quick Response</h4>
                <p className="text-gray-600">
                  We aim to respond to all enquiries within 24 hours
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-white rounded-lg shadow-md"
              >
                <div className="text-4xl mb-4">🔒</div>
                <h4 className="text-xl font-bold mb-2 text-gray-800">Secure & Private</h4>
                <p className="text-gray-600">
                  Your information is protected and never shared
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-white rounded-lg shadow-md"
              >
                <div className="text-4xl mb-4">💬</div>
                <h4 className="text-xl font-bold mb-2 text-gray-800">Expert Support</h4>
                <p className="text-gray-600">
                  Our knowledgeable team is ready to assist you
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
