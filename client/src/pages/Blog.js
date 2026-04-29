import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiCalendar, FiUser, FiEye, FiSearch } from 'react-icons/fi';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('All');

  useEffect(() => {
    fetchBlogs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    filterBlogs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [blogs, searchTerm, selectedTag]);

  const fetchBlogs = async () => {
    try {
      const response = await fetch('/api/blog');
      const data = await response.json();
      setBlogs(data);
    } catch (error) {
      console.error('Error fetching blogs:', error);
      // Fallback to sample data
      setBlogs(sampleBlogs);
    } finally {
      setLoading(false);
    }
  };

  const filterBlogs = () => {
    let filtered = blogs;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(blog =>
        blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by tag
    if (selectedTag !== 'All') {
      filtered = filtered.filter(blog =>
        blog.tags.includes(selectedTag)
      );
    }

    setFilteredBlogs(filtered);
  };

  const sampleBlogs = [
    {
      _id: '1',
      title: 'Getting Started with React Hooks',
      excerpt: 'Learn how to use React Hooks to manage state and side effects in functional components. This comprehensive guide covers useState, useEffect, and custom hooks.',
      author: 'Your Name',
      tags: ['React', 'JavaScript', 'Frontend'],
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500',
      createdAt: '2023-12-01T00:00:00.000Z',
      views: 1250
    },
    {
      _id: '2',
      title: 'Building Scalable APIs with Node.js',
      excerpt: 'Discover best practices for building scalable and maintainable APIs using Node.js and Express. Learn about authentication, validation, and error handling.',
      author: 'Your Name',
      tags: ['Node.js', 'API', 'Backend'],
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500',
      createdAt: '2023-11-25T00:00:00.000Z',
      views: 980
    },
    {
      _id: '3',
      title: 'Mastering CSS Grid and Flexbox',
      excerpt: 'A deep dive into modern CSS layout techniques. Learn how to create responsive and flexible layouts using CSS Grid and Flexbox.',
      author: 'Your Name',
      tags: ['CSS', 'Frontend', 'Design'],
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500',
      createdAt: '2023-11-18T00:00:00.000Z',
      views: 750
    },
    {
      _id: '4',
      title: 'Introduction to MongoDB',
      excerpt: 'Learn the basics of MongoDB, a popular NoSQL database. Understand document structure, queries, and aggregation pipelines.',
      author: 'Your Name',
      tags: ['MongoDB', 'Database', 'Backend'],
      image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=500',
      createdAt: '2023-11-10T00:00:00.000Z',
      views: 620
    },
    {
      _id: '5',
      title: 'Deploying React Apps to Production',
      excerpt: 'Step-by-step guide to deploying React applications to production. Learn about build optimization, environment variables, and hosting platforms.',
      author: 'Your Name',
      tags: ['React', 'Deployment', 'DevOps'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500',
      createdAt: '2023-11-05T00:00:00.000Z',
      views: 890
    },
    {
      _id: '6',
      title: 'State Management with Redux Toolkit',
      excerpt: 'Modern state management with Redux Toolkit. Learn how to simplify Redux boilerplate and manage application state effectively.',
      author: 'Your Name',
      tags: ['Redux', 'React', 'State Management'],
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=500',
      createdAt: '2023-10-28T00:00:00.000Z',
      views: 1100
    }
  ];

  const allTags = ['All', ...Array.from(new Set(blogs.flatMap(blog => blog.tags)))];

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

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
              Blog
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Thoughts, tutorials, and insights about web development, technology, and design.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-white border-b">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col md:flex-row gap-6 items-center"
          >
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            {/* Tags Filter */}
            <div className="flex flex-wrap gap-2">
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`px-4 py-2 rounded-full text-sm transition-all duration-200 ${
                    selectedTag === tag
                      ? 'bg-primary-600 text-white shadow-lg'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16">
        <div className="container-custom">
          {filteredBlogs.length > 0 ? (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredBlogs.map((blog) => (
                <motion.article
                  key={blog._id}
                  variants={itemVariants}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  {/* Blog Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </div>

                  {/* Blog Content */}
                  <div className="p-6 space-y-4">
                    {/* Meta Information */}
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <FiCalendar className="w-4 h-4" />
                          <span>{formatDate(blog.createdAt)}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <FiUser className="w-4 h-4" />
                          <span>{blog.author}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-1">
                        <FiEye className="w-4 h-4" />
                        <span>{blog.views}</span>
                      </div>
                    </div>

                    {/* Title and Excerpt */}
                    <div>
                      <Link to={`/blog/${blog._id}`}>
                        <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-primary-600 transition-colors">
                          {blog.title}
                        </h3>
                      </Link>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {blog.excerpt}
                      </p>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {blog.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Read More Link */}
                    <Link
                      to={`/blog/${blog._id}`}
                      className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium transition-colors"
                    >
                      Read More
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="text-gray-500 text-lg">
                No blog posts found matching your criteria.
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Blog; 