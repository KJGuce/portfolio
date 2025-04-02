import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChartBarIcon,
  CodeBracketIcon,
  ClipboardDocumentListIcon,
  ChartPieIcon,
  CommandLineIcon,
  PresentationChartLineIcon,
} from "@heroicons/react/24/outline";

interface SkillCategory {
  title: string;
  skills: string[];
  icon: React.ReactNode;
  gradient: string;
  description: string;
  dataIcon: React.ReactNode;
}

const skillCategories: SkillCategory[] = [
  {
    title: "Data Analysis",
    skills: ["SQL", "PowerBI", "Elasticsearch", "Grafana", "Salesforce"],
    icon: <ChartBarIcon className="w-8 h-8" />,
    gradient: "from-blue-500 to-indigo-500",
    description: "Transforming complex data into actionable insights",
    dataIcon: <ChartPieIcon className="w-6 h-6" />,
  },
  {
    title: "Software Engineering",
    skills: [
      "HTML",
      "CSS",
      "Sass",
      "JavaScript",
      "REST APIs",
      "React JS",
      "Node.js",
      "MySQL",
      "ReactNative",
      "WordPress",
      "WebFlow",
      "Express",
      "OAuth",
      "GitHub",
      "Document Object Model (DOM) APIs",
      "Web APIs",
      "Heroku",
      "Jest",
    ],
    icon: <CodeBracketIcon className="w-8 h-8" />,
    gradient: "from-indigo-500 to-purple-500",
    description: "Building robust and scalable applications",
    dataIcon: <CommandLineIcon className="w-6 h-6" />,
  },
  {
    title: "Project Management",
    skills: ["JIRA", "Asana", "Smartsheet", "StudioEnterprise"],
    icon: <ClipboardDocumentListIcon className="w-8 h-8" />,
    gradient: "from-purple-500 to-violet-500",
    description: "Leading projects with data-driven decisions",
    dataIcon: <PresentationChartLineIcon className="w-6 h-6" />,
  },
];

const Skills: React.FC = () => {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  return (
    <section
      id="skills"
      className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="section-title mb-4">Technical Skills</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Bridging data analysis and software engineering to create impactful
            solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="group relative bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 overflow-hidden"
              onHoverStart={() => setHoveredCategory(category.title)}
              onHoverEnd={() => setHoveredCategory(null)}
            >
              {/* Gradient overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
              />

              {/* Category header */}
              <div className="flex items-center mb-4">
                <div
                  className={`p-3 rounded-lg bg-gradient-to-br ${category.gradient} text-white mr-4`}
                >
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-6">
                {category.description}
              </p>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2, delay: skillIndex * 0.05 }}
                    className="px-3 py-1 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 
                             text-gray-800 dark:text-gray-200 rounded-full text-sm 
                             hover:shadow-md transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>

              {/* Data visualization element */}
              <AnimatePresence>
                {hoveredCategory === category.title && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="absolute bottom-4 right-4 text-gray-400 dark:text-gray-600"
                  >
                    {category.dataIcon}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
