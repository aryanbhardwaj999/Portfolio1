import React from 'react';
import { motion } from 'framer-motion';
import { FiStar, FiMessageCircle } from 'react-icons/fi';

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: 'Sarah Johnson',
      position: 'CEO, TechStart Inc.',
      company: 'TechStart Inc.',
      rating: 5,
      review: 'Working with Your Name was an absolute pleasure. They delivered our e-commerce platform ahead of schedule and exceeded all our expectations. The attention to detail and user experience was outstanding.',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150',
      project: 'E-commerce Platform',
      date: 'December 2023'
    },
    {
      id: 2,
      name: 'Michael Chen',
      position: 'Product Manager',
      company: 'InnovateCorp',
      rating: 5,
      review: 'Exceptional developer with great communication skills. They transformed our ideas into a beautiful, functional application. Highly recommend for any web development project.',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150',
      project: 'Task Management App',
      date: 'November 2023'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      position: 'Founder',
      company: 'DesignStudio',
      rating: 5,
      review: 'Your Name is not just a developer, but a true partner in our project. They understood our vision perfectly and delivered a stunning portfolio website that perfectly represents our brand.',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
      project: 'Portfolio Website',
      date: 'October 2023'
    },
    {
      id: 4,
      name: 'David Thompson',
      position: 'CTO',
      company: 'DataFlow Systems',
      rating: 5,
      review: 'Outstanding technical expertise and problem-solving skills. They helped us build a complex data visualization dashboard that our team absolutely loves. Will definitely work together again.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
      project: 'Analytics Dashboard',
      date: 'September 2023'
    },
    {
      id: 5,
      name: 'Lisa Wang',
      position: 'Marketing Director',
      company: 'GrowthLabs',
      rating: 5,
      review: 'Your Name delivered a modern, responsive website that perfectly captures our brand identity. The SEO optimization and performance improvements have significantly increased our online presence.',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150',
      project: 'Corporate Website',
      date: 'August 2023'
    },
    {
      id: 6,
      name: 'James Wilson',
      position: 'Startup Founder',
      company: 'NextGen Solutions',
      rating: 5,
      review: 'Working with Your Name was a game-changer for our startup. They built a scalable platform that has grown with our business. Their technical knowledge and business acumen are invaluable.',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150',
      project: 'SaaS Platform',
      date: 'July 2023'
    }
  ];

  const stats = [
    { label: 'Total Reviews', value: '50+', icon: '⭐' },
    { label: 'Average Rating', value: '5.0', icon: '🌟' },
    { label: 'Happy Clients', value: '25+', icon: '😊' },
    { label: 'Projects Completed', value: '30+', icon: '🚀' }
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

  const StarRating = ({ rating }) => {
    return (
      <div className="flex space-x-1">
        {[...Array(5)].map((_, index) => (
          <FiStar
            key={index}
            className={`w-4 h-4 ${
              index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
    );
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
              Client Reviews
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              What my clients say about working with me. Real feedback from real projects.
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

      {/* Reviews Grid */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {reviews.map((review) => (
              <motion.div
                key={review.id}
                variants={itemVariants}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                {/* Quote Icon */}
                <div className="flex justify-between items-start mb-4">
                  <FiMessageCircle className="w-8 h-8 text-primary-600" />
                  <StarRating rating={review.rating} />
                </div>

                {/* Review Text */}
                <p className="text-gray-700 leading-relaxed mb-6">
                  "{review.review}"
                </p>

                {/* Project Info */}
                <div className="bg-white rounded-lg p-3 mb-4">
                  <div className="text-sm text-gray-500">Project</div>
                  <div className="font-semibold text-gray-900">{review.project}</div>
                </div>

                {/* Client Info */}
                <div className="flex items-center space-x-3">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900">{review.name}</div>
                    <div className="text-sm text-gray-600">{review.position}</div>
                    <div className="text-sm text-gray-500">{review.company}</div>
                  </div>
                </div>

                {/* Date */}
                <div className="text-xs text-gray-400 mt-3">
                  {review.date}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Review */}
      <section className="py-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-r from-primary-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white"
          >
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center mb-6">
                <StarRating rating={5} />
              </div>
              <blockquote className="text-2xl md:text-3xl font-medium leading-relaxed mb-8">
                "Your Name is an exceptional developer who goes above and beyond to deliver outstanding results. 
                Their technical expertise, attention to detail, and commitment to client satisfaction make them 
                an invaluable partner for any project."
              </blockquote>
              <div className="flex items-center justify-center space-x-4">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100"
                  alt="Featured Client"
                  className="w-16 h-16 rounded-full object-cover border-4 border-white"
                />
                <div className="text-left">
                  <div className="font-semibold text-lg">Michael Chen</div>
                  <div className="text-primary-200">Product Manager, InnovateCorp</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonial Categories */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What Clients Say About Different Aspects
            </h2>
            <p className="text-xl text-gray-600">
              Feedback categorized by different aspects of my work
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                category: 'Communication',
                description: 'Excellent communication throughout the project',
                icon: '💬',
                count: '25+ reviews'
              },
              {
                category: 'Quality',
                description: 'High-quality code and deliverables',
                icon: '✨',
                count: '30+ reviews'
              },
              {
                category: 'Timeline',
                description: 'Always delivered on time or ahead of schedule',
                icon: '⏰',
                count: '28+ reviews'
              },
              {
                category: 'Problem Solving',
                description: 'Great at finding creative solutions to challenges',
                icon: '🧩',
                count: '22+ reviews'
              },
              {
                category: 'User Experience',
                description: 'Focus on creating excellent user experiences',
                icon: '🎨',
                count: '26+ reviews'
              },
              {
                category: 'Support',
                description: 'Ongoing support and maintenance after launch',
                icon: '🛠️',
                count: '20+ reviews'
              }
            ].map((category, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gray-50 rounded-xl p-6 text-center hover:bg-gray-100 transition-colors"
              >
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {category.category}
                </h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <div className="text-sm text-primary-600 font-semibold">
                  {category.count}
                </div>
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
            className="bg-white rounded-2xl shadow-lg p-8 md:p-12 text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Work Together?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join the list of satisfied clients who have transformed their ideas into reality. 
              Let's discuss your project and see how I can help bring your vision to life.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary text-lg px-8 py-3"
            >
              Start Your Project
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Reviews; 