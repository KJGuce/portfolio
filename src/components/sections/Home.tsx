import React from "react";
import { motion } from "framer-motion";
import {
  CodeBracketIcon,
  SparklesIcon,
  ChartBarIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

const Home: React.FC = () => {
  return (
    <div>
      {/* Profile Section with Gradient */}
      <section className="py-16 bg-gradient-to-b from-white to-emerald-50 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center relative"
          >
            {/* Background decorative elements */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
              <div className="absolute -top-20 -left-20 w-40 h-40 bg-primary-100 dark:bg-primary-900 rounded-full opacity-20 blur-3xl"></div>
              <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-secondary-100 dark:bg-secondary-900 rounded-full opacity-20 blur-3xl"></div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="relative"
              >
                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-primary-100 dark:border-primary-900 shadow-xl">
                  <img
                    src="/KjGuce-BSTN Pic.jpg"
                    alt="Kristen Joy Guce"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
              <div className="text-center md:text-left">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 font-poppins">
                  Kristen Joy Guce
                </h1>
                <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4 font-poppins">
                  Software Engineer | Data Analyst | AI/ML Enthusiast
                </h2>
                <div className="flex items-center justify-center md:justify-start gap-2 text-gray-500 dark:text-gray-400">
                  <MapPinIcon className="w-5 h-5" />
                  <span className="font-inter">Toronto, Canada</span>
                </div>
              </div>
            </div>

            <div className="flex justify-center space-x-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className="btn btn-primary font-inter shadow-lg hover:shadow-xl transition-all duration-300"
              >
                View Projects
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="btn btn-secondary font-inter shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Contact Me
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <motion.div
              whileHover={{ y: -5 }}
              className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-lg mr-4">
                  <CodeBracketIcon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="font-raleway text-xl font-semibold text-gray-900 dark:text-white">
                  Full-Stack Development
                </h3>
              </div>
              <p className="font-inter text-gray-600 dark:text-gray-300">
                Building robust and scalable web applications using modern
                technologies.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-lg mr-4">
                  <SparklesIcon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="font-raleway text-xl font-semibold text-gray-900 dark:text-white">
                  AI/ML Expertise
                </h3>
              </div>
              <p className="font-inter text-gray-600 dark:text-gray-300">
                Passionate about artificial intelligence and machine learning
                applications.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-lg mr-4">
                  <ChartBarIcon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="font-raleway text-xl font-semibold text-gray-900 dark:text-white">
                  Data & Marketing
                </h3>
              </div>
              <p className="font-inter text-gray-600 dark:text-gray-300">
                Bridging the gap between data analysis and marketing strategies.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
