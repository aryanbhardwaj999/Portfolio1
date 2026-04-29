import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiDatabase, FiServer, FiSmartphone, FiAward, FiCloud } from 'react-icons/fi';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: FiCode,
      color: '#3B82F6',
      skills: [
        { name: 'React.js', level: 95 },
        { name: 'JavaScript (ES6+)', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'HTML5 & CSS3', level: 95 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'Next.js', level: 80 }
      ]
    },
    {
      title: 'Backend Development',
      icon: FiServer,
      color: '#10B981',
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Express.js', level: 85 },
        { name: 'Python', level: 80 },
        { name: 'Django', level: 75 },
        { name: 'RESTful APIs', level: 90 },
        { name: 'GraphQL', level: 70 }
      ]
    },
    {
      title: 'Database & ORM',
      icon: FiDatabase,
      color: '#F59E0B',
      skills: [
        { name: 'MongoDB', level: 85 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'MySQL', level: 75 },
        { name: 'Mongoose', level: 85 },
        { name: 'Prisma', level: 70 },
        { name: 'Redis', level: 65 }
      ]
    },
    {
      title: 'Mobile Development',
      icon: FiSmartphone,
      color: '#8B5CF6',
      skills: [
        { name: 'React Native', level: 80 },
        { name: 'Flutter', level: 70 },
        { name: 'Mobile UI/UX', level: 75 },
        { name: 'App Store Deployment', level: 70 },
        { name: 'Mobile Testing', level: 75 }
      ]
    },
    {
      title: 'Design & UI/UX',
      icon: FiAward,
      color: '#EC4899',
      skills: [
        { name: 'Figma', level: 85 },
        { name: 'Adobe XD', level: 80 },
        { name: 'Photoshop', level: 75 },
        { name: 'Illustrator', level: 70 },
        { name: 'Prototyping', level: 85 },
        { name: 'Design Systems', level: 80 }
      ]
    },
    {
      title: 'DevOps & Tools',
      icon: FiCloud,
      color: '#EF4444',
      skills: [
        { name: 'Git & GitHub', level: 90 },
        { name: 'Docker', level: 75 },
        { name: 'AWS', level: 70 },
        { name: 'Vercel', level: 85 },
        { name: 'CI/CD', level: 75 },
        { name: 'Linux', level: 80 }
      ]
    }
  ];

  const tools = [
    { name: 'VS Code', icon: '💻' },
    { name: 'Postman', icon: '📮' },
    { name: 'Docker', icon: '🐳' },
    { name: 'Git', icon: '📝' },
    { name: 'Figma', icon: '🎨' },
    { name: 'Slack', icon: '💬' },
    { name: 'Jira', icon: '📋' },
    { name: 'Notion', icon: '📓' }
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

  const ProgressBar = ({ level, color }) => (
    <div className="w-full bg-gray-200 rounded-full h-2">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
        className="h-2 rounded-full"
        style={{ backgroundColor: color }}
      />
    </div>
  );

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
              Skills & Expertise
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A comprehensive overview of my technical skills and tools I use to bring ideas to life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Skills Categories */}
      <section className="py-16">
        <div className="container-custom">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-center space-x-3 mb-6">
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: `${category.color}20` }}
                    >
                      <Icon className="w-6 h-6" style={{ color: category.color }} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
                  </div>

                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-gray-700 font-medium">{skill.name}</span>
                          <span className="text-sm text-gray-500">{skill.level}%</span>
                        </div>
                        <ProgressBar level={skill.level} color={category.color} />
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Tools & Technologies */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Tools & Technologies
            </h2>
            <p className="text-xl text-gray-600">
              Tools and technologies I use daily to enhance productivity and deliver quality work.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6"
          >
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gray-50 rounded-lg p-4 text-center hover:bg-gray-100 transition-colors"
              >
                <div className="text-3xl mb-2">{tool.icon}</div>
                <div className="text-sm font-medium text-gray-700">{tool.name}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Additional Skills */}
      <section className="py-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Additional Skills
            </h2>
            <p className="text-xl text-gray-600">
              Beyond technical skills, here are other areas where I excel.
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
                title: 'Project Management',
                description: 'Agile methodologies, Scrum, Kanban, and project planning',
                icon: '📊'
              },
              {
                title: 'Team Leadership',
                description: 'Leading development teams, mentoring, and code reviews',
                icon: '👥'
              },
              {
                title: 'Problem Solving',
                description: 'Analytical thinking, debugging, and optimization',
                icon: '🧩'
              },
              {
                title: 'Communication',
                description: 'Client communication, documentation, and presentations',
                icon: '💬'
              },
              {
                title: 'Learning',
                description: 'Quick learner, staying updated with latest technologies',
                icon: '📚'
              },
              {
                title: 'Creativity',
                description: 'Innovative solutions, UI/UX design, and user experience',
                icon: '🎨'
              }
            ].map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl mb-4">{skill.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {skill.title}
                </h3>
                <p className="text-gray-600">{skill.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Certifications
            </h2>
            <p className="text-xl text-gray-600">
              Professional certifications that validate my expertise.
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
                title: 'AWS Certified Developer',
                issuer: 'Amazon Web Services',
                year: '2023',
                icon: '☁️'
              },
              {
                title: 'MongoDB Certified Developer',
                issuer: 'MongoDB University',
                year: '2023',
                icon: '🍃'
              },
              {
                title: 'React Developer Certification',
                issuer: 'Meta',
                year: '2022',
                icon: '⚛️'
              },
              {
                title: 'Node.js Certification',
                issuer: 'OpenJS Foundation',
                year: '2022',
                icon: '🟢'
              },
              {
                title: 'UI/UX Design Certificate',
                issuer: 'Google',
                year: '2021',
                icon: '🎨'
              },
              {
                title: 'Agile Project Management',
                issuer: 'Scrum Alliance',
                year: '2021',
                icon: '📋'
              }
            ].map((cert, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors"
              >
                <div className="text-4xl mb-4">{cert.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {cert.title}
                </h3>
                <p className="text-gray-600 mb-2">{cert.issuer}</p>
                <p className="text-sm text-primary-600 font-semibold">{cert.year}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Skills; 