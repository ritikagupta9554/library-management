import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/sections/Footer";
import Card from "../components/ui/Card";
import CardContent from "../components/ui/CardContent";
import Button from "../components/ui/Button";

export default function AboutPage() {
  const milestones = [
    { year: "2010", event: "Library Founded", description: "Started with 5,000 books" },
    { year: "2015", event: "Digital Expansion", description: "Launched online catalog & e-books" },
    { year: "2020", event: "Community Hub", description: "Opened maker space & event center" },
    { year: "2025", event: "50,000+ Books", description: "Reached major collection milestone" }
  ];

  const achievements = [
    { icon: "🏆", title: "Excellence Award", year: "2023", description: "Best Community Library" },
    { icon: "🌟", title: "Top Rated", year: "2024", description: "5-star rating from members" },
    { icon: "📖", title: "Reading Champion", year: "2024", description: "1M+ books borrowed" },
    { icon: "👨‍👩‍👧", title: "Family Friendly", year: "2025", description: "Best Family Programs" }
  ];

  const teamMembers = [
    { 
      name: "Sarah Johnson", 
      role: "Head Librarian", 
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop",
      bio: "15+ years experience in library science",
      email: "sarah.j@library.com"
    },
    { 
      name: "Michael Chen", 
      role: "Technical Services Director", 
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
      bio: "Expert in digital library systems",
      email: "michael.c@library.com"
    },
    { 
      name: "Emily Rodriguez", 
      role: "Community Outreach Manager", 
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop",
      bio: "Passionate about literacy programs",
      email: "emily.r@library.com"
    }
  ];

  const partners = [
    { name: "City Education Board", type: "Education" },
    { name: "Local Schools Network", type: "Academic" },
    { name: "Book Publishers Association", type: "Publishing" },
    { name: "Community Foundation", type: "Non-profit" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white py-24 overflow-hidden">
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
              <h1 className="text-6xl md:text-7xl font-bold mb-6">About Our Library</h1>
              <p className="text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
                A sanctuary of knowledge and learning, serving our community for over 15 years
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/enquiry">
                  <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-md font-medium text-lg transition duration-300">
                    Join Our Community
                  </Button>
                </Link>
                <Link to="/services">
                  <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-md font-medium text-lg transition duration-300">
                    Explore Services
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-16 items-center"
            >
              <div>
                <h2 className="text-5xl font-bold mb-6 text-gray-800">Our Story</h2>
                <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                  <p>
                    Founded in 2010 with a vision to democratize access to knowledge, our library has grown from a humble collection of 5,000 books to a thriving community hub with over 50,000 volumes.
                  </p>
                  <p>
                    We believe in the transformative power of reading and lifelong learning. Our mission goes beyond simply lending books – we create spaces where ideas flourish, where curiosity is nurtured, and where people from all walks of life come together.
                  </p>
                  <p>
                    Today, we serve thousands of members with cutting-edge digital resources, engaging community programs, and a welcoming environment that celebrates the joy of discovery.
                  </p>
                </div>
                <div className="mt-8 flex gap-4">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-600">50K+</div>
                    <div className="text-sm text-gray-600">Books</div>
                  </div>
                  <div className="text-center border-l-2 pl-4">
                    <div className="text-4xl font-bold text-blue-600">5K+</div>
                    <div className="text-sm text-gray-600">Members</div>
                  </div>
                  <div className="text-center border-l-2 pl-4">
                    <div className="text-4xl font-bold text-blue-600">100+</div>
                    <div className="text-sm text-gray-600">Events/Year</div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <motion.img
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=400&h=300&fit=crop"
                  alt="Library interior"
                  className="rounded-lg shadow-xl w-full h-48 object-cover"
                />
                <motion.img
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop"
                  alt="Books"
                  className="rounded-lg shadow-xl w-full h-48 object-cover mt-8"
                />
                <motion.img
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400&h=300&fit=crop"
                  alt="Reading"
                  className="rounded-lg shadow-xl w-full h-48 object-cover -mt-8"
                />
                <motion.img
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop"
                  alt="Community"
                  className="rounded-lg shadow-xl w-full h-48 object-cover"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-5xl font-bold text-center mb-16 text-gray-800"
            >
              Our Journey
            </motion.h2>
            <div className="relative">
              {/* Timeline line */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-600"></div>
              
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  >
                    <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      <Card className="hover:shadow-xl transition-shadow">
                        <CardContent className="p-6">
                          <div className="text-3xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                          <h3 className="text-2xl font-bold mb-2 text-gray-800">{milestone.event}</h3>
                          <p className="text-gray-600">{milestone.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                    <div className="hidden md:flex w-2/12 justify-center">
                      <div className="w-8 h-8 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                    </div>
                    <div className="hidden md:block w-5/12"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl opacity-10"></div>
                <Card className="relative h-full hover:shadow-2xl transition-shadow">
                  <CardContent className="p-10">
                    <div className="text-5xl mb-6">🎯</div>
                    <h3 className="text-4xl font-bold mb-6 text-blue-600">Our Mission</h3>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      To provide free and equal access to information, foster a love for reading, and support lifelong learning for all members of our community. We strive to create an inclusive environment where everyone feels welcome to explore, discover, and grow intellectually.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl opacity-10"></div>
                <Card className="relative h-full hover:shadow-2xl transition-shadow">
                  <CardContent className="p-10">
                    <div className="text-5xl mb-6">🔭</div>
                    <h3 className="text-4xl font-bold mb-6 text-blue-600">Our Vision</h3>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      To be the leading center for learning and cultural enrichment in our community, inspiring curiosity and innovation while preserving knowledge for future generations. We envision a world where every person has access to the resources they need to achieve their full potential.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-5xl font-bold text-center mb-6 text-gray-800"
            >
              Our Core Values
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center text-gray-600 text-lg mb-16 max-w-2xl mx-auto"
            >
              These principles guide everything we do and shape our commitment to serving you
            </motion.p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: "📚", title: "Knowledge", description: "Promoting education and continuous learning for all", color: "blue" },
                { icon: "🤝", title: "Community", description: "Building connections and fostering collaboration", color: "green" },
                { icon: "🔓", title: "Accessibility", description: "Ensuring equal access for everyone", color: "purple" },
                { icon: "💡", title: "Innovation", description: "Embracing new technologies and ideas", color: "yellow" }
              ].map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                    <CardContent className="p-8 text-center">
                      <div className="text-6xl mb-6">{value.icon}</div>
                      <h4 className="text-2xl font-bold mb-4 text-gray-800">{value.title}</h4>
                      <p className="text-gray-600 leading-relaxed">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-5xl font-bold text-center mb-16 text-gray-800"
            >
              Our Achievements
            </motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full text-center hover:shadow-xl transition-shadow bg-gradient-to-br from-blue-50 to-white">
                    <CardContent className="p-6">
                      <div className="text-5xl mb-4">{achievement.icon}</div>
                      <div className="text-sm font-bold text-blue-600 mb-2">{achievement.year}</div>
                      <h4 className="text-xl font-bold mb-2 text-gray-800">{achievement.title}</h4>
                      <p className="text-gray-600">{achievement.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl font-bold mb-6 text-gray-800">Meet Our Team</h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Dedicated professionals passionate about connecting people with knowledge
              </p>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-12">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                    <CardContent className="p-8 text-center">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-40 h-40 rounded-full mx-auto mb-6 object-cover border-4 border-blue-100 shadow-lg"
                      />
                      <h4 className="text-2xl font-bold text-gray-800 mb-2">{member.name}</h4>
                      <p className="text-blue-600 font-medium mb-4">{member.role}</p>
                      <p className="text-gray-600 mb-4">{member.bio}</p>
                      <a 
                        href={`mailto:${member.email}`}
                        className="text-blue-600 hover:text-blue-700 hover:underline"
                      >
                        {member.email}
                      </a>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-5xl font-bold text-center mb-6 text-gray-800"
            >
              Our Partners
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center text-gray-600 text-lg mb-16"
            >
              Collaborating with leading organizations to serve you better
            </motion.p>
            <div className="grid md:grid-cols-4 gap-8">
              {partners.map((partner, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6 text-center">
                      <h5 className="font-bold text-gray-800 mb-2">{partner.name}</h5>
                      <span className="text-sm text-blue-600">{partner.type}</span>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl font-bold mb-6">Join Our Story</h2>
              <p className="text-2xl mb-10 text-blue-100">
                Become part of a community that values knowledge, curiosity, and growth
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/enquiry">
                  <Button className="bg-white text-blue-600 hover:bg-gray-100 px-10 py-4 rounded-md font-medium text-lg transition duration-300">
                    Become a Member
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-10 py-4 rounded-md font-medium text-lg transition duration-300">
                    Contact Us
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
