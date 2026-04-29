const express = require('express');
const router = express.Router();
const Blog = require('../models/Blog');

// Get all published blogs
router.get('/', async (req, res) => {
  try {
    const blogs = await Blog.find({ published: true })
      .sort({ createdAt: -1 })
      .select('title excerpt author tags image createdAt views');
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch blogs' });
  }
});

// Get single blog by ID
router.get('/:id', async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }
    
    // Increment views
    blog.views += 1;
    await blog.save();
    
    res.json(blog);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch blog' });
  }
});

// Create new blog (admin only)
router.post('/', async (req, res) => {
  try {
    const { title, content, excerpt, tags, image, published } = req.body;
    
    const blog = new Blog({
      title,
      content,
      excerpt,
      tags: tags || [],
      image,
      published: published || false
    });
    
    await blog.save();
    res.status(201).json(blog);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create blog' });
  }
});

// Update blog (admin only)
router.put('/:id', async (req, res) => {
  try {
    const { title, content, excerpt, tags, image, published } = req.body;
    
    const blog = await Blog.findByIdAndUpdate(
      req.params.id,
      {
        title,
        content,
        excerpt,
        tags: tags || [],
        image,
        published: published || false,
        updatedAt: Date.now()
      },
      { new: true }
    );
    
    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }
    
    res.json(blog);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update blog' });
  }
});

// Delete blog (admin only)
router.delete('/:id', async (req, res) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);
    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }
    res.json({ message: 'Blog deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete blog' });
  }
});

// Get blogs by tag
router.get('/tag/:tag', async (req, res) => {
  try {
    const blogs = await Blog.find({
      tags: { $in: [req.params.tag] },
      published: true
    }).sort({ createdAt: -1 });
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch blogs by tag' });
  }
});

module.exports = router; 