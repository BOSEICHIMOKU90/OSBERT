import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, Tag, ChevronRight, Search } from 'lucide-react';

interface NewsItem {
  id: number;
  title: string;
  content: string;
  excerpt: string;
  category: 'news' | 'announcement' | 'event';
  date: string;
  time?: string;
  image: string;
  featured: boolean;
  author: string;
}

const NewsEvents: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);

  const categories = [
    { id: 'all', name: 'All', count: 0 },
    { id: 'news', name: 'News', count: 0 },
    { id: 'announcement', name: 'Announcements', count: 0 },
    { id: 'event', name: 'Events', count: 0 }
  ];

  const newsItems: NewsItem[] = [
    {
      id: 1,
      title: 'Osbert SHS Wins Regional Science Competition',
      excerpt: 'Our brilliant science students brought home the trophy from the Greater Accra Regional Science Competition...',
      content: `We are thrilled to announce that Osbert Senior High School has emerged victorious in the Greater Accra Regional Science Competition held at the Accra International Conference Centre on January 10, 2024.

Our team, consisting of five exceptional students from our General Science programme, competed against 25 other schools from across the Greater Accra Region. The competition featured challenging rounds covering Physics, Chemistry, Biology, and Mathematics.

Team Members:
- Kwame Asante (Form 3) - Team Captain
- Ama Serwah (Form 3) - Physics Specialist  
- John Mensah (Form 2) - Chemistry Expert
- Grace Adjei (Form 2) - Biology Specialist
- Michael Osei (Form 2) - Mathematics Champion

The students demonstrated exceptional knowledge and teamwork throughout the competition. They particularly excelled in the final practical round, where they had to design and execute a scientific experiment within 45 minutes.

"I'm incredibly proud of these students," said Mr. Samuel Koffi, the Science Department Head and team coach. "Their dedication to learning and their collaborative spirit truly embodies the values we instill at Osbert SHS."

This victory qualifies our team for the National Science Competition scheduled for March 2024 in Kumasi. We wish them continued success as they represent not just our school, but the entire Greater Accra Region.`,
      category: 'news',
      date: '2024-01-12',
      image: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: true,
      author: 'School Communications Team'
    },
    {
      id: 2,
      title: 'New Computer Laboratory Officially Opened',
      excerpt: 'State-of-the-art computer lab with 50 modern computers and high-speed internet connectivity...',
      content: `Osbert Senior High School proudly unveils its brand new computer laboratory, equipped with 50 state-of-the-art computers and high-speed fiber internet connectivity. The facility was officially opened on January 8, 2024, by the Honourable Minister of Education.

The new laboratory features:
- 50 modern desktop computers with latest software
- High-speed fiber internet connection (100 Mbps)
- Interactive smart board for demonstrations
- Air conditioning for optimal learning environment
- Backup power supply to ensure uninterrupted classes

This investment of GHS 250,000 was made possible through partnerships with the Ghana Education Trust Fund and generous donations from our alumni network. The laboratory will serve all students but will particularly benefit our Information Technology programme students.

"This facility positions our students to compete globally in the digital economy," stated Mrs. Sarah Mensah, Principal of Osbert SHS. "We are committed to ensuring our students are well-prepared for the technological demands of the 21st century."

The computer laboratory will be operational from Monday, January 15, 2024, with dedicated time slots allocated for each academic programme. Students will have access to programming software, design applications, and online learning platforms.

Training sessions for teachers will commence next week to ensure they can maximize the potential of this new facility in their teaching methods.`,
      category: 'news',
      date: '2024-01-08',
      image: 'https://images.pexels.com/photos/5428833/pexels-photo-5428833.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: true,
      author: 'Infrastructure Department'
    },
    {
      id: 3,
      title: 'Mid-Term Break: February 12-16, 2024',
      excerpt: 'All students are reminded that school will be closed for mid-term break from February 12-16, 2024...',
      content: `All students, parents, and guardians are hereby notified that Osbert Senior High School will be closed for mid-term break from Monday, February 12, 2024, to Friday, February 16, 2024.

Important Information:
- Last day of classes: Friday, February 9, 2024
- School resumes: Monday, February 19, 2024
- All students must report to school by 7:00 AM on February 19
- Boarding students should return by 6:00 PM on Sunday, February 18

During the break:
- The school premises will be closed to students
- Essential maintenance work will be conducted
- Emergency contact: 0553306538

Students are encouraged to use this time to rest, review their studies, and spend quality time with family. Form 3 students are particularly advised to use this period for intensive revision as they prepare for their final examinations.

Parents are reminded to ensure their children have all necessary textbooks and materials ready for the continuation of the academic term.

The school administration wishes all our students and families a restful and productive mid-term break.`,
      category: 'announcement',
      date: '2024-01-05',
      image: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false,
      author: 'Academic Affairs Office'
    },
    {
      id: 4,
      title: 'Annual Sports Day - March 15, 2024',
      excerpt: 'Join us for our annual inter-house sports competition featuring athletics, football, netball, and more...',
      content: `Mark your calendars! Osbert Senior High School will host its Annual Sports Day on Friday, March 15, 2024, starting at 8:00 AM at the school's main sports complex.

Event Schedule:
- 8:00 AM - Opening Ceremony and March Past
- 8:30 AM - Track and Field Events Begin
- 10:00 AM - Ball Games (Football, Netball, Basketball)
- 12:00 PM - Lunch Break
- 1:00 PM - Novelty Events and Relay Races
- 3:00 PM - Closing Ceremony and Prize Presentation

Participating Houses:
- Red House (Adinkra)
- Blue House (Sankofa)
- Green House (Gye Nyame)
- Yellow House (Dwennimmen)

All students are expected to participate in at least one event. Registration forms are available at the Physical Education Department and must be submitted by March 1, 2024.

Parents, guardians, and members of the community are cordially invited to attend and cheer on our athletes. Light refreshments will be available for purchase.

Special guests include:
- Municipal Chief Executive
- Former Olympic athlete Janet Amponsah
- Representatives from local sports clubs

Prizes will be awarded for individual events, house competitions, and overall champions. The winning house will receive the prestigious Sports Day Trophy.

For more information, contact the Physical Education Department or visit the school's main office.`,
      category: 'event',
      date: '2024-01-20',
      time: '8:00 AM',
      image: 'https://images.pexels.com/photos/3771074/pexels-photo-3771074.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: true,
      author: 'Physical Education Department'
    },
    {
      id: 5,
      title: 'Parent-Teacher Conference Scheduled',
      excerpt: 'Annual parent-teacher conference to discuss student progress and academic performance...',
      content: `Osbert Senior High School will host its Annual Parent-Teacher Conference on Saturday, February 24, 2024, from 9:00 AM to 4:00 PM in the school's main hall and classrooms.

Conference Schedule:
- 9:00 AM - General Assembly (All Parents)
- 10:00 AM - Individual Teacher Consultations Begin
- 12:00 PM - Lunch Break
- 1:00 PM - Consultations Resume
- 4:00 PM - Conference Ends

Purpose:
This conference provides an opportunity for parents and teachers to discuss:
- Student academic progress and performance
- Areas for improvement
- Career guidance and subject selection
- Behavioral and social development
- Upcoming academic activities and requirements

How to Prepare:
- Bring your child's report card and any school correspondence
- Prepare questions about your child's progress
- Review your child's academic performance at home
- Consider your child's future educational and career goals

Booking Appointments:
Parents can book specific time slots with teachers by:
- Calling the school office: 0553306538 / 0266077995
- Visiting the school between 8:00 AM and 4:00 PM
- Emailing: info@osbertshs.edu.gh

Special Presentations:
- 11:00 AM: "Preparing for WASSCE" (Form 3 Parents)
- 2:00 PM: "Choosing the Right Career Path" (All Parents)
- 3:00 PM: "Supporting Your Child's Learning at Home"

Light refreshments will be provided throughout the day. We encourage all parents and guardians to attend this important event.`,
      category: 'event',
      date: '2024-02-24',
      time: '9:00 AM',
      image: 'https://images.pexels.com/photos/5212664/pexels-photo-5212664.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false,
      author: 'Parent Relations Office'
    },
    {
      id: 6,
      title: 'New Admission Requirements for 2024/2025',
      excerpt: 'Updated admission criteria and requirements for prospective students applying for the 2024/2025 academic year...',
      content: `The Management of Osbert Senior High School announces updated admission requirements for the 2024/2025 academic year. These changes aim to ensure we admit students who will benefit most from our academic programmes while maintaining our standards of excellence.

New Requirements:

Academic Requirements:
- Minimum aggregate score of 15 in BECE
- Must have credits (1-6) in English Language and Mathematics
- Specific subject requirements vary by programme:
  * General Science: Credits in Science and Mathematics
  * Business: Credits in Mathematics and Social Studies
  * General Arts: Credit in English Language and Social Studies
  * Technical: Credits in Mathematics and Science or Technical subjects

Documents Required:
1. BECE Certificate and Statement of Results
2. Birth Certificate or Valid National ID
3. Two passport photographs (recent)
4. Medical report from certified health facility
5. Letter of good conduct from previous school
6. Proof of residence
7. Guardian/Parent identification

Application Process:
- Online application portal opens: March 1, 2024
- Application deadline: June 30, 2024
- Entrance interview (if required): July 2024
- Final admission list publication: August 15, 2024
- Registration for admitted students: August 20-30, 2024

Application Fee: GHS 50 (non-refundable)

Special Provisions:
- 5% of slots reserved for students with special needs
- Merit scholarships available for exceptional students
- Payment plans available for school fees

Contact Information:
- Admission Office: 0553306538
- Email: admissions@osbertshs.edu.gh
- Office hours: Monday-Friday, 8:00 AM - 5:00 PM

We encourage all prospective students and their families to review these requirements carefully and begin the application process early.`,
      category: 'announcement',
      date: '2024-01-15',
      image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false,
      author: 'Admissions Office'
    }
  ];

  // Update category counts
  categories.forEach(cat => {
    if (cat.id === 'all') {
      cat.count = newsItems.length;
    } else {
      cat.count = newsItems.filter(item => item.category === cat.id).length;
    }
  });

  const filteredNews = newsItems.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredNews = newsItems.filter(item => item.featured);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'news': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400';
      case 'announcement': return 'bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400';
      case 'event': return 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="pt-24 min-h-screen">
      {/* Header Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-indigo-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold mb-4">News & Events</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Stay updated with the latest news, announcements, and upcoming events at Osbert Senior High School
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search news and events..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-900 dark:text-white"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-300 flex items-center space-x-2 ${
                    selectedCategory === category.id
                      ? 'bg-indigo-600 text-white shadow-lg transform scale-105'
                      : 'bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-gray-700 shadow-md'
                  }`}
                >
                  <span>{category.name}</span>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    selectedCategory === category.id
                      ? 'bg-white/20'
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                  }`}>
                    {category.count}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured News */}
      {selectedCategory === 'all' && featuredNews.length > 0 && (
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Featured News</h2>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredNews.slice(0, 2).map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300"
                  onClick={() => setSelectedNews(item)}
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(item.category)}`}>
                        {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                      {item.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-gray-500 text-sm">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{formatDate(item.date)}</span>
                      </div>
                      <div className="flex items-center text-indigo-600 dark:text-indigo-400 font-semibold">
                        <span>Read More</span>
                        <ChevronRight className="h-4 w-4 ml-1" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All News Grid */}
      <section className="py-12 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              {selectedCategory === 'all' ? 'All News & Events' : 
               selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1) + 's'}
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              {filteredNews.length} item{filteredNews.length !== 1 ? 's' : ''} found
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredNews.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 50 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  onClick={() => setSelectedNews(item)}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(item.category)}`}>
                        {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                      {item.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-gray-500 text-sm">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{formatDate(item.date)}</span>
                        {item.time && (
                          <>
                            <Clock className="h-4 w-4 ml-2 mr-1" />
                            <span>{item.time}</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {filteredNews.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">📰</div>
              <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-300 mb-2">
                No items found
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Try adjusting your search terms or selecting a different category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* News Detail Modal */}
      <AnimatePresence>
        {selectedNews && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedNews(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-xl max-w-4xl max-h-[90vh] overflow-y-auto w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selectedNews.image}
                  alt={selectedNews.title}
                  className="w-full h-64 object-cover"
                />
                <button
                  onClick={() => setSelectedNews(null)}
                  className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
                <div className="absolute bottom-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(selectedNews.category)}`}>
                    {selectedNews.category.charAt(0).toUpperCase() + selectedNews.category.slice(1)}
                  </span>
                </div>
              </div>
              
              <div className="p-8">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  {selectedNews.title}
                </h1>
                
                <div className="flex items-center gap-6 text-gray-500 text-sm mb-6">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{formatDate(selectedNews.date)}</span>
                  </div>
                  {selectedNews.time && (
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{selectedNews.time}</span>
                    </div>
                  )}
                  <div className="flex items-center">
                    <Tag className="h-4 w-4 mr-1" />
                    <span>{selectedNews.author}</span>
                  </div>
                </div>
                
                <div className="prose dark:prose-invert max-w-none">
                  {selectedNews.content.split('\n').map((paragraph, index) => (
                    <p key={index} className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NewsEvents;