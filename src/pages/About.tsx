import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Heart, Award, Users, BookOpen } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for excellence in all aspects of education and character development.'
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'We uphold the highest standards of honesty, transparency, and moral conduct.'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'We foster a supportive and inclusive community that celebrates diversity.'
    },
    {
      icon: BookOpen,
      title: 'Innovation',
      description: 'We embrace innovative teaching methods and modern educational technology.'
    }
  ];

  return (
    <div className="pt-24 min-h-screen">
      {/* Header Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold mb-4">About Osbert SHS</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Discover our rich history, mission, and commitment to shaping the leaders of tomorrow
            </p>
          </motion.div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Our History</h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  Founded in 2009, Osbert Senior High School began as a vision to provide quality secondary 
                  education in the growing community of Ashongman Estate. What started as a small institution 
                  with just 150 students has grown into one of Ghana's most respected senior high schools.
                </p>
                <p>
                  Over the years, we have consistently maintained our commitment to academic excellence, 
                  character development, and holistic education. Our graduates have gone on to excel in 
                  universities both locally and internationally, making significant contributions to society.
                </p>
                <p>
                  Today, with over 2,500 students and a dedicated faculty of 180+ professionals, Osbert SHS 
                  continues to be a beacon of educational excellence in Ghana, preparing young minds for the 
                  challenges and opportunities of the 21st century.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="School building"
                className="rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg"
            >
              <div className="flex items-center mb-4">
                <Target className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Our Mission</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                To provide comprehensive, quality education that develops intellectual curiosity, 
                critical thinking skills, and strong moral character in our students, preparing 
                them to become responsible global citizens and leaders in their chosen fields.
              </p>
            </motion.div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg"
            >
              <div className="flex items-center mb-4">
                <Eye className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Our Vision</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                To be the leading senior high school in Ghana, recognized for academic excellence, 
                innovation in teaching, and the development of well-rounded individuals who 
                contribute positively to society and the global community.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              The principles that guide everything we do at Osbert Senior High School
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900/20 text-blue-600 rounded-full mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <value.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Principal's Message */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/5212664/pexels-photo-5212664.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Principal"
                className="rounded-lg shadow-xl"
              />
            </motion.div>
            
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Principal's Welcome Message
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  "Welcome to Osbert Senior High School, where we believe every student has the 
                  potential to achieve greatness. Our dedicated team of educators is committed 
                  to nurturing not just academic excellence, but also character, leadership, 
                  and a lifelong love of learning."
                </p>
                <p>
                  "At Osbert SHS, we prepare our students not just for examinations, but for 
                  life. We foster critical thinking, creativity, and the confidence to tackle 
                  the challenges of tomorrow. I invite you to join our community of learners, 
                  innovators, and future leaders."
                </p>
              </div>
              <div className="mt-6">
                <p className="font-bold text-gray-900 dark:text-white">Mrs. Sarah Mensah</p>
                <p className="text-gray-600 dark:text-gray-300">Principal, Osbert Senior High School</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Achievements</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Recognition and awards that highlight our commitment to excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Best SHS in Greater Accra', year: '2023', category: 'Academic Excellence' },
              { title: 'Science Quiz Regional Champions', year: '2022', category: 'Academic Competition' },
              { title: 'Environmental Sustainability Award', year: '2023', category: 'Community Impact' },
              { title: 'Digital Innovation in Education', year: '2022', category: 'Technology' },
              { title: 'Best School Infrastructure', year: '2021', category: 'Facilities' },
              { title: 'Outstanding Alumni Network', year: '2023', category: 'Alumni Relations' }
            ].map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <Award className="h-8 w-8 text-gold-500 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {achievement.title}
                </h3>
                <p className="text-blue-600 font-semibold mb-1">{achievement.year}</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{achievement.category}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;