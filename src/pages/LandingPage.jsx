import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import HeroSection from "../components/sections/HeroSection";
import AboutSection from "../components/sections/AboutSection";
import ServicesSection from "../components/sections/ServicesSection";
import ContactSection from "../components/sections/ContactSection";
import Footer from "../components/sections/Footer";
import Card from "../components/ui/Card";
import CardContent from "../components/ui/CardContent";
import Button from "../components/ui/Button";

export default function LandingPage() {
  const features = [
    {
      icon: "🎯",
      title: "Easy Book Discovery",
      description: "Find your next favorite book with our advanced search and recommendation system."
    },
    {
      icon: "⚡",
      title: "Quick Access",
      description: "Instant digital access to thousands of e-books and audiobooks from anywhere."
    },
    {
      icon: "🌟",
      title: "Expert Curation",
      description: "Carefully selected collections curated by professional librarians and book experts."
    },
    {
      icon: "🔒",
      title: "Secure Platform",
      description: "Your data and reading history are protected with enterprise-level security."
    }
  ];

  const stats = [
    { number: "50K+", label: "Books Available", icon: "📚" },
    { number: "5K+", label: "Active Members", icon: "👥" },
    { number: "100+", label: "Events Yearly", icon: "🎭" },
    { number: "15+", label: "Years Experience", icon: "⭐" }
  ];

  const testimonials = [
    {
      name: "Emily Watson",
      role: "Student",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
      text: "This library has been instrumental in my academic journey. The staff is incredibly helpful and the resources are extensive."
    },
    {
      name: "James Miller",
      role: "Author",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
      text: "As an author, I love conducting my research here. The quiet environment and vast collection make it perfect for creative work."
    },
    {
      name: "Sarah Johnson",
      role: "Teacher",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
      text: "The children's programs are outstanding! My students always enjoy our library visits and have developed a real love for reading."
    }
  ];

  const upcomingEvents = [
    {
      date: "Jan 15",
      title: "Author Meet & Greet",
      description: "Meet bestselling author John Smith",
      time: "6:00 PM"
    },
    {
      date: "Jan 22",
      title: "Book Club Discussion",
      description: "Monthly fiction book club meeting",
      time: "7:00 PM"
    },
    {
      date: "Jan 28",
      title: "Writing Workshop",
      description: "Creative writing for beginners",
      time: "3:00 PM"
    }
  ];

  return (
    <div className="">
      <Navbar />
      <HeroSection />

      {/* Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Why Choose Our Library?</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Experience the perfect blend of traditional library values and modern digital convenience
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6 text-center">
                    <div className="text-5xl mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-bold mb-3 text-gray-800">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12"
          >
            Our Impact in Numbers
          </motion.h2>
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-5xl mb-3">{stat.icon}</div>
                <div className="text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-xl text-blue-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      
      <AboutSection />

      
      <ServicesSection /> 

      {/* Upcoming Events Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Upcoming Events</h2>
            <p className="text-gray-600 text-lg">
              Join us for exciting literary events and community gatherings
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start mb-4">
                      <div className="bg-blue-600 text-white rounded-lg p-3 mr-4 text-center min-w-[70px]">
                        <div className="text-2xl font-bold">{event.date.split(' ')[1]}</div>
                        <div className="text-sm">{event.date.split(' ')[0]}</div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-2 text-gray-800">{event.title}</h3>
                        <p className="text-gray-600 mb-2">{event.description}</p>
                        <p className="text-blue-600 font-medium">🕒 {event.time}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/services">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-medium text-lg transition duration-300">
                View All Events
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 text-gray-800">What Our Members Say</h2>
            <p className="text-gray-600 text-lg">
              Hear from our community about their library experience
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                        <p className="text-blue-600 text-sm">{testimonial.role}</p>
                      </div>
                    </div>
                    <p className="text-gray-600 italic">"{testimonial.text}"</p>
                    <div className="mt-4 text-yellow-500">⭐⭐⭐⭐⭐</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Stay Updated</h2>
            <p className="text-xl mb-8">
              Subscribe to our newsletter for book recommendations, events, and library news
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-3 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-md font-medium transition duration-300">
                Subscribe
              </Button>
            </div>
            <p className="text-blue-100 text-sm mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </motion.div>
        </div>
      </section>

      <ContactSection />

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-12 text-center text-white shadow-2xl"
          >
            <h2 className="text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Join thousands of readers and unlock access to our world-class library resources
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/enquiry">
                <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-md font-medium text-lg transition duration-300">
                  Become a Member
                </Button>
              </Link>
              <Link to="/about">
                <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-md font-medium text-lg transition duration-300">
                  Learn More
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
