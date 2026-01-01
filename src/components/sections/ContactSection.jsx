import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Button from "../ui/Button";
import Card from "../ui/Card";
import CardContent from "../ui/CardContent";

export default function ContactSection() {
  const contactInfo = [
    {
      icon: "📍",
      title: "Visit Us",
      details: ["Library Road, Gorakhnath", "Gorakhpur, UP 273001"]
    },
    {
      icon: "📞",
      title: "Call Us",
      details: ["+91 98765 43210", "Mon-Fri: 9AM - 8PM"]
    },
    {
      icon: "✉️",
      title: "Email Us",
      details: ["info@library.com", "support@library.com"]
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-800">Get In Touch</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Have questions? We're here to help. Reach out to us through any of these channels.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="text-5xl mb-4">{info.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">{info.title}</h3>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600">
                      {detail}
                    </p>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link to="/contact">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-medium text-lg transition duration-300">
              Contact Us
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
