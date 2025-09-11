import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Microscope, Calculator, Palette, Globe, Hammer, ChefHat, TrendingUp } from 'lucide-react';

const Academics: React.FC = () => {
  const programs = [
    {
      icon: Microscope,
      title: 'General Science',
      description: 'Comprehensive science education covering Physics, Chemistry, Biology, and Mathematics. Perfect for students pursuing careers in medicine, engineering, and research.',
      subjects: ['Physics', 'Chemistry', 'Biology', 'Mathematics', 'English Language'],
      color: 'bg-blue-500',
      duration: '3 Years'
    },
    {
      icon: Globe,
      title: 'General Arts',
      description: 'Liberal arts program focusing on languages, literature, history, and social sciences. Ideal for careers in education, journalism, and social services.',
      subjects: ['Literature', 'History', 'Geography', 'Government', 'Economics'],
      color: 'bg-green-500',
      duration: '3 Years'
    },
    {
      icon: TrendingUp,
      title: 'Business Studies',
      description: 'Comprehensive business education covering accounting, economics, and management principles. Perfect for future entrepreneurs and business leaders.',
      subjects: ['Accounting', 'Economics', 'Business Management', 'Mathematics', 'English'],
      color: 'bg-purple-500',
      duration: '3 Years'
    },
    {
      icon: ChefHat,
      title: 'Home Economics',
      description: 'Practical life skills education focusing on nutrition, textiles, child development, and home management.',
      subjects: ['Food & Nutrition', 'Clothing & Textiles', 'Management in Living', 'General Knowledge in Art'],
      color: 'bg-pink-500',
      duration: '3 Years'
    },
    {
      icon: Palette,
      title: 'Visual Arts',
      description: 'Creative arts program developing artistic skills in drawing, painting, sculpture, and graphic design.',
      subjects: ['Drawing & Painting', 'Sculpture', 'Graphic Design', 'Art History', 'General Knowledge in Art'],
      color: 'bg-orange-500',
      duration: '3 Years'
    },
    {
      icon: BookOpen,
      title: 'Agricultural Science',
      description: 'Modern agricultural education covering crop production, animal husbandry, and sustainable farming practices.',
      subjects: ['Crop Production', 'Animal Husbandry', 'Agricultural Economics', 'Soil Science'],
      color: 'bg-green-600',
      duration: '3 Years'
    },
    {
      icon: Hammer,
      title: 'Technical Courses',
      description: 'Hands-on technical education in various trades including carpentry, masonry, electrical work, and auto mechanics.',
      subjects: ['Technical Drawing', 'Woodwork', 'Metalwork', 'Electronics', 'Building Construction'],
      color: 'bg-gray-600',
      duration: '3 Years'
    },
    {
      icon: Calculator,
      title: 'Information Technology',
      description: 'Modern IT education covering programming, web development, database management, and digital literacy.',
      subjects: ['Programming', 'Web Development', 'Database Management', 'Computer Networks', 'Digital Design'],
      color: 'bg-indigo-500',
      duration: '3 Years'
    }
  ];

  const facilities = [
    {
      name: 'Science Laboratories',
      description: 'State-of-the-art labs for Physics, Chemistry, and Biology with modern equipment'
    },
    {
      name: 'Computer Laboratory',
      description: 'Modern computers with high-speed internet for IT and research purposes'
    },
    {
      name: 'Library & Resource Center',
      description: 'Extensive collection of books, journals, and digital resources'
    },
    {
      name: 'Art & Design Studio',
      description: 'Creative spaces equipped with professional art supplies and tools'
    },
    {
      name: 'Home Economics Labs',
      description: 'Fully equipped kitchen and textile labs for practical learning'
    },
    {
      name: 'Workshop Facilities',
      description: 'Technical workshops with modern tools for hands-on training'
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
            <h1 className="text-5xl font-bold mb-4">Academic Programs</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Discover our comprehensive range of academic programs designed to prepare students for success in their chosen careers
            </p>
          </motion.div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Academic Programs
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Choose from our diverse range of programs, each designed to provide excellent preparation for higher education and career success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className={`inline-flex items-center justify-center w-12 h-12 ${program.color} text-white rounded-lg mr-4 group-hover:scale-110 transition-transform duration-300`}>
                      <program.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{program.title}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{program.duration}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{program.description}</p>
                  
                  <div className="border-t pt-4">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Core Subjects:</h4>
                    <div className="flex flex-wrap gap-2">
                      {program.subjects.map((subject, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium"
                        >
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Academic Facilities
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Modern facilities and resources to support excellence in learning and teaching
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{facility.name}</h3>
                <p className="text-gray-600 dark:text-gray-300">{facility.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Assessment & Graduation */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Assessment & Graduation
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  Our assessment system is designed to evaluate not just academic knowledge, but also 
                  practical skills, critical thinking, and character development. We use a combination 
                  of continuous assessment and standardized examinations.
                </p>
                <p>
                  Students are prepared for the West African Senior School Certificate Examination (WASSCE) 
                  and other relevant certification exams. Our comprehensive support system ensures high 
                  success rates and university placement.
                </p>
                
                <div className="mt-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Key Features:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Continuous assessment throughout the academic year</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Mock examinations to prepare students for WASSCE</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>University and career guidance counseling</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Portfolio-based assessment for practical subjects</span>
                    </li>
                  </ul>
                </div>
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
                src="https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Students in examination"
                className="rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Academic Calendar */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Academic Calendar 2024/2025
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Important dates and events for the current academic year
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { event: 'First Term Begins', date: 'September 9, 2024', type: 'Term' },
              { event: 'Mid-Term Break', date: 'October 14-18, 2024', type: 'Break' },
              { event: 'First Term Ends', date: 'December 13, 2024', type: 'Term' },
              { event: 'Second Term Begins', date: 'January 8, 2025', type: 'Term' },
              { event: 'WASSCE Preparation', date: 'March 2025', type: 'Exam' },
              { event: 'Graduation Ceremony', date: 'July 2025', type: 'Event' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg"
              >
                <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-3 ${
                  item.type === 'Term' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400' :
                  item.type === 'Break' ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400' :
                  item.type === 'Exam' ? 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400' :
                  'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400'
                }`}>
                  {item.type}
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{item.event}</h3>
                <p className="text-gray-600 dark:text-gray-300">{item.date}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Academics;