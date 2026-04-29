import React from 'react';
import { motion } from 'framer-motion';
import { FiMapPin, FiUsers, FiGlobe } from 'react-icons/fi';

const Companies = () => {
  const companies = [
    {
      id: 1,
      name: 'TechStart Inc.',
      logo: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=200',
      industry: 'Technology',
      location: 'San Francisco, CA',
      size: '50-100 employees',
      website: 'https://techstart.com',
      description: 'A leading technology startup focused on innovative solutions for modern businesses.',
      projects: [
        'E-commerce Platform Development',
        'Mobile App Development',
        'API Integration'
      ],
      duration: '2022 - Present',
      testimonial: 'Outstanding work quality and professional approach to project delivery.'
    },
    {
      id: 2,
      name: 'InnovateCorp',
      logo: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=200',
      industry: 'Consulting',
      location: 'New York, NY',
      size: '200-500 employees',
      website: 'https://innovatecorp.com',
      description: 'A global consulting firm specializing in digital transformation and business innovation.',
      projects: [
        'Enterprise Web Application',
        'Data Analytics Dashboard',
        'Process Automation'
      ],
      duration: '2021 - 2023',
      testimonial: 'Exceptional technical expertise and great communication throughout the project.'
    },
    {
      id: 3,
      name: 'DesignStudio',
      logo: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=200',
      industry: 'Design & Creative',
      location: 'Los Angeles, CA',
      size: '20-50 employees',
      website: 'https://designstudio.com',
      description: 'A creative agency focused on branding, design, and digital experiences.',
      projects: [
        'Portfolio Website Design',
        'Brand Identity System',
        'UI/UX Design'
      ],
      duration: '2021 - 2022',
      testimonial: 'Creative solutions that perfectly captured our brand vision.'
    },
    {
      id: 4,
      name: 'DataFlow Systems',
      logo: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=200',
      industry: 'Data & Analytics',
      location: 'Austin, TX',
      size: '100-200 employees',
      website: 'https://dataflowsystems.com',
      description: 'A data analytics company providing insights and solutions for enterprise clients.',
      projects: [
        'Real-time Analytics Platform',
        'Data Visualization Tools',
        'Machine Learning Integration'
      ],
      duration: '2020 - 2021',
      testimonial: 'Delivered complex data solutions with precision and efficiency.'
    },
    {
      id: 5,
      name: 'GrowthLabs',
      logo: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=200',
      industry: 'Marketing',
      location: 'Chicago, IL',
      size: '50-100 employees',
      website: 'https://growthlabs.com',
      description: 'A digital marketing agency helping businesses grow through strategic online presence.',
      projects: [
        'Corporate Website Redesign',
        'SEO Optimization',
        'Performance Optimization'
      ],
      duration: '2020 - 2021',
      testimonial: 'Significant improvement in website performance and user engagement.'
    },
    {
      id: 6,
      name: 'NextGen Solutions',
      logo: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=200',
      industry: 'SaaS',
      location: 'Seattle, WA',
      size: '20-50 employees',
      website: 'https://nextgensolutions.com',
      description: 'A SaaS startup building innovative solutions for modern businesses.',
      projects: [
        'SaaS Platform Development',
        'User Management System',
        'Payment Integration'
      ],
      duration: '2019 - 2020',
      testimonial: 'Built a scalable platform that has grown with our business needs.'
    }
  ];

  const stats = [
    { label: 'Companies Worked With', value: '25+', icon: '🏢' },
    { label: 'Projects Delivered', value: '50+', icon: '🚀' },
    { label: 'Industries Served', value: '12+', icon: '🏭' },
    { label: 'Client Satisfaction', value: '98%', icon: '😊' }
  ];

  const industries = [
    'Technology', 'Consulting', 'Design', 'Data & Analytics', 
    'Marketing', 'SaaS', 'Healthcare', 'Finance', 
    'Education', 'E-commerce', 'Entertainment', 'Real Estate'
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
              Companies I've Worked With
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A diverse portfolio of companies across various industries, from startups to enterprises.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Overview */}
      <section className="py-16">
        <div className="container-custom">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-xl shadow-lg p-6 text-center"
              >
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-primary-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Companies Grid */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {companies.map((company) => (
              <motion.div
                key={company.id}
                variants={itemVariants}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                {/* Company Logo and Info */}
                <div className="flex items-center space-x-4 mb-6">
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900">{company.name}</h3>
                    <p className="text-gray-600">{company.industry}</p>
                  </div>
                </div>

                {/* Company Details */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <FiMapPin className="w-4 h-4" />
                    <span>{company.location}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <FiUsers className="w-4 h-4" />
                    <span>{company.size}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <FiGlobe className="w-4 h-4" />
                    <a
                      href={company.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 hover:text-primary-700"
                    >
                      Visit Website
                    </a>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-700 text-sm leading-relaxed mb-6">
                  {company.description}
                </p>

                {/* Projects */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Projects:</h4>
                  <ul className="space-y-2">
                    {company.projects.map((project, index) => (
                      <li key={index} className="text-sm text-gray-600 flex items-center">
                        <span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>
                        {project}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Duration */}
                <div className="text-sm text-gray-500 mb-4">
                  <span className="font-medium">Duration:</span> {company.duration}
                </div>

                {/* Testimonial */}
                <div className="bg-white rounded-lg p-4 border-l-4 border-primary-600">
                  <p className="text-sm text-gray-700 italic">
                    "{company.testimonial}"
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Industries Served
            </h2>
            <p className="text-xl text-gray-600">
              Experience across diverse industries and business domains
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-lg p-4 text-center hover:shadow-md transition-shadow"
              >
                <div className="text-gray-700 font-medium">{industry}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Company Sizes */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Company Sizes I've Worked With
            </h2>
            <p className="text-xl text-gray-600">
              Experience with companies of all sizes, from startups to enterprises
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                size: 'Startups (1-50)',
                description: 'Agile development, rapid prototyping, and MVP development',
                icon: '🚀',
                count: '15+ companies'
              },
              {
                size: 'Mid-size (50-500)',
                description: 'Scalable solutions, team collaboration, and process optimization',
                icon: '🏢',
                count: '8+ companies'
              },
              {
                size: 'Enterprise (500+)',
                description: 'Complex systems, enterprise integration, and compliance',
                icon: '🏭',
                count: '2+ companies'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gray-50 rounded-xl p-6 text-center"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.size}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="text-primary-600 font-semibold">{item.count}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-r from-primary-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white text-center"
          >
            <h2 className="text-3xl font-bold mb-4">
              Ready to Join This List?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let's work together to create something amazing. I'm always excited to take on new challenges 
              and help businesses achieve their digital goals.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Start Your Project
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Companies; 