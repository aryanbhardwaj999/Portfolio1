import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiMail, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

const About = () => {
  const personalInfo = [
    { label: 'Name', value: 'Your Name' },
    { label: 'Age', value: '28 years' },
    { label: 'Location', value: 'Your City, Country' },
    { label: 'Email', value: 'your.email@example.com' },
    { label: 'Phone', value: '+1 (555) 123-4567' },
    { label: 'Experience', value: '5+ years' },
    { label: 'Languages', value: 'English, Hindi, Spanish' },
    { label: 'Availability', value: 'Available for projects' }
  ];

  const socialLinks = [
    { icon: FiGithub, href: 'https://github.com/yourusername', label: 'GitHub' },
    { icon: FiLinkedin, href: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
    { icon: FiTwitter, href: 'https://twitter.com/yourusername', label: 'Twitter' },
    { icon: FiMail, href: 'mailto:your.email@example.com', label: 'Email' }
  ];

  const timeline = [
    {
      year: '2023',
      title: 'Senior Full Stack Developer',
      company: 'Tech Company Inc.',
      description: 'Leading development teams and architecting scalable solutions.'
    },
    {
      year: '2021',
      title: 'Full Stack Developer',
      company: 'Startup XYZ',
      description: 'Built and maintained multiple web applications using modern technologies.'
    },
    {
      year: '2019',
      title: 'Junior Developer',
      company: 'Digital Agency',
      description: 'Started my journey in web development with focus on frontend technologies.'
    },
    {
      year: '2018',
      title: 'Computer Science Degree',
      company: 'University Name',
      description: 'Graduated with honors in Computer Science and Engineering.'
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
              About Me
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get to know me better - my journey, passion, and what drives me to create amazing digital experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container-custom">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 lg:grid-cols-3 gap-12"
          >
            {/* Profile Image */}
            <motion.div variants={itemVariants} className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-lg p-8 text-center">
                <div className="relative mb-6">
                  <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-r from-primary-500 to-purple-600 p-2">
                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                      <span className="text-6xl font-bold bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">
                        YN
                      </span>
                    </div>
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-green-500 rounded-full border-4 border-white"></div>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Name</h2>
                <p className="text-gray-600 mb-6">Full Stack Developer & UI/UX Designer</p>

                {/* Personal Info */}
                <div className="space-y-3 mb-8">
                  {personalInfo.map((info, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-gray-600 font-medium">{info.label}:</span>
                      <span className="text-gray-900">{info.value}</span>
                    </div>
                  ))}
                </div>

                {/* Social Links */}
                <div className="flex justify-center space-x-4">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center text-white hover:bg-primary-700 transition-colors"
                      >
                        <Icon className="w-5 h-5" />
                      </motion.a>
                    );
                  })}
                </div>

                {/* Download Resume */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-6 w-full btn-primary flex items-center justify-center space-x-2"
                >
                  <FiDownload className="w-5 h-5" />
                  <span>Download Resume</span>
                </motion.button>
              </div>
            </motion.div>

            {/* About Content */}
            <motion.div variants={itemVariants} className="lg:col-span-2 space-y-8">
              {/* Story */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">My Story</h3>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    Hello! I'm a passionate Full Stack Developer with over 5 years of experience in creating 
                    innovative digital solutions. My journey in technology began when I first discovered my 
                    love for coding during my university years.
                  </p>
                  <p>
                    I specialize in building modern web applications using cutting-edge technologies like 
                    React, Node.js, and MongoDB. My approach combines technical expertise with creative 
                    problem-solving to deliver exceptional user experiences.
                  </p>
                  <p>
                    When I'm not coding, you can find me exploring new technologies, contributing to open 
                    source projects, or sharing knowledge through my blog. I believe in continuous learning 
                    and staying updated with the latest industry trends.
                  </p>
                  <p>
                    I'm always excited to take on new challenges and collaborate with teams to bring 
                    innovative ideas to life. Let's work together to create something amazing!
                  </p>
                </div>
              </div>

              {/* Values */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">My Values</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      title: 'Quality',
                      description: 'I believe in writing clean, maintainable code that stands the test of time.',
                      icon: '✨'
                    },
                    {
                      title: 'Innovation',
                      description: 'Always exploring new technologies and approaches to solve problems creatively.',
                      icon: '🚀'
                    },
                    {
                      title: 'Collaboration',
                      description: 'Working effectively with teams and clients to achieve shared goals.',
                      icon: '🤝'
                    },
                    {
                      title: 'Learning',
                      description: 'Continuously improving skills and staying updated with industry trends.',
                      icon: '📚'
                    }
                  ].map((value, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="text-2xl">{value.icon}</div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">{value.title}</h4>
                        <p className="text-gray-600 text-sm">{value.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">My Journey</h2>
            <p className="text-xl text-gray-600">
              A timeline of my professional experience and achievements
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="relative"
          >
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-200"></div>

            {timeline.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-lg"></div>

                {/* Content */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                    <div className="text-primary-600 font-bold text-lg mb-2">{item.year}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <div className="text-gray-600 font-medium mb-2">{item.company}</div>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Fun Facts */}
      <section className="py-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Fun Facts</h2>
            <p className="text-xl text-gray-600">
              Some interesting things about me
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { number: '500+', label: 'Cups of Coffee', icon: '☕' },
              { number: '50+', label: 'Projects Completed', icon: '🚀' },
              { number: '1000+', label: 'Hours of Coding', icon: '💻' },
              { number: '25+', label: 'Happy Clients', icon: '😊' }
            ].map((fact, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl mb-4">{fact.icon}</div>
                <div className="text-3xl font-bold text-primary-600 mb-2">{fact.number}</div>
                <div className="text-gray-600">{fact.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About; 