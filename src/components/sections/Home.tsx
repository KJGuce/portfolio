import React from "react";
import { motion } from "framer-motion";
import {
  CodeBracketIcon,
  SparklesIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";

const Home: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
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

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-block mb-6"
        >
          <div className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-6 py-2 rounded-full text-sm font-medium">
            Welcome to my portfolio
          </div>
        </motion.div>

        <h1 className="font-poppins text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600">
          Kristen Joy Guce
        </h1>
        <h2 className="font-montserrat text-xl md:text-2xl text-primary-600 dark:text-primary-400 mb-6">
          Full-Stack Developer & AI/ML Enthusiast
        </h2>
        <p className="font-lora text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
          Bridging Data, Marketing & Engineering
        </p>
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

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
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
  );
};

export default Home;
