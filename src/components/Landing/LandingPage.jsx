import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './LandingPage.module.css';
import { getApiWithAuth } from '../../constants/GetMethod'; 
import { LANDING_STATS_URL, LANDING_COURSES_URL, LANDING_FAQ_URL } from '../../constants/apiConstants';
import LandingPageImage from '../../assets/landing.png';

const LandingPage = () => {
  const [activeTab, setActiveTab] = useState('All Courses');
  const [stats, setStats] = useState({
    courseCount: null, 
    learnerCount: null, 
    doubtsCount: null,
    projectsCount: null
  });
  const [isLoadingStats, setIsLoadingStats] = useState(true);
  const [courses, setCourses] = useState([]);
  const [isLoadingCourses, setIsLoadingCourses] = useState(true);
  const [tabs, setTabs] = useState(['All Courses']);
  const [faqs, setFaqs] = useState([]);
  const [isLoadingFaqs, setIsLoadingFaqs] = useState(true);

  // Course category icons mapping
  const categoryIcons = {
    'Development': '🌐',
    'Design': '🎨',
    'IT & Software': '📊',
    'Business': '📱',
    'AI': '🤖',
    'Coding': '💻',
    'Default': '📚'
  };

  const comboPacks = [
    {
      title: 'Full Stack Developer Pack',
      courses: ['HTML/CSS', 'JavaScript', 'React.js', 'Node.js', 'MongoDB', 'AWS'],
      duration: '6 months',
      color: 'blue'
    },
    {
      title: 'Creative Designer Pack',
      courses: ['Photoshop', 'Illustrator', 'Figma', 'UI/UX', 'Branding', 'Portfolio'],
      duration: '4 months',
      color: 'blue'
    },
    {
      title: 'Data Scientist Pack',
      courses: ['Python', 'SQL', 'Machine Learning', 'Tableau', 'Statistics', 'AI'],
      duration: '8 months',
      color: 'blue'
    },
    {
      title: 'Business Growth Pack',
      courses: ['Marketing', 'Analytics', 'SEO', 'Social Media', 'Strategy', 'Leadership'],
      duration: '5 months',
      color: 'blue'
    }
  ];

  const features = [
    { icon: '💰', title: '100% Refund Guarantee', desc: 'Get full refund if not satisfied' },
    { icon: '🎯', title: 'Personalized Mentorship', desc: '1-on-1 guidance from experts' },
    { icon: '💼', title: 'Internship Opportunities', desc: 'Guaranteed placement assistance' },
    { icon: '🏆', title: 'Industry Certificates', desc: 'Recognized by top companies' }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Full Stack Developer at Google',
      content: 'CodeGram transformed my career completely. The mentorship program and hands-on projects gave me the confidence to land my dream job.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'UX Designer at Apple',
      content: 'The design courses here are incredibly comprehensive. I went from zero to landing a job at Apple in just 6 months!',
      rating: 5
    },
    {
      name: 'Priya Sharma',
      role: 'Data Scientist at Microsoft',
      content: 'Amazing learning experience with real-world projects. The career support team helped me get multiple job offers.',
      rating: 5
    }
  ];

  // Function to fetch stats from API
  const fetchStats = async () => {
    try {
      setIsLoadingStats(true);
      const response = await getApiWithAuth(LANDING_STATS_URL);
      
      if (response.data && response.data.status === 'success') {
        const apiStats = response.data.payload;
        setStats({
          courseCount: apiStats.courseCount || null,
          learnerCount: apiStats.learnerCount || null,
          doubtsCount: apiStats.doubtsCount || null,
          projectsCount: apiStats.projectsCount || null
        });
      }
    } catch (error) {
      console.error('Error fetching stats:', error);
      // Keep stats as null on error - they will be handled in the render
    } finally {
      setIsLoadingStats(false);
    }
  };

  // Function to fetch courses from API
// Updated function to fetch courses from API
const fetchCourses = async () => {
  try {
    setIsLoadingCourses(true);
    const response = await getApiWithAuth(LANDING_COURSES_URL);
    
    if (response.data && response.data.status === 'success') {
      const payload = response.data.payload;
      const coursesData = payload.courseList || [];
      const displayCategories = payload.displayCategories || [];
      
      setCourses(coursesData);
      
      // Create tabs using the displayCategories from API response
      setTabs(['All Courses', ...displayCategories]);
    }
  } catch (error) {
    console.error('Error fetching courses:', error);
    setCourses([]);
  } finally {
    setIsLoadingCourses(false);
  }
};

  // Function to fetch FAQs from API
  const fetchFaqs = async () => {
    try {
      setIsLoadingFaqs(true);
      const response = await getApiWithAuth(LANDING_FAQ_URL);
      
      if (response.data && response.data.status === 'success') {
        const faqsData = response.data.payload;
        setFaqs(faqsData);
      }
    } catch (error) {
      console.error('Error fetching FAQs:', error);
      setFaqs([]);
    } finally {
      setIsLoadingFaqs(false);
    }
  };

  // Fetch data on component mount
  useEffect(() => {
    fetchStats();
    fetchCourses();
    fetchFaqs();
  }, []);

  // Helper function to format numbers
  const formatNumber = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(0) + 'K';
    }
    return num.toString();
  };

  // Filter courses based on active tab
  const filteredCourses = courses.filter(course => {
    if (activeTab === 'All Courses') {
      return true;
    }
    return course.displayCategory === activeTab;
  });

  // Get icon for category
  const getCategoryIcon = (category) => {
    return categoryIcons[category] || categoryIcons['Default'];
  };

  return (
    <div className={styles.container}>
      {/* Banner Section */}
      <section className={styles.banner}>
        <div className="container-fluid">
          <div className="text-center py-3">
            <p className={styles.bannerText}>Enjoy 100% Refund On Course Completion</p>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container-fluid">
          <div className="row align-items-center min-vh-100 py-5">
            <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
              <div className={styles.heroText}>
                <h1 className={styles.heroTitle}>
                   Master Your Tech Career
                </h1>
                <h2 className={styles.heroSubtitle}>
                  With Expert Mentorship & <br />
                  <span className={styles.freeTag}>Live Projects</span>
                </h2>
                <p className={styles.heroDescription}>
                  With 100% Refund guarantee on course completion.
                </p>
                <div className={`${styles.rating} d-flex align-items-center gap-2 mb-4`}>
                  <span className={styles.googleIcon}>G</span>
                  <span className={styles.ratingText}>4.9/5</span>
                  <div className={styles.stars}>⭐⭐⭐⭐⭐</div>
                  <span className={styles.ratingSubtext}>Google Ratings</span>
                </div>
                <div className={`${styles.heroButtons} d-flex gap-3`}>
                  <button className={`${styles.exploreCourses} btn btn-lg`}>Explore Courses</button>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className={styles.heroImage}>
                <div className={styles.heroVisual}>
                  <div className={`${styles.featureCard} ${styles.refundCard}`}>
                    <span className={styles.cardIcon}>📊</span>
                    <span>100% Refund</span>
                  </div>
                  <div className={`${styles.featureCard} ${styles.supportCard}`}>
                    <span className={styles.cardIcon}>💡</span>
                    <span>Instant doubt Support</span>
                  </div>
                  <div>
                        <img
                        src={LandingPageImage}
                        className={styles.mainImage}
                        />
                  </div>
                  <div className={`${styles.reviewCard}`}>
                    <span className={styles.googleIcon}>G</span>
                    <span> Google Reviews</span>
                    <div className={styles.reviewRating}>
                      <span>4.9/5</span>
                      <div className={styles.reviewStars}>⭐⭐⭐⭐⭐</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Stats Section - Updated with API data */}
          <div className={`${styles.statSection} row g-4 py-5`}>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className={`${styles.statCard} text-center`}>
                {isLoadingStats || stats.courseCount === null ? (
                  <span className={styles.statNumber}>...</span>
                ) : (
                  <span className={styles.statNumber}>{stats.courseCount}+</span>
                )}
                <span className={styles.statLabel}>Courses</span>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className={`${styles.statCard} text-center`}>
                {isLoadingStats || stats.learnerCount === null ? (
                  <span className={styles.statNumber}>...</span>
                ) : (
                  <span className={styles.statNumber}>{formatNumber(stats.learnerCount)}+</span>
                )}
                <span className={styles.statLabel}>Learners</span>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className={`${styles.statCard} text-center`}>
                {isLoadingStats || stats.doubtsCount === null ? (
                     <span className={styles.statNumber}>...</span>
                ) : (
                  <span className={styles.statNumber}>{formatNumber(stats.doubtsCount)}+</span>
                )}
                <span className={styles.statLabel}>Doubts Solved</span>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className={`${styles.statCard} text-center`}>
                {isLoadingStats || stats.projectsCount === null ? (
                     <span className={styles.statNumber}>...</span>
                ) : (
                  <span className={styles.statNumber}>{formatNumber(stats.projectsCount)}+</span>
                )}
                <span className={styles.statLabel}>Student Projects</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className={`${styles.coursesSection} py-5`}>
        <div className="container">
          <div className={`${styles.sectionHeader} text-center mb-5`}>
            <h2 className={styles.sectionTitle}>Browse our Courses</h2>
            <p className={styles.sectionSubtitle}>
              Explore a wide range of courses where learning is fun, easy, and absolutely effective!
            </p>
          </div>
          
          <div className={`${styles.courseTabs} d-flex flex-wrap justify-content-center gap-3 mb-5`}>
            {tabs.map(tab => (
              <button
                key={tab}
                className={`${styles.courseTab} btn ${activeTab === tab ? styles.activeTab : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          {isLoadingCourses ? (
            <div className="text-center py-5">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading courses...</span>
              </div>
              <p className="mt-3">Loading courses...</p>
            </div>
          ) : filteredCourses.length === 0 ? (
            <div className="text-center py-5">
              <p>No courses found for the selected category.</p>
            </div>
          ) : (
            <div className="row g-4">
              {filteredCourses.map((course, index) => (
                <div key={course.id || index} className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                  <div className={`${styles.courseCard} h-100 text-center`}>
                    <div className={styles.courseIcon}>
                      {getCategoryIcon(course.displayCategory)}
                    </div>
                    <h3 className={styles.courseTitle}>{course.courseName}</h3>
                    <span className={styles.courseCategory}>{course.displayCategory}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Combo Packs */}
      <section className={`${styles.comboSection} py-5`}>
        <div className="container">
          <h2 className={`${styles.comboPackTitle} text-center mb-5`}>Interested in our Combo Packs?</h2>
          <div className="row g-4">
            {comboPacks.map((pack, index) => (
              <div key={index} className="col-xl-3 col-lg-6 col-md-6">
                <div className={`${styles.comboCard} h-100`}>
                  <h3 className={styles.comboTitle}>{pack.title}</h3>
                  <div className={`${styles.comboCourses} d-flex flex-wrap gap-2 mb-3`}>
                    {pack.courses.map((course, idx) => (
                      <span key={idx} className={styles.comboTag}>{course}</span>
                    ))}
                  </div>
                  <p className={styles.comboDuration}>Duration: {pack.duration}</p>
                  <button className={`${styles.knowMore} btn`}>Know More</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Process */}
      <section className={`${styles.processSection} py-5`}>
        <div className="container">
          <h2 className={`${styles.sectionTitle} text-center mb-5`}>Here's how you will learn for Free</h2>
          <div className="row g-4 mb-5">
            <div className="col-lg-4 col-md-6">
              <div className={`${styles.processStep} text-center h-100`}>
                <div className={styles.stepIcon}>📚</div>
                <h3>Enroll</h3>
                <p>Enroll into your favorite courses by paying ₹499</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className={`${styles.processStep} text-center h-100`}>
                <div className={styles.stepIcon}>🎓</div>
                <h3>Complete Course</h3>
                <p>With all the lectures and assignments</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className={`${styles.processStep} text-center h-100`}>
                <div className={styles.stepIcon}>💰</div>
                <h3>100% Refund awarded</h3>
                <p>Get 100% of fees back in your source bank account</p>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className={styles.processInfo}>
                <h3>Duration of course</h3>
                <ul>
                  <li>Get <strong>lifetime course access</strong>, Even after getting <strong>100% refund</strong></li>
                  <li>For <strong>100% refund</strong> complete course within <strong>3 months</strong></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

         {/* Why Choose Us */}
      <section className={`${styles.whyChooseSection} py-5`}>
        <div className="container">
          <h2 className={`${styles.sectionTitle} text-center mb-3`}>Why Choose CodeGram?</h2>
          <p className={`${styles.sectionSubtitle} text-center mb-5`}>
            Get instant mentorship, internship opportunities and a supportive learning community.
          </p>
          
          <div className="row g-4 mb-5">
            {features.map((feature, index) => (
              <div key={index} className="col-lg-3 col-md-6">
                <div className={`${styles.featureCard} text-center h-100`}>
                  <span className={styles.featureIcon}>{feature.icon}</span>
                  <h3>{feature.title}</h3>
                  <p>{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className={`${styles.comparisonTable} text-center`}>
            <h3 className="mb-4">How are we different from others?</h3>
            <div className="table-responsive">
              <table className={`${styles.table} table table-striped`}>
                <thead>
                  <tr>
                    <th>Features</th>
                    <th>CodeGram</th>
                    <th>Recorded Class Platform</th>
                    <th>Live Class Platform</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Affordability</td>
                    <td className={styles.checkmark}>✅</td>
                    <td className={styles.checkmark}>✅</td>
                    <td className={styles.crossmark}>❌</td>
                  </tr>
                  <tr>
                    <td>Learning Flexibility</td>
                    <td className={styles.checkmark}>✅</td>
                    <td className={styles.checkmark}>✅</td>
                    <td className={styles.crossmark}>❌</td>
                  </tr>
                  <tr>
                    <td>Instant Doubt Solving</td>
                    <td className={styles.checkmark}>✅</td>
                    <td className={styles.crossmark}>❌</td>
                    <td className={styles.checkmark}>✅</td>
                  </tr>
                  <tr>
                    <td>Personal Mentorship</td>
                    <td className={styles.checkmark}>✅</td>
                    <td className={styles.crossmark}>❌</td>
                    <td className={styles.crossmark}>❌</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className={`${styles.testimonialsSection} py-5`}>
        <div className="container">
          <h2 className={`${styles.sectionTitle} text-center mb-5`}>Testimonials</h2>
          <div className="row g-4">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div className={`${styles.testimonialCard} h-100`}>
                  <div className={styles.testimonialRating}>
                    {'★'.repeat(testimonial.rating)}
                  </div>
                  <p className={styles.testimonialContent}>"{testimonial.content}"</p>
                  <div className={styles.testimonialAuthor}>
                    <strong>{testimonial.name}</strong>
                    <span>{testimonial.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section - Updated with API integration */}
      <section className={`${styles.faqSection} py-5`}>
        <div className="container">
          <h2 className={`${styles.sectionTitle} text-center mb-5`}>Got Questions? Check Out Our FAQs!</h2>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              {isLoadingFaqs ? (
                <div className="text-center py-5">
                  <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading FAQs...</span>
                  </div>
                  <p className="mt-3">Loading FAQs...</p>
                </div>
              ) : faqs.length === 0 ? (
                <div className="text-center py-5">
                  <p>No FAQs available at the moment.</p>
                </div>
              ) : (
                <div className={styles.faqList}>
                  {faqs.map((faq, index) => (
                    <div key={faq.id || index} className={`${styles.faqItem} mb-3`}>
                      <h3 className={styles.faqQuestion}>{faq.question}</h3>
                      <p className={styles.faqAnswer}>{faq.answer}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`${styles.footer} py-5`}>
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-3 col-md-6">
              <div className={styles.footerSection}>
                <div className={`${styles.logo} mb-3`}>
                  <span className={styles.logoIcon}>🎓</span>
                  <span className={styles.logoText}>CodeGram</span>
                </div>
                <p>Empowering careers through quality education and mentorship.</p>
              </div>
            </div>
            
            <div className="col-lg-3 col-md-6">
              <div className={styles.footerSection}>
                <h4>Courses</h4>
                <ul className="list-unstyled">
                  <li><a href="#" className="text-decoration-none">Web Development</a></li>
                  <li><a href="#" className="text-decoration-none">Data Science</a></li>
                  <li><a href="#" className="text-decoration-none">UI/UX Design</a></li>
                  <li><a href="#" className="text-decoration-none">Digital Marketing</a></li>
                </ul>
              </div>
            </div>
            
            <div className="col-lg-3 col-md-6">
              <div className={styles.footerSection}>
                <h4>Company</h4>
                <ul className="list-unstyled">
                  <li><a href="#" className="text-decoration-none">About Us</a></li>
                  <li><a href="#" className="text-decoration-none">Contact</a></li>
                  <li><a href="#" className="text-decoration-none">Privacy Policy</a></li>
                  <li><a href="#" className="text-decoration-none">Terms of Use</a></li>
                </ul>
              </div>
            </div>
            
            <div className="col-lg-3 col-md-6">
              <div className={styles.footerSection}>
                <h4>Contact Us</h4>
                <p>support@CodeGram.com</p>
                <p>+91 9876543210</p>
              </div>
            </div>
          </div>
          
          <div className={`${styles.footerBottom} text-center mt-4 pt-4`}>
            <p>&copy; 2025 CodeGram. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;