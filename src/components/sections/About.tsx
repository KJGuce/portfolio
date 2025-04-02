import React from "react";
import { motion } from "framer-motion";
import {
  AcademicCapIcon,
  RocketLaunchIcon,
  LightBulbIcon,
  HeartIcon,
  BookOpenIcon,
  MusicalNoteIcon,
  GlobeAltIcon,
  SparklesIcon,
  CodeBracketIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";

interface BeyondCodeFact {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const beyondCodeFacts: BeyondCodeFact[] = [
  {
    icon: <GlobeAltIcon className="w-6 h-6" />,
    title: "Multilingual Learner",
    description:
      "Currently learning Tagalog and French, expanding language skills and cultural connections.",
  },
  {
    icon: <BookOpenIcon className="w-6 h-6" />,
    title: "Reading Journey",
    description:
      "Passionate about Fantasy, Mystery, Thriller, and Young Adult genres. Currently reading 'The Dragon Republic' by R.F. Kuang.",
  },
  {
    icon: <HeartIcon className="w-6 h-6" />,
    title: "Community Builder",
    description:
      "Created KoiPond, an app that connects people through kindness and resource sharing.",
  },
  {
    icon: <SparklesIcon className="w-6 h-6" />,
    title: "AI Explorer",
    description:
      "Fascinated by the intersection of faith and technology, with plans to build an AI-powered tool for identifying spiritual gifts.",
  },
  {
    icon: <MusicalNoteIcon className="w-6 h-6" />,
    title: "Music Enthusiast",
    description: "Singing isn't just a hobby—it's a way of life! 🎶",
  },
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block mb-6"
          >
            <div className="bg-gradient-to-r from-emerald-400 to-blue-400 text-white px-6 py-2 rounded-full text-sm font-medium flex items-center gap-2">
              <SparklesIcon className="w-4 h-4" />
              <span>About Me</span>
            </div>
          </motion.div>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 font-poppins">
            My Journey
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-inter">
            From data analytics to software engineering, my path has been driven
            by a passion for technology and continuous learning.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Education & Experience */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg">
                  <AcademicCapIcon className="w-6 h-6 text-emerald-500 dark:text-emerald-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white font-montserrat">
                  Education
                </h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">
                    Software Engineering Diploma
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Lighthouse Labs
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    2023
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">
                    Bachelor's Degree in Economics
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    University of Toronto
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    2018
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg">
                  <CodeBracketIcon className="w-6 h-6 text-emerald-500 dark:text-emerald-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white font-montserrat">
                  Experience
                </h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">
                    Software Engineer
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Current
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">
                    Data Analyst
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Previous
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg">
                <ChartBarIcon className="w-6 h-6 text-emerald-500 dark:text-emerald-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white font-montserrat">
                Skills
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-full text-sm">
                React
              </span>
              <span className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-full text-sm">
                TypeScript
              </span>
              <span className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-full text-sm">
                Node.js
              </span>
              <span className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-full text-sm">
                Python
              </span>
              <span className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-full text-sm">
                SQL
              </span>
              <span className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-full text-sm">
                Git
              </span>
            </div>
          </motion.div>
        </div>

        {/* Beyond Code */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 mt-12"
        >
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
            <HeartIcon className="w-6 h-6 mr-2 text-primary-500" />
            Beyond Code
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {beyondCodeFacts.map((fact, index) => (
              <motion.div
                key={fact.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="flex items-start space-x-4 p-4 bg-white dark:bg-gray-900 rounded-lg shadow-sm"
              >
                <div className="flex-shrink-0 text-primary-500">
                  {fact.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    {fact.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                    {fact.description}
                  </p>
                  {fact.title === "Reading Journey" && (
                    <a
                      href="https://www.goodreads.com/user/show/92925494-kristen-joy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-emerald-500 hover:text-emerald-600 dark:text-emerald-400 dark:hover:text-emerald-300 transition-colors mt-2 text-sm"
                    >
                      <span>View my Goodreads profile</span>
                      <svg
                        className="w-3 h-3"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M21 13v7a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7v2H5v14h14v-6h2zm3-8h-4V1l5 4z" />
                      </svg>
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
