import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Play, Image as ImageIcon, Video } from 'lucide-react';

interface MediaItem {
  id: number;
  type: 'image' | 'video';
  src: string;
  thumbnail?: string;
  title: string;
  description: string;
  category: string;
  date: string;
}

const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [lightboxItem, setLightboxItem] = useState<MediaItem | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const categories = ['All', 'Campus Life', 'Academic Events', 'Sports', 'Graduation', 'Cultural Events', 'Facilities'];

  const galleryItems: MediaItem[] = [
    {
      id: 1,
      type: 'image',
      src: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Students in Science Laboratory',
      description: 'Students conducting experiments in our modern science laboratory',
      category: 'Academic Events',
      date: '2024-01-15'
    },
    {
      id: 2,
      type: 'image',
      src: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Graduation Ceremony 2023',
      description: 'Celebrating our graduates and their achievements',
      category: 'Graduation',
      date: '2023-12-10'
    },
    {
      id: 3,
      type: 'image',
      src: 'https://images.pexels.com/photos/5428833/pexels-photo-5428833.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Computer Laboratory',
      description: 'Modern computer lab with state-of-the-art equipment',
      category: 'Facilities',
      date: '2024-01-08'
    },
    {
      id: 4,
      type: 'image',
      src: 'https://images.pexels.com/photos/5212664/pexels-photo-5212664.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Teacher-Student Interaction',
      description: 'One-on-one guidance and mentorship',
      category: 'Campus Life',
      date: '2024-01-12'
    },
    {
      id: 5,
      type: 'image',
      src: 'https://images.pexels.com/photos/7713152/pexels-photo-7713152.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'School Assembly',
      description: 'Weekly assembly with the entire school community',
      category: 'Campus Life',
      date: '2024-01-05'
    },
    {
      id: 6,
      type: 'image',
      src: 'https://images.pexels.com/photos/3771074/pexels-photo-3771074.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Sports Competition',
      description: 'Inter-house sports competition',
      category: 'Sports',
      date: '2023-11-20'
    },
    {
      id: 7,
      type: 'image',
      src: 'https://images.pexels.com/photos/5212665/pexels-photo-5212665.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Library Study Session',
      description: 'Students studying in our well-equipped library',
      category: 'Campus Life',
      date: '2024-01-03'
    },
    {
      id: 8,
      type: 'image',
      src: 'https://images.pexels.com/photos/159490/yale-university-landscape-universities-schools-159490.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'School Campus Overview',
      description: 'Beautiful aerial view of our campus',
      category: 'Facilities',
      date: '2024-01-01'
    },
    {
      id: 9,
      type: 'image',
      src: 'https://images.pexels.com/photos/1516440/pexels-photo-1516440.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Cultural Performance',
      description: 'Students performing traditional dance',
      category: 'Cultural Events',
      date: '2023-12-15'
    },
    {
      id: 10,
      type: 'image',
      src: 'https://images.pexels.com/photos/5212320/pexels-photo-5212320.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Art Exhibition',
      description: 'Display of student artwork and creativity',
      category: 'Cultural Events',
      date: '2023-12-08'
    },
    {
      id: 11,
      type: 'image',
      src: 'https://images.pexels.com/photos/5212318/pexels-photo-5212318.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Mathematics Class',
      description: 'Interactive mathematics lesson in progress',
      category: 'Academic Events',
      date: '2024-01-10'
    },
    {
      id: 12,
      type: 'image',
      src: 'https://images.pexels.com/photos/289737/pexels-photo-289737.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'School Building Exterior',
      description: 'Main academic building of Osbert SHS',
      category: 'Facilities',
      date: '2024-01-02'
    }
  ];

  const filteredItems = selectedCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  const openLightbox = (item: MediaItem) => {
    const index = filteredItems.findIndex(i => i.id === item.id);
    setCurrentIndex(index);
    setLightboxItem(item);
  };

  const closeLightbox = () => {
    setLightboxItem(null);
  };

  const navigateLightbox = (direction: 'prev' | 'next') => {
    const newIndex = direction === 'next' 
      ? (currentIndex + 1) % filteredItems.length
      : (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    
    setCurrentIndex(newIndex);
    setLightboxItem(filteredItems[newIndex]);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') navigateLightbox('prev');
    if (e.key === 'ArrowRight') navigateLightbox('next');
  };

  return (
    <div className="pt-24 min-h-screen" onKeyDown={handleKeyDown} tabIndex={0}>
      {/* Header Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-purple-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold mb-4">Gallery</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Explore the vibrant life at Osbert Senior High School through our photo and video gallery
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-purple-600 text-white shadow-lg transform scale-105'
                    : 'bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-gray-700 shadow-md'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              {selectedCategory === 'All' ? 'All Photos & Videos' : selectedCategory}
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              {filteredItems.length} item{filteredItems.length !== 1 ? 's' : ''} found
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <AnimatePresence>
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  onClick={() => openLightbox(item)}
                >
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={item.type === 'video' ? item.thumbnail || item.src : item.src}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      {item.type === 'video' ? (
                        <Play className="h-12 w-12 text-white" />
                      ) : (
                        <ImageIcon className="h-12 w-12 text-white" />
                      )}
                    </div>
                    <div className="absolute top-4 right-4">
                      {item.type === 'video' ? (
                        <Video className="h-6 w-6 text-white drop-shadow-lg" />
                      ) : (
                        <ImageIcon className="h-6 w-6 text-white drop-shadow-lg" />
                      )}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-gray-900 dark:text-white mb-1 truncate">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2 mb-2">
                      {item.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-xs bg-purple-100 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 px-2 py-1 rounded-full">
                        {item.category}
                      </span>
                      <span className="text-xs text-gray-500">
                        {new Date(item.date).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <ImageIcon className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-300 mb-2">
                No items found
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Try selecting a different category to see more content.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <div className="relative max-w-4xl max-h-full w-full h-full flex items-center justify-center">
              {/* Navigation Buttons */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigateLightbox('prev');
                }}
                className="absolute left-4 z-10 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigateLightbox('next');
                }}
                className="absolute right-4 z-10 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors"
              >
                <X className="h-6 w-6" />
              </button>

              {/* Media Content */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="relative max-w-full max-h-full"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={lightboxItem.src}
                  alt={lightboxItem.title}
                  className="max-w-full max-h-[80vh] object-contain rounded-lg"
                />
                
                {/* Image Info */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                  <h3 className="text-xl font-bold text-white mb-2">{lightboxItem.title}</h3>
                  <p className="text-gray-200 mb-2">{lightboxItem.description}</p>
                  <div className="flex justify-between items-center text-sm">
                    <span className="bg-purple-600 text-white px-2 py-1 rounded-full">
                      {lightboxItem.category}
                    </span>
                    <span className="text-gray-300">
                      {new Date(lightboxItem.date).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm">
                {currentIndex + 1} of {filteredItems.length}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;