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
} from "@heroicons/react/24/outline";

interface FunFact {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const funFacts: FunFact[] = [
  {
    icon: <GlobeAltIcon className="w-6 h-6" />,
    title: "Multilingual Learner",
    description:
      "Currently learning Tagalog and French, expanding language skills and cultural connections.",
  },
  {
    icon: <BookOpenIcon className="w-6 h-6" />,
    title: "Book Lover",
    description:
      "Passionate about tech, fiction, and thought-provoking reads. Always growing the bookshelf!",
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
    <section id="about" className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="section-title mb-4">About Me</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A Full-Stack Developer and AI/ML Enthusiast bridging the gap between
            data analysis and software engineering
          </p>
        </motion.div>

        {/* Professional Journey */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white flex items-center">
              <RocketLaunchIcon className="w-6 h-6 mr-2 text-primary-500" />
              Professional Journey
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              My journey began in data analytics, where I developed a strong
              foundation in SQL, automation, and scripting. This background
              naturally evolved into software engineering, where I now build
              full-stack applications that combine data-driven insights with
              innovative solutions.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <AcademicCapIcon className="w-6 h-6 text-primary-500" />
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    Education
                  </h4>
                  <ul className="mt-2 space-y-2 text-gray-600 dark:text-gray-400">
                    <li>
                      • BComm in Economics, Minor in Finance - Toronto
                      Metropolitan University
                    </li>
                    <li>• Software Engineering Diploma - BrainStation</li>
                    <li>
                      • Data Science & AI/ML with Python - M2M Tech (ongoing)
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <LightBulbIcon className="w-6 h-6 text-primary-500" />
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    Notable Achievements
                  </h4>
                  <ul className="mt-2 space-y-2 text-gray-600 dark:text-gray-400">
                    <li>
                      • Built KoiPond, a full-stack community resource-sharing
                      app
                    </li>
                    <li>
                      • Automated 30% of reporting tasks at Hope & Healing
                      International
                    </li>
                    <li>
                      • Optimized internal reporting at StackAdapt, reducing
                      report generation time by 20%
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white flex items-center">
              <LightBulbIcon className="w-6 h-6 mr-2 text-primary-500" />
              Vision & Approach
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              I'm passionate about leveraging technology to create meaningful
              impact. My approach combines structured methodologies like Agile
              and TDD with creative problem-solving to build innovative
              solutions.
            </p>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Problem-Solving Approach
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  I prefer a structured yet flexible approach, using
                  methodologies like Agile, test-driven development (TDD), and
                  breaking problems into manageable components.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Vision for Technology
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  I see AI/ML as a transformative force, particularly in
                  automating repetitive tasks, enhancing decision-making, and
                  fostering inclusivity in tech solutions.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Fun Facts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8"
        >
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
            <HeartIcon className="w-6 h-6 mr-2 text-primary-500" />
            Fun Facts
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {funFacts.map((fact, index) => (
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
