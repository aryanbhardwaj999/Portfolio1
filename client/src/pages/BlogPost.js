import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiCalendar, FiUser, FiEye, FiArrowLeft, FiShare2 } from 'react-icons/fi';

const BlogPost = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    fetchBlogPost();
  }, [id]);

  const fetchBlogPost = async () => {
    try {
      const response = await fetch(`/api/blog/${id}`);
      const data = await response.json();
      setBlog(data);
      
      // Fetch related posts (same tags)
      if (data.tags && data.tags.length > 0) {
        const relatedResponse = await fetch(`/api/blog/tag/${data.tags[0]}`);
        const relatedData = await relatedResponse.json();
        setRelatedPosts(relatedData.filter(post => post._id !== id).slice(0, 3));
      }
    } catch (error) {
      console.error('Error fetching blog post:', error);
      // Fallback to sample data
      setBlog(sampleBlogPost);
      setRelatedPosts(sampleRelatedPosts);
    } finally {
      setLoading(false);
    }
  };

  const sampleBlogPost = {
    _id: id,
    title: 'Getting Started with React Hooks: A Comprehensive Guide',
    content: `
      <p>React Hooks have revolutionized the way we write functional components in React. Introduced in React 16.8, hooks allow you to use state and other React features without writing a class component.</p>
      
      <h2>What are React Hooks?</h2>
      <p>Hooks are functions that let you "hook into" React state and lifecycle features from function components. They don't work inside classes — they let you use React without classes.</p>
      
      <h2>Basic Hooks</h2>
      <h3>useState</h3>
      <p>The useState hook is the most basic hook that allows you to add state to functional components. Here's how to use it:</p>
      
      <pre><code>import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}</code></pre>
      
      <h3>useEffect</h3>
      <p>The useEffect hook lets you perform side effects in function components. It serves the same purpose as componentDidMount, componentDidUpdate, and componentWillUnmount in React classes.</p>
      
      <pre><code>import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = \`You clicked \${count} times\`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}</code></pre>
      
      <h2>Custom Hooks</h2>
      <p>Custom hooks are JavaScript functions whose names start with "use" and that may call other hooks. They allow you to extract component logic into reusable functions.</p>
      
      <pre><code>import { useState, useEffect } from 'react';

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    
    window.addEventListener("resize", handleResize);
    handleResize();
    
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}</code></pre>
      
      <h2>Best Practices</h2>
      <ul>
        <li>Only call hooks at the top level of your function component</li>
        <li>Don't call hooks inside loops, conditions, or nested functions</li>
        <li>Only call hooks from React function components or custom hooks</li>
        <li>Use the ESLint plugin to enforce these rules</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>React Hooks have made functional components more powerful and easier to work with. They promote better code reuse and make it easier to understand component logic. Start using hooks in your next React project and experience the benefits firsthand!</p>
    `,
    author: 'Your Name',
    tags: ['React', 'JavaScript', 'Frontend'],
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800',
    createdAt: '2023-12-01T00:00:00.000Z',
    views: 1250
  };

  const sampleRelatedPosts = [
    {
      _id: '2',
      title: 'Building Scalable APIs with Node.js',
      excerpt: 'Discover best practices for building scalable and maintainable APIs using Node.js and Express.',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=300',
      createdAt: '2023-11-25T00:00:00.000Z'
    },
    {
      _id: '3',
      title: 'Mastering CSS Grid and Flexbox',
      excerpt: 'A deep dive into modern CSS layout techniques for creating responsive designs.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300',
      createdAt: '2023-11-18T00:00:00.000Z'
    }
  ];

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Blog Post Not Found</h1>
          <Link to="/blog" className="text-primary-600 hover:text-primary-700">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back Button */}
      <section className="bg-white py-4 border-b">
        <div className="container-custom">
          <Link
            to="/blog"
            className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
          >
            <FiArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
        </div>
      </section>

      {/* Blog Post Header */}
      <section className="bg-white py-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6">
              <div className="flex items-center space-x-1">
                <FiCalendar className="w-4 h-4" />
                <span>{formatDate(blog.createdAt)}</span>
              </div>
              <div className="flex items-center space-x-1">
                <FiUser className="w-4 h-4" />
                <span>{blog.author}</span>
              </div>
              <div className="flex items-center space-x-1">
                <FiEye className="w-4 h-4" />
                <span>{blog.views} views</span>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {blog.title}
            </h1>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {blog.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Featured Image */}
            {blog.image && (
              <div className="mb-8">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-64 md:h-96 object-cover rounded-xl"
                />
              </div>
            )}

            {/* Share Button */}
            <div className="flex justify-end mb-8">
              <button className="flex items-center space-x-2 text-gray-600 hover:text-primary-600 transition-colors">
                <FiShare2 className="w-4 h-4" />
                <span>Share</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
              <div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: blog.content }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Related Posts
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedPosts.map((post) => (
                  <Link
                    key={post._id}
                    to={`/blog/${post._id}`}
                    className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <div className="h-48 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-primary-600 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">
                        {post.excerpt}
                      </p>
                      <div className="text-sm text-gray-500">
                        {formatDate(post.createdAt)}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Call to Action */}
      <section className="py-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-gradient-to-r from-primary-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white text-center"
          >
            <h2 className="text-3xl font-bold mb-4">
              Enjoyed This Article?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Subscribe to my newsletter to get notified about new articles, tutorials, and insights about web development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 rounded-lg text-gray-900 flex-1"
              />
              <button className="bg-white text-primary-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost; 