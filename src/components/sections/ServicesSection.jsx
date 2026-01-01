import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Card from "../ui/Card";
import CardContent from "../ui/CardContent";
import Button from "../ui/Button";

export default function ServicesSection() {
  const services = [
    {
      icon: "📖",
      title: "Book Lending",
      description: "Borrow from our extensive collection of 50,000+ books with flexible lending periods.",
      features: ["30-day periods", "Easy renewals", "Hold requests"]
    },
    {
      icon: "🏛️",
      title: "Reading Rooms",
      description: "Quiet, comfortable spaces perfect for focused reading, studying, or research work.",
      features: ["Silent zones", "Group rooms", "Private cubicles"]
    },
    {
      icon: "💻",
      title: "Digital Resources",
      description: "Access thousands of e-books, audiobooks, and online databases anytime, anywhere.",
      features: ["E-books", "Audiobooks", "Research databases"]
    },
    {
      icon: "🎭",
      title: "Events & Workshops",
      description: "Join engaging programs, author talks, book clubs, and educational workshops.",
      features: ["Author meets", "Book clubs", "Writing workshops"]
    },
    {
      icon: "👥",
      title: "Research Support",
      description: "Expert librarians ready to assist with your research and reference needs.",
      features: ["Reference help", "Citations", "One-on-one support"]
    },
    {
      icon: "🎓",
      title: "Learning Programs",
      description: "Educational initiatives for all ages from children's story time to adult classes.",
      features: ["Kids programs", "Teen activities", "Adult learning"]
    }
  ];

  return (
    <section id="services" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-5xl font-bold mb-6 text-gray-800">
            Services Designed For 
            <span className="text-blue-600"> Your Success</span>
          </h3>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto">
            From traditional lending to cutting-edge digital resources, we offer comprehensive services to support your learning journey
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-blue-600">
                <CardContent className="p-8">
                  <div className="text-6xl mb-4">{service.icon}</div>
                  <h4 className="text-2xl font-bold mb-3 text-gray-800">{service.title}</h4>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <span className="text-blue-600 mr-2 text-lg">✓</span>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
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
          className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white shadow-2xl"
        >
          <h4 className="text-3xl font-bold mb-4">Ready to Explore All Services?</h4>
          <p className="text-xl mb-8 text-blue-100">
            Discover our complete range of offerings and find the perfect resources for your needs
          </p>
          <Link to="/services">
            <Button className="bg-white text-blue-600 hover:bg-gray-100 px-10 py-4 rounded-md font-medium text-lg transition duration-300 shadow-lg hover:shadow-xl">
              View All Services
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
