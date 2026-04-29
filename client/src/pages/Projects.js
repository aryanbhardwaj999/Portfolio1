import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All');
  const [loading, setLoading] = useState(true);

  const categories = ['All', 'Full Stack', 'Web App', 'Portfolio', 'Mobile', 'UI/UX'];

  useEffect(() => {
    fetchProjects();
  }, []);

  useEffect(() => {
    if (activeFilter === 'All') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === activeFilter));
    }
  }, [activeFilter, projects]);

  const fetchProjects = async () => {
    try {
      const response = await fetch('/api/projects');
      const data = await response.json();
      setProjects(data);
      setFilteredProjects(data);
    } catch (error) {
      console.error('Error fetching projects:', error);
      // Fallback to sample data
      setProjects(sampleProjects);
      setFilteredProjects(sampleProjects);
    } finally {
      setLoading(false);
    }
  };

  const sampleProjects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, payment integration, and admin dashboard.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500",
      github: "https://github.com/yourusername/ecommerce",
      live: "https://ecommerce-demo.com",
      category: "Full Stack",
      featured: true
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      technologies: ["React", "Socket.io", "Node.js", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500",
      github: "https://github.com/yourusername/task-manager",
      live: "https://task-manager-demo.com",
      category: "Web App",
      featured: true
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "A modern portfolio website with animations, blog functionality, and contact form integration.",
      technologies: ["React", "Framer Motion", "Node.js", "MongoDB"],
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500",
      github: "https://github.com/yourusername/portfolio",
      live: "https://your-portfolio.com",
      category: "Portfolio",
      featured: false
    },
    {
      id: 4,
      title: "Weather App",
      description: "A beautiful weather application with location-based forecasts, interactive maps, and detailed weather information.",
      technologies: ["React Native", "OpenWeather API", "Redux"],
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=500",
      github: "https://github.com/yourusername/weather-app",
      live: "https://weather-app-demo.com",
      category: "Mobile",
      featured: false
    },
    {
      id: 5,
      title: "Design System",
      description: "A comprehensive design system with reusable components, documentation, and design guidelines.",
      technologies: ["Figma", "Storybook", "React", "TypeScript"],
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500",
      github: "https://github.com/yourusername/design-system",
      live: "https://design-system-demo.com",
      category: "UI/UX",
      featured: false
    },
    {
      id: 6,
      title: "Blog Platform",
      description: "A modern blog platform with markdown support, SEO optimization, and content management system.",
      technologies: ["Next.js", "MongoDB", "Tailwind CSS", "Vercel"],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500",
      github: "https://github.com/yourusername/blog-platform",
      live: "https://blog-platform-demo.com",
      category: "Web App",
      featured: false
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  return (
         <div className="min-h-screen bg-gray-50">
      {/* Header */}
              <section className="bg-white py-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center space-y-4"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              My Projects
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Here are some of the projects I've worked on. Each project represents a unique challenge and learning experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-2 rounded-full transition-all duration-200 ${
                  activeFilter === category
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container-custom">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  {project.featured && (
                    <div className="absolute top-4 left-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div className="p-6 space-y-4">
                                     <div>
                     <h3 className="text-xl font-bold text-gray-900 mb-2">
                       {project.title}
                     </h3>
                     <p className="text-gray-600 text-sm leading-relaxed">
                       {project.description}
                     </p>
                   </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                                         {project.technologies.map((tech) => (
                       <span
                         key={tech}
                         className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                       >
                         {tech}
                       </span>
                     ))}
                  </div>

                  {/* Links */}
                  <div className="flex space-x-4 pt-4">
                                         <a
                       href={project.github}
                       target="_blank"
                       rel="noopener noreferrer"
                       className="flex items-center space-x-2 text-gray-600 hover:text-primary-600 transition-colors"
                     >
                       <FiGithub className="w-5 h-5" />
                       <span>Code</span>
                     </a>
                     <a
                       href={project.live}
                       target="_blank"
                       rel="noopener noreferrer"
                       className="flex items-center space-x-2 text-gray-600 hover:text-primary-600 transition-colors"
                     >
                       <FiExternalLink className="w-5 h-5" />
                       <span>Live Demo</span>
                     </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="text-gray-500 text-lg">
                No projects found for the selected category.
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Projects; 