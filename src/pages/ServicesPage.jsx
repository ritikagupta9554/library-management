import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/sections/Footer";
import Card from "../components/ui/Card";
import CardContent from "../components/ui/CardContent";
import Button from "../components/ui/Button";
import { Link } from "react-router-dom";

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState("all");

  const services = [
    {
      icon: "📖",
      title: "Book Lending",
      description: "Borrow books easily with our smooth lending process. Access thousands of titles across all genres.",
      features: ["30-day lending period", "Online renewals", "Hold requests", "Multiple format options"],
      category: "core"
    },
    {
      icon: "🏛️",
      title: "Reading Rooms",
      description: "Peaceful spaces designed for undisturbed reading and studying with comfortable seating.",
      features: ["Quiet study areas", "Group study rooms", "Private cubicles", "Natural lighting"],
      category: "core"
    },
    {
      icon: "🎭",
      title: "Events & Workshops",
      description: "Join our community events to learn, share, and grow together with fellow book lovers.",
      features: ["Author meet & greets", "Book clubs", "Writing workshops", "Reading sessions"],
      category: "programs"
    },
    {
      icon: "💻",
      title: "Digital Resources",
      description: "Access our extensive collection of e-books, audiobooks, and online databases.",
      features: ["E-book lending", "Audiobook streaming", "Research databases", "Online catalogs"],
      category: "digital"
    },
    {
      icon: "👥",
      title: "Research Assistance",
      description: "Get expert help with your research projects from our knowledgeable librarians.",
      features: ["Reference services", "Citation help", "Database training", "One-on-one consultations"],
      category: "core"
    },
    {
      icon: "🎓",
      title: "Educational Programs",
      description: "Participate in our educational initiatives designed for all age groups.",
      features: ["Children's story time", "Teen programs", "Adult learning classes", "Digital literacy"],
      category: "programs"
    }
  ];

  const additionalServices = [
    { icon: "🖨️", name: "Printing & Copying", description: "High-quality printing and copying services available", price: "$0.10/page" },
    { icon: "📱", name: "Free WiFi", description: "High-speed internet access throughout the library", price: "Free" },
    { icon: "🎧", name: "Media Collection", description: "DVDs, CDs, and streaming media available", price: "Included" },
    { icon: "📰", name: "Newspapers & Magazines", description: "Current periodicals and archived editions", price: "Free" },
    { icon: "🧒", name: "Children's Section", description: "Dedicated space for young readers with age-appropriate materials", price: "Free" },
    { icon: "♿", name: "Accessibility Services", description: "ADA-compliant facilities and assistive technologies", price: "Free" }
  ];

  const faqs = [
    {
      question: "How many books can I borrow at once?",
      answer: "Basic members can borrow up to 5 books, Premium members up to 15, and Family members up to 20 books at a time."
    },
    {
      question: "Can I renew my borrowed books?",
      answer: "Yes! You can renew books online or in person up to 3 times, as long as no one else has placed a hold on them."
    },
    {
      question: "Do you offer interlibrary loans?",
      answer: "Absolutely! We can request books from other libraries in our network if we don't have what you're looking for."
    },
    {
      question: "Are your digital resources available 24/7?",
      answer: "Yes, all our e-books, audiobooks, and online databases are accessible anytime, anywhere with your library card."
    }
  ];

  const filteredServices = activeTab === "all" 
    ? services 
    : services.filter(s => s.category === activeTab);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white py-24 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-6xl md:text-7xl font-bold mb-6">Our Services</h1>
              <p className="text-2xl mb-8 text-purple-100 max-w-3xl mx-auto">
                Comprehensive library services designed to support your learning and growth journey
              </p>
              <Link to="/enquiry">
                <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-md font-medium text-lg transition duration-300">
                  Get Started Today
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Service Categories Filter */}
        <section className="py-12 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { id: "all", label: "All Services", icon: "🌟" },
                { id: "core", label: "Core Services", icon: "📚" },
                { id: "digital", label: "Digital", icon: "💻" },
                { id: "programs", label: "Programs", icon: "🎓" }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <span className="mr-2">{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Main Services Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-5xl font-bold text-center mb-4 text-gray-800"
            >
              Featured Services
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center text-gray-600 text-lg mb-12 max-w-2xl mx-auto"
            >
              Discover our comprehensive range of services designed to enhance your library experience
            </motion.p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-blue-600">
                    <CardContent className="p-8">
                      <div className="text-6xl mb-6">{service.icon}</div>
                      <h4 className="text-2xl font-bold mb-4 text-gray-800">{service.title}</h4>
                      <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                      <ul className="space-y-3">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start text-gray-700">
                            <span className="text-blue-600 mr-3 text-xl flex-shrink-0">✓</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Services Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-5xl font-bold text-center mb-4 text-gray-800"
            >
              Additional Amenities
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center text-gray-600 text-lg mb-16 max-w-2xl mx-auto"
            >
              Extra conveniences to make your library visit even better
            </motion.p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {additionalServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-8">
                      <div className="text-5xl mb-4">{service.icon}</div>
                      <h5 className="text-2xl font-bold mb-3 text-gray-800">{service.name}</h5>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                        {service.price}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-5xl font-bold text-center mb-16 text-gray-800"
            >
              How It Works
            </motion.h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: "1", title: "Sign Up", description: "Create your free library account", icon: "📝" },
                { step: "2", title: "Browse", description: "Explore our vast collection", icon: "🔍" },
                { step: "3", title: "Borrow", description: "Check out books and resources", icon: "📚" },
                { step: "4", title: "Enjoy", description: "Read, learn, and grow", icon: "🎉" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto shadow-lg">
                      {item.step}
                    </div>
                    {index < 3 && (
                      <div className="hidden md:block absolute top-10 left-1/2 w-full h-1 bg-gradient-to-r from-blue-600 to-purple-600 opacity-20"></div>
                    )}
                  </div>
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h4 className="text-2xl font-bold mb-3 text-gray-800">{item.title}</h4>
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Membership Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl font-bold mb-6 text-gray-800">Membership Plans</h2>
              <p className="text-gray-600 text-xl max-w-2xl mx-auto">
                Choose the perfect plan to unlock all the amazing benefits our library has to offer
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Basic",
                  price: "Free",
                  tagline: "Perfect for casual readers",
                  features: ["Borrow up to 5 books", "Access reading rooms", "Attend events", "Free WiFi access", "Newspapers & magazines"],
                  color: "blue",
                  popular: false
                },
                {
                  name: "Premium",
                  price: "$50",
                  period: "/year",
                  tagline: "Best for regular library users",
                  features: ["Borrow up to 15 books", "Priority room booking", "Early event registration", "Digital resources access", "Printing credits ($20 value)", "Home delivery option"],
                  color: "purple",
                  popular: true
                },
                {
                  name: "Family",
                  price: "$100",
                  period: "/year",
                  tagline: "Ideal for the whole family",
                  features: ["Up to 4 family members", "Borrow up to 20 books", "All premium benefits", "Private study room access", "Special family events", "Dedicated family librarian"],
                  color: "green",
                  popular: false
                }
              ].map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative ${plan.popular ? 'md:-mt-4 md:mb-4' : ''}`}
                >
                  {plan.popular && (
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-10">
                      <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm font-bold py-2 px-6 rounded-full shadow-lg">
                        ⭐ MOST POPULAR
                      </div>
                    </div>
                  )}
                  <Card className={`h-full hover:shadow-2xl transition-all duration-300 ${
                    plan.popular ? 'ring-4 ring-purple-500 bg-gradient-to-br from-white to-purple-50' : 'hover:-translate-y-1'
                  }`}>
                    <CardContent className="p-10">
                      <h3 className="text-3xl font-bold mb-2 text-gray-800">{plan.name}</h3>
                      <p className="text-gray-600 mb-6 text-sm">{plan.tagline}</p>
                      <div className="mb-8">
                        <span className="text-5xl font-bold text-blue-600">{plan.price}</span>
                        {plan.period && <span className="text-gray-600 ml-2">{plan.period}</span>}
                      </div>
                      <ul className="space-y-4 mb-10">
                        {plan.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start text-gray-700">
                            <span className="text-green-500 mr-3 text-2xl flex-shrink-0">✓</span>
                            <span className="leading-relaxed">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Link to="/enquiry">
                        <Button className={`w-full py-4 rounded-md font-medium text-lg transition duration-300 ${
                          plan.popular 
                            ? 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg' 
                            : 'bg-blue-600 hover:bg-blue-700 text-white'
                        }`}>
                          {plan.price === "Free" ? "Sign Up Free" : "Get Started"}
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl font-bold mb-6 text-gray-800">Frequently Asked Questions</h2>
              <p className="text-gray-600 text-lg">
                Get answers to common questions about our services
              </p>
            </motion.div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-8">
                      <h4 className="text-2xl font-bold mb-4 text-gray-800 flex items-start">
                        <span className="text-blue-600 mr-3">Q:</span>
                        <span>{faq.question}</span>
                      </h4>
                      <p className="text-gray-600 text-lg leading-relaxed ml-10">
                        <span className="text-green-600 font-bold mr-2">A:</span>
                        {faq.answer}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mt-12 text-center"
            >
              <p className="text-gray-600 mb-6 text-lg">Still have questions?</p>
              <Link to="/contact">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-md font-medium text-lg transition duration-300">
                  Contact Us
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl font-bold mb-6">Ready to Get Started?</h2>
              <p className="text-2xl mb-10 text-purple-100">
                Join our community today and unlock a world of knowledge and opportunities
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/enquiry">
                  <Button className="bg-white text-blue-600 hover:bg-gray-100 px-10 py-4 rounded-md font-medium text-lg transition duration-300 shadow-xl">
                    Sign Up Now
                  </Button>
                </Link>
                <Link to="/about">
                  <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-10 py-4 rounded-md font-medium text-lg transition duration-300">
                    Learn More
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
