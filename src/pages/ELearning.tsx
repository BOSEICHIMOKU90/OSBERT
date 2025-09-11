import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { 
  BookOpen, 
  Video, 
  FileText, 
  Users, 
  Clock, 
  Award, 
  Upload, 
  Download,
  User,
  GraduationCap,
  ChevronRight,
  Play,
  Calendar,
  CheckCircle
} from 'lucide-react';

interface LoginForm {
  email: string;
  password: string;
  role: 'student' | 'teacher';
}

const ELearning: React.FC = () => {
  const { user, login, logout, isAuthenticated } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<LoginForm>();

  const onLogin = async (data: LoginForm) => {
    setIsLoading(true);
    try {
      const success = await login(data.email, data.password, data.role);
      if (success) {
        toast.success(`Welcome back, ${data.role === 'student' ? 'Student' : 'Teacher'}!`);
      } else {
        toast.error('Invalid credentials. Please try again.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    logout();
    toast.success('Logged out successfully!');
  };

  // Mock data for demonstration
  const studentDashboardData = {
    courses: [
      { id: 1, name: 'Mathematics', progress: 75, nextClass: '2024-01-15 10:00 AM', teacher: 'Mr. Kwame Asante' },
      { id: 2, name: 'Physics', progress: 60, nextClass: '2024-01-15 02:00 PM', teacher: 'Dr. Ama Serwah' },
      { id: 3, name: 'Chemistry', progress: 85, nextClass: '2024-01-16 09:00 AM', teacher: 'Ms. Akosua Mensah' },
      { id: 4, name: 'Biology', progress: 90, nextClass: '2024-01-16 11:00 AM', teacher: 'Prof. Kofi Adjei' }
    ],
    assignments: [
      { id: 1, title: 'Calculus Problem Set 3', subject: 'Mathematics', dueDate: '2024-01-18', status: 'pending' },
      { id: 2, title: 'Physics Lab Report', subject: 'Physics', dueDate: '2024-01-20', status: 'submitted' },
      { id: 3, title: 'Organic Chemistry Quiz', subject: 'Chemistry', dueDate: '2024-01-17', status: 'overdue' }
    ],
    recentNotes: [
      { id: 1, title: 'Quadratic Equations', subject: 'Mathematics', date: '2024-01-10' },
      { id: 2, title: 'Newton\'s Laws of Motion', subject: 'Physics', date: '2024-01-09' },
      { id: 3, title: 'Photosynthesis Process', subject: 'Biology', date: '2024-01-08' }
    ]
  };

  const teacherDashboardData = {
    classes: [
      { id: 1, name: 'Mathematics Form 2A', students: 35, nextClass: '2024-01-15 10:00 AM' },
      { id: 2, name: 'Mathematics Form 3B', students: 28, nextClass: '2024-01-15 02:00 PM' },
      { id: 3, name: 'Advanced Mathematics', students: 22, nextClass: '2024-01-16 09:00 AM' }
    ],
    pendingAssignments: 23,
    totalStudents: 85,
    recentUploads: [
      { id: 1, title: 'Calculus Notes Chapter 5', date: '2024-01-10', type: 'notes' },
      { id: 2, title: 'Mid-term Exam Questions', date: '2024-01-09', type: 'assignment' }
    ]
  };

  if (!isAuthenticated) {
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
              <h1 className="text-5xl font-bold mb-4">E-Learning Platform</h1>
              <p className="text-xl max-w-3xl mx-auto">
                Access your courses, assignments, and resources anytime, anywhere with our comprehensive learning management system
              </p>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
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
                Learning Made Simple
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Our e-learning platform provides everything students and teachers need for effective online education
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: BookOpen,
                  title: 'Digital Library',
                  description: 'Access thousands of educational resources, textbooks, and reference materials'
                },
                {
                  icon: Video,
                  title: 'Video Lessons',
                  description: 'Interactive video content and recorded lectures for better understanding'
                },
                {
                  icon: FileText,
                  title: 'Assignments & Quizzes',
                  description: 'Submit assignments and take quizzes online with instant feedback'
                },
                {
                  icon: Users,
                  title: 'Collaboration Tools',
                  description: 'Work together with classmates on group projects and discussions'
                },
                {
                  icon: Clock,
                  title: '24/7 Access',
                  description: 'Learn at your own pace with round-the-clock access to materials'
                },
                {
                  icon: Award,
                  title: 'Progress Tracking',
                  description: 'Monitor your learning progress and achievements in real-time'
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900/20 text-blue-600 rounded-lg mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Login Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-xl p-8"
            >
              <div className="text-center mb-8">
                <GraduationCap className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Login to E-Learning</h2>
                <p className="text-gray-600 dark:text-gray-300">Access your courses and assignments</p>
              </div>

              <form onSubmit={handleSubmit(onLogin)} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    {...register('email', { required: 'Email is required' })}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
                    placeholder="Enter your email"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    {...register('password', { required: 'Password is required' })}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
                    placeholder="Enter your password"
                  />
                  {errors.password && (
                    <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    I am a:
                  </label>
                  <select
                    {...register('role', { required: 'Please select your role' })}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
                  >
                    <option value="">Select Role</option>
                    <option value="student">Student</option>
                    <option value="teacher">Teacher</option>
                  </select>
                  {errors.role && (
                    <p className="mt-1 text-sm text-red-600">{errors.role.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 ${
                    isLoading ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Logging in...
                    </span>
                  ) : (
                    'Login'
                  )}
                </button>
              </form>

              <div className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
                <p>Demo credentials:</p>
                <p>Email: student@osbertshs.edu.gh | Password: student123</p>
                <p>Email: teacher@osbertshs.edu.gh | Password: teacher123</p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    );
  }

  // Student Dashboard
  if (user?.role === 'student') {
    return (
      <div className="pt-24 min-h-screen">
        {/* Header */}
        <section className="py-12 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-4xl font-bold mb-2">Welcome back, {user.name}!</h1>
                <p className="text-blue-100">Continue your learning journey</p>
              </div>
              <button
                onClick={handleLogout}
                className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors"
              >
                Logout
              </button>
            </div>
          </div>
        </section>

        {/* Dashboard Content */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
                <div className="flex items-center">
                  <BookOpen className="h-8 w-8 text-blue-600 mr-3" />
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Enrolled Courses</p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">4</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
                <div className="flex items-center">
                  <FileText className="h-8 w-8 text-green-600 mr-3" />
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Assignments</p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">3</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
                <div className="flex items-center">
                  <Award className="h-8 w-8 text-yellow-600 mr-3" />
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Average Grade</p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">A-</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
                <div className="flex items-center">
                  <Clock className="h-8 w-8 text-purple-600 mr-3" />
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Study Hours</p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">24</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* My Courses */}
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">My Courses</h2>
                <div className="space-y-4">
                  {studentDashboardData.courses.map((course) => (
                    <div key={course.id} className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white">{course.name}</h3>
                          <p className="text-gray-600 dark:text-gray-300">Instructor: {course.teacher}</p>
                        </div>
                        <span className="text-2xl font-bold text-blue-600">{course.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-4">
                        <div 
                          className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                          style={{ width: `${course.progress}%` }}
                        ></div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center text-gray-600 dark:text-gray-300">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span className="text-sm">Next: {course.nextClass}</span>
                        </div>
                        <button className="flex items-center text-blue-600 hover:text-blue-700 font-semibold">
                          View Course <ChevronRight className="h-4 w-4 ml-1" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                {/* Upcoming Assignments */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Upcoming Assignments</h3>
                  <div className="space-y-3">
                    {studentDashboardData.assignments.map((assignment) => (
                      <div key={assignment.id} className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow">
                        <h4 className="font-semibold text-gray-900 dark:text-white">{assignment.title}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">{assignment.subject}</p>
                        <div className="flex justify-between items-center mt-2">
                          <span className="text-sm text-gray-500">Due: {assignment.dueDate}</span>
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            assignment.status === 'submitted' ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400' :
                            assignment.status === 'overdue' ? 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400' :
                            'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400'
                          }`}>
                            {assignment.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recent Notes */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Recent Notes</h3>
                  <div className="space-y-3">
                    {studentDashboardData.recentNotes.map((note) => (
                      <div key={note.id} className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow hover:shadow-md transition-shadow cursor-pointer">
                        <h4 className="font-semibold text-gray-900 dark:text-white">{note.title}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">{note.subject}</p>
                        <p className="text-xs text-gray-500 mt-1">{note.date}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // Teacher Dashboard
  return (
    <div className="pt-24 min-h-screen">
      {/* Header */}
      <section className="py-12 bg-gradient-to-r from-green-600 to-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-4xl font-bold mb-2">Welcome, {user.name}!</h1>
              <p className="text-green-100">Manage your classes and students</p>
            </div>
            <button
              onClick={handleLogout}
              className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      </section>

      {/* Teacher Dashboard Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
              <div className="flex items-center">
                <Users className="h-8 w-8 text-blue-600 mr-3" />
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Total Students</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">{teacherDashboardData.totalStudents}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
              <div className="flex items-center">
                <BookOpen className="h-8 w-8 text-green-600 mr-3" />
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Active Classes</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">{teacherDashboardData.classes.length}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
              <div className="flex items-center">
                <FileText className="h-8 w-8 text-orange-600 mr-3" />
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Pending Reviews</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">{teacherDashboardData.pendingAssignments}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
              <div className="flex items-center">
                <Upload className="h-8 w-8 text-purple-600 mr-3" />
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Materials Uploaded</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">12</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* My Classes */}
            <div className="lg:col-span-2">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">My Classes</h2>
                <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors">
                  Create New Class
                </button>
              </div>
              
              <div className="space-y-4">
                {teacherDashboardData.classes.map((classItem) => (
                  <div key={classItem.id} className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{classItem.name}</h3>
                        <p className="text-gray-600 dark:text-gray-300">{classItem.students} students enrolled</p>
                      </div>
                      <div className="flex space-x-2">
                        <button className="bg-blue-100 dark:bg-blue-900/20 text-blue-600 px-3 py-1 rounded-full text-sm hover:bg-blue-200 dark:hover:bg-blue-900/40 transition-colors">
                          View
                        </button>
                        <button className="bg-green-100 dark:bg-green-900/20 text-green-600 px-3 py-1 rounded-full text-sm hover:bg-green-200 dark:hover:bg-green-900/40 transition-colors">
                          Upload
                        </button>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center text-gray-600 dark:text-gray-300">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span className="text-sm">Next: {classItem.nextClass}</span>
                      </div>
                      <button className="flex items-center text-green-600 hover:text-green-700 font-semibold">
                        Manage Class <ChevronRight className="h-4 w-4 ml-1" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions & Recent Activity */}
            <div className="space-y-8">
              {/* Quick Actions */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg transition-colors flex items-center justify-center">
                    <Upload className="h-4 w-4 mr-2" />
                    Upload New Material
                  </button>
                  <button className="w-full bg-green-600 hover:bg-green-700 text-white p-3 rounded-lg transition-colors flex items-center justify-center">
                    <FileText className="h-4 w-4 mr-2" />
                    Create Assignment
                  </button>
                  <button className="w-full bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-lg transition-colors flex items-center justify-center">
                    <Play className="h-4 w-4 mr-2" />
                    Record Lesson
                  </button>
                </div>
              </div>

              {/* Recent Uploads */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Recent Uploads</h3>
                <div className="space-y-3">
                  {teacherDashboardData.recentUploads.map((upload) => (
                    <div key={upload.id} className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow">
                      <h4 className="font-semibold text-gray-900 dark:text-white">{upload.title}</h4>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-sm text-gray-500">{upload.date}</span>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          upload.type === 'notes' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400' :
                          'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400'
                        }`}>
                          {upload.type}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ELearning;