import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiGlobe } from 'react-icons/fi';

const Resume = () => {
  const personalInfo = {
    name: 'Your Name',
    title: 'Full Stack Developer',
    email: 'your.email@example.com',
    phone: '+1 (555) 123-4567',
    location: 'Your City, Country',
    website: 'https://yourwebsite.com',
    github: 'https://github.com/yourusername',
    linkedin: 'https://linkedin.com/in/yourusername'
  };

  const summary = `Experienced Full Stack Developer with 5+ years of expertise in building modern web applications. 
  Proficient in React, Node.js, and MongoDB with a strong focus on creating scalable, user-friendly solutions. 
  Passionate about clean code, performance optimization, and staying updated with the latest technologies.`;

  const experience = [
    {
      title: 'Senior Full Stack Developer',
      company: 'TechStart Inc.',
      period: '2022 - Present',
      location: 'San Francisco, CA',
      description: [
        'Led development of multiple web applications using React, Node.js, and MongoDB',
        'Mentored junior developers and conducted code reviews',
        'Implemented CI/CD pipelines and automated testing',
        'Collaborated with cross-functional teams to deliver high-quality products'
      ]
    },
    {
      title: 'Full Stack Developer',
      company: 'InnovateCorp',
      period: '2021 - 2022',
      location: 'New York, NY',
      description: [
        'Built and maintained enterprise web applications',
        'Developed RESTful APIs and integrated third-party services',
        'Optimized application performance and user experience',
        'Worked with agile methodologies and participated in sprint planning'
      ]
    },
    {
      title: 'Junior Developer',
      company: 'Digital Agency',
      period: '2019 - 2021',
      location: 'Los Angeles, CA',
      description: [
        'Developed responsive websites using modern frontend technologies',
        'Collaborated with designers to implement UI/UX designs',
        'Maintained and updated existing client websites',
        'Learned and implemented new technologies as needed'
      ]
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      school: 'University Name',
      period: '2015 - 2019',
      location: 'City, State',
      description: 'Graduated with honors. Relevant coursework: Data Structures, Algorithms, Web Development, Database Systems'
    }
  ];

  const skills = {
    'Frontend Development': ['React.js', 'JavaScript (ES6+)', 'TypeScript', 'HTML5 & CSS3', 'Tailwind CSS', 'Next.js'],
    'Backend Development': ['Node.js', 'Express.js', 'Python', 'Django', 'RESTful APIs', 'GraphQL'],
    'Database & ORM': ['MongoDB', 'PostgreSQL', 'MySQL', 'Mongoose', 'Prisma', 'Redis'],
    'DevOps & Tools': ['Git & GitHub', 'Docker', 'AWS', 'Vercel', 'CI/CD', 'Linux'],
    'Design & UI/UX': ['Figma', 'Adobe XD', 'Photoshop', 'Illustrator', 'Prototyping', 'Design Systems']
  };

  const certifications = [
    {
      name: 'AWS Certified Developer',
      issuer: 'Amazon Web Services',
      year: '2023'
    },
    {
      name: 'MongoDB Certified Developer',
      issuer: 'MongoDB University',
      year: '2023'
    },
    {
      name: 'React Developer Certification',
      issuer: 'Meta',
      year: '2022'
    }
  ];

  const projects = [
    {
      name: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with payment integration and admin dashboard',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      link: 'https://github.com/yourusername/ecommerce'
    },
    {
      name: 'Task Management App',
      description: 'Collaborative task management application with real-time updates',
      technologies: ['React', 'Socket.io', 'Node.js', 'PostgreSQL'],
      link: 'https://github.com/yourusername/task-manager'
    },
    {
      name: 'Portfolio Website',
      description: 'Modern portfolio website with blog functionality and contact form',
      technologies: ['React', 'Framer Motion', 'Node.js', 'MongoDB'],
      link: 'https://github.com/yourusername/portfolio'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
              Resume
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              My professional experience, skills, and achievements in a comprehensive format.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary flex items-center space-x-2 mx-auto mt-6"
            >
              <FiDownload className="w-5 h-5" />
              <span>Download PDF</span>
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Resume Content */}
      <section className="py-16">
        <div className="container-custom">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto space-y-12"
          >
            {/* Personal Information */}
            <motion.div variants={itemVariants} className="bg-white rounded-xl shadow-lg p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">{personalInfo.name}</h2>
                <p className="text-xl text-primary-600 mb-4">{personalInfo.title}</p>
                <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <FiMail className="w-4 h-4" />
                    <span>{personalInfo.email}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <FiPhone className="w-4 h-4" />
                    <span>{personalInfo.phone}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <FiMapPin className="w-4 h-4" />
                    <span>{personalInfo.location}</span>
                  </div>
                </div>
                <div className="flex justify-center space-x-4 mt-4">
                  <a href={personalInfo.website} target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700">
                    <FiGlobe className="w-5 h-5" />
                  </a>
                  <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700">
                    <FiGithub className="w-5 h-5" />
                  </a>
                  <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700">
                    <FiLinkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Professional Summary */}
            <motion.div variants={itemVariants} className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional Summary</h3>
              <p className="text-gray-700 leading-relaxed">{summary}</p>
            </motion.div>

            {/* Work Experience */}
            <motion.div variants={itemVariants} className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Work Experience</h3>
              <div className="space-y-8">
                {experience.map((job, index) => (
                  <div key={index} className="border-l-4 border-primary-600 pl-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h4 className="text-xl font-bold text-gray-900">{job.title}</h4>
                      <span className="text-primary-600 font-medium">{job.period}</span>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <p className="text-lg text-gray-700">{job.company}</p>
                      <p className="text-gray-600">{job.location}</p>
                    </div>
                    <ul className="space-y-2">
                      {job.description.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-gray-700 flex items-start">
                          <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Education */}
            <motion.div variants={itemVariants} className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Education</h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="border-l-4 border-primary-600 pl-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h4 className="text-xl font-bold text-gray-900">{edu.degree}</h4>
                      <span className="text-primary-600 font-medium">{edu.period}</span>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <p className="text-lg text-gray-700">{edu.school}</p>
                      <p className="text-gray-600">{edu.location}</p>
                    </div>
                    <p className="text-gray-700">{edu.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Skills */}
            <motion.div variants={itemVariants} className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Technical Skills</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {Object.entries(skills).map(([category, skillList]) => (
                  <div key={category}>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">{category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div variants={itemVariants} className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Certifications</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {certifications.map((cert, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-1">{cert.name}</h4>
                    <p className="text-gray-600 text-sm mb-2">{cert.issuer}</p>
                    <p className="text-primary-600 text-sm font-medium">{cert.year}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Notable Projects */}
            <motion.div variants={itemVariants} className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Notable Projects</h3>
              <div className="space-y-6">
                {projects.map((project, index) => (
                  <div key={index} className="border-l-4 border-primary-600 pl-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h4 className="text-xl font-bold text-gray-900">{project.name}</h4>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-600 hover:text-primary-700 text-sm"
                      >
                        View Project →
                      </a>
                    </div>
                    <p className="text-gray-700 mb-3">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Resume; 