import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  PlayIcon,
  CodeBracketIcon,
  SparklesIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";
import VideoModal from "../VideoModal";
import { useLocation } from "react-router-dom";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  videoUrl?: string;
}

const projects: Project[] = [
  {
    title: "KoiPond",
    description:
      "A full-stack application that helps users track and manage their koi fish collection. Features include fish inventory management, health monitoring, and breeding records. Built with modern web technologies and a focus on user experience.",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
      "JWT Authentication",
      "RESTful API",
      "Redux",
      "Docker",
      "AWS",
      "CI/CD",
    ],
    githubUrl: "https://github.com/KJGuce/kristenjoy-guce-koipond",
    videoUrl: "/videos/KoiPond-BSTN Demo.mp4",
  },
  {
    title: "InStock",
    description:
      "An inventory management system built during a bootcamp, featuring a modern UI and efficient stock tracking capabilities. The application helps businesses manage their inventory levels, track stock movements, and generate reports.",
    technologies: [
      "React",
      "Express.js",
      "MySQL",
      "SCSS",
      "RESTful API",
      "JWT Authentication",
      "Responsive Design",
    ],
    githubUrl: "https://github.com/KJGuce/instock-denali-client",
  },
  {
    title: "Data Analysis Portfolio",
    description:
      "A collection of data analysis projects showcasing expertise in data visualization, statistical analysis, and business intelligence. Projects include market analysis, customer segmentation, and predictive modeling.",
    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Scikit-learn",
      "Jupyter Notebooks",
      "Tableau",
    ],
    githubUrl: "https://github.com/KJGuce/data-analysis-portfolio",
  },
];

const Projects: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <section
      id="projects"
      className="py-24 bg-gradient-to-b from-white to-emerald-50 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden"
    >
      {/* MSN-inspired decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-emerald-200 dark:bg-emerald-900 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-blue-200 dark:bg-blue-900 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute top-10 left-1/4 w-8 h-8 bg-yellow-300 rounded-full opacity-20 animate-bounce"></div>
        <div
          className="absolute bottom-20 right-1/3 w-6 h-6 bg-pink-300 rounded-full opacity-20 animate-bounce"
          style={{ animationDelay: "0.2s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
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
              <span>My Creative Journey</span>
            </div>
          </motion.div>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 font-poppins">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-inter">
            A collection of my recent work showcasing my skills in full-stack
            development, data analysis, and automation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg relative">
                      <CodeBracketIcon className="w-6 h-6 text-emerald-500 dark:text-emerald-400" />
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white font-montserrat">
                      {project.title}
                    </h3>
                  </div>
                  <div className="flex gap-3">
                    {project.videoUrl && (
                      <button
                        onClick={() =>
                          project.videoUrl && setSelectedVideo(project.videoUrl)
                        }
                        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-400 to-blue-400 text-white rounded-lg hover:from-emerald-500 hover:to-blue-500 transition-all duration-200 shadow-md hover:shadow-lg group"
                      >
                        <PlayIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                        <span className="font-medium">Watch Demo</span>
                      </button>
                    )}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-300 rounded-lg hover:bg-emerald-100 dark:hover:bg-emerald-900/50 transition-all duration-200 hover:scale-105 group"
                    >
                      <CodeBracketIcon className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                      <span className="font-medium">View Code</span>
                    </a>
                  </div>
                </div>

                <p className="text-base text-gray-600 dark:text-gray-300 mb-8 leading-relaxed font-inter">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <motion.span
                      key={tech}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1.5 bg-gradient-to-r from-emerald-50 to-blue-50 dark:from-emerald-900/30 dark:to-blue-900/30 text-emerald-600 dark:text-emerald-300 rounded-full text-sm font-medium font-nunito shadow-sm hover:shadow-md transition-all duration-200 group"
                    >
                      <span className="group-hover:animate-bounce inline-block">
                        {tech}
                      </span>
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <VideoModal
        isOpen={!!selectedVideo}
        onClose={() => setSelectedVideo(null)}
        videoUrl={selectedVideo || ""}
        title="Project Demo"
      />
    </section>
  );
};

export default Projects;
