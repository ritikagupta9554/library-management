import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Button from "../ui/Button";

export default function AboutSection() {
  const stats = [
    { icon: "📚", number: "50K+", label: "Books", color: "from-blue-500 to-blue-600" },
    { icon: "👥", number: "5K+", label: "Members", color: "from-purple-500 to-purple-600" },
    { icon: "⭐", number: "15+", label: "Years", color: "from-orange-500 to-orange-600" },
    { icon: "🎭", number: "100+", label: "Events", color: "from-green-500 to-green-600" }
  ];

  return (
    <section id="about" className="relative py-24 px-4 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%232563eb' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      {/* Floating decorative elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20 blur-3xl"
      />
      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [0, -5, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-20 left-10 w-40 h-40 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-20 blur-3xl"
      />

      <div className="max-w-7xl mx-auto relative">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full shadow-lg"
            >
              <span className="text-xl">📖</span>
              <span className="font-semibold">Trusted by Thousands</span>
            </motion.div>

            <div>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight"
              >
                <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
                  Discover Your Next
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Great Adventure
                </span>
              </motion.h3>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-gray-600 text-lg leading-relaxed mb-4"
              >
                Welcome to a <span className="font-semibold text-blue-600">sanctuary of knowledge</span> where passion meets purpose. Our library transcends traditional boundaries – it's a vibrant ecosystem where ideas flourish, curiosity thrives, and lifelong learning becomes a joyful journey.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="text-gray-600 text-lg leading-relaxed"
              >
                With <span className="font-bold text-purple-600">50,000+ volumes</span> spanning every genre imaginable, cutting-edge digital resources, and a welcoming atmosphere, we're your partner in discovery and growth.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link to="/about" className="flex-1 sm:flex-initial">
                <Button className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  <span className="flex items-center justify-center space-x-2">
                    <span>Explore Our Story</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </Button>
              </Link>
              <Link to="/enquiry" className="flex-1 sm:flex-initial">
                <Button className="w-full sm:w-auto bg-white border-2 border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  Join Today
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right side - Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.08, y: -5 }}
                  className={`relative group ${index === 1 ? 'mt-12' : index === 2 ? '-mt-12' : ''}`}
                >
                  {/* Card */}
                  <div className="relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden">
                    {/* Gradient overlay on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                    
                    {/* Content */}
                    <div className="relative z-10 text-center">
                      <motion.div
                        animate={{
                          rotate: [0, -10, 10, -10, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatDelay: 3
                        }}
                        className="text-6xl mb-4"
                      >
                        {stat.icon}
                      </motion.div>
                      <div className={`text-4xl font-black mb-2 bg-gradient-to-br ${stat.color} bg-clip-text text-transparent`}>
                        {stat.number}
                      </div>
                      <div className="text-gray-600 font-semibold text-sm uppercase tracking-wider">
                        {stat.label}
                      </div>
                    </div>

                    {/* Decorative corner */}
                    <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${stat.color} opacity-10 rounded-bl-full`}></div>
                  </div>

                  {/* Shadow effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-20 blur-xl -z-10 group-hover:opacity-30 transition-opacity duration-300 rounded-3xl`}></div>
                </motion.div>
              ))}
            </div>

            {/* Large decorative element behind */}
            <div className="absolute -z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96">
              <div className="w-full h-full bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200 rounded-full opacity-30 blur-3xl animate-pulse"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
  