import React from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';

const Experience = () => {
  const experienceData = [
    {
      year: '2019',
      projects: 8,
      clients: 5,
      satisfaction: 85
    },
    {
      year: '2020',
      projects: 12,
      clients: 8,
      satisfaction: 88
    },
    {
      year: '2021',
      projects: 15,
      clients: 12,
      satisfaction: 92
    },
    {
      year: '2022',
      projects: 18,
      clients: 15,
      satisfaction: 95
    },
    {
      year: '2023',
      projects: 22,
      clients: 18,
      satisfaction: 98
    }
  ];

  const skillsData = [
    { name: 'Frontend', value: 35, color: '#3B82F6' },
    { name: 'Backend', value: 30, color: '#10B981' },
    { name: 'Database', value: 20, color: '#F59E0B' },
    { name: 'DevOps', value: 15, color: '#EF4444' }
  ];

  const monthlyProjects = [
    { month: 'Jan', projects: 2 },
    { month: 'Feb', projects: 3 },
    { month: 'Mar', projects: 4 },
    { month: 'Apr', projects: 2 },
    { month: 'May', projects: 5 },
    { month: 'Jun', projects: 3 },
    { month: 'Jul', projects: 4 },
    { month: 'Aug', projects: 6 },
    { month: 'Sep', projects: 5 },
    { month: 'Oct', projects: 4 },
    { month: 'Nov', projects: 3 },
    { month: 'Dec', projects: 2 }
  ];

  const stats = [
    { label: 'Total Projects', value: '50+', icon: '🚀' },
    { label: 'Happy Clients', value: '25+', icon: '😊' },
    { label: 'Years Experience', value: '5+', icon: '⏰' },
    { label: 'Success Rate', value: '98%', icon: '📈' }
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
              Experience & Statistics
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Track my journey through the years with detailed statistics and performance metrics.
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

      {/* Charts Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-16"
          >
            {/* Yearly Progress Chart */}
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Yearly Progress
              </h2>
              <div className="bg-white rounded-xl shadow-lg p-6">
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart data={experienceData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="projects" fill="#3B82F6" name="Projects" />
                    <Bar dataKey="clients" fill="#10B981" name="Clients" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </motion.div>

            {/* Skills Distribution */}
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Skills Distribution
              </h2>
              <div className="bg-white rounded-xl shadow-lg p-6">
                <ResponsiveContainer width="100%" height={400}>
                  <PieChart>
                    <Pie
                      data={skillsData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      outerRadius={150}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {skillsData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </motion.div>

            {/* Monthly Projects Trend */}
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Monthly Projects Trend
              </h2>
              <div className="bg-white rounded-xl shadow-lg p-6">
                <ResponsiveContainer width="100%" height={400}>
                  <LineChart data={monthlyProjects}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="projects" stroke="#3B82F6" strokeWidth={3} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </motion.div>

            {/* Client Satisfaction */}
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Client Satisfaction Over Time
              </h2>
              <div className="bg-white rounded-xl shadow-lg p-6">
                <ResponsiveContainer width="100%" height={400}>
                  <LineChart data={experienceData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis domain={[80, 100]} />
                    <Tooltip />
                    <Line type="monotone" dataKey="satisfaction" stroke="#10B981" strokeWidth={3} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Key Achievements */}
      <section className="py-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Key Achievements
            </h2>
            <p className="text-xl text-gray-600">
              Milestones that define my professional journey
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
                title: 'First Major Project',
                description: 'Successfully delivered a full-stack e-commerce platform',
                year: '2019',
                icon: '🎯'
              },
              {
                title: 'Team Lead Role',
                description: 'Led a team of 5 developers on multiple projects',
                year: '2021',
                icon: '👥'
              },
              {
                title: '100% Client Satisfaction',
                description: 'Achieved perfect satisfaction score for 12 consecutive months',
                year: '2022',
                icon: '⭐'
              },
              {
                title: 'Technical Excellence Award',
                description: 'Recognized for outstanding technical contributions',
                year: '2023',
                icon: '🏆'
              },
              {
                title: 'Mentorship Program',
                description: 'Started mentoring junior developers',
                year: '2023',
                icon: '📚'
              },
              {
                title: 'Open Source Contributions',
                description: 'Contributed to 10+ popular open source projects',
                year: '2023',
                icon: '🌐'
              }
            ].map((achievement, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl mb-4">{achievement.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {achievement.title}
                </h3>
                <p className="text-gray-600 mb-4">{achievement.description}</p>
                <div className="text-sm text-primary-600 font-semibold">
                  {achievement.year}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Experience; 