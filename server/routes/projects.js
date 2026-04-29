const express = require('express');
const router = express.Router();

// Sample project data - you can replace this with database
const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce platform built with React, Node.js, and MongoDB",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
    image: "/images/project1.jpg",
    github: "https://github.com/yourusername/ecommerce",
    live: "https://ecommerce-demo.com",
    category: "Full Stack",
    featured: true
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates",
    technologies: ["React", "Socket.io", "Node.js", "PostgreSQL"],
    image: "/images/project2.jpg",
    github: "https://github.com/yourusername/task-manager",
    live: "https://task-manager-demo.com",
    category: "Web App",
    featured: true
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "A modern portfolio website with animations and blog functionality",
    technologies: ["React", "Framer Motion", "Node.js", "MongoDB"],
    image: "/images/project3.jpg",
    github: "https://github.com/yourusername/portfolio",
    live: "https://your-portfolio.com",
    category: "Portfolio",
    featured: false
  }
];

// Get all projects
router.get('/', (req, res) => {
  res.json(projects);
});

// Get featured projects
router.get('/featured', (req, res) => {
  const featuredProjects = projects.filter(project => project.featured);
  res.json(featuredProjects);
});

// Get project by ID
router.get('/:id', (req, res) => {
  const project = projects.find(p => p.id === parseInt(req.params.id));
  if (!project) {
    return res.status(404).json({ message: 'Project not found' });
  }
  res.json(project);
});

// Get projects by category
router.get('/category/:category', (req, res) => {
  const categoryProjects = projects.filter(
    project => project.category.toLowerCase() === req.params.category.toLowerCase()
  );
  res.json(categoryProjects);
});

module.exports = router; 