import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './LandingPage.module.css';
import LoginModal from './LoginModal';
import SignupModal from './SignupModal';

const LandingPage = () => {
  const [activeTab, setActiveTab] = useState('All Courses');
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);

  const tabs = ['All Courses', 'Design', 'Development', 'IT & Software', 'Business'];

  const courses = [
    { title: 'Full Stack Web Development', icon: '🌐', category: 'Development' },
    { title: 'UI/UX Design Mastery', icon: '🎨', category: 'Design' },
    { title: 'Data Science & Analytics', icon: '📊', category: 'IT & Software' },
    { title: 'Digital Marketing Pro', icon: '📱', category: 'Business' },
    { title: 'Cloud Computing AWS', icon: '☁️', category: 'IT & Software' },
    { title: 'Mobile App Development', icon: '📲', category: 'Development' },
    { title: 'Cybersecurity Fundamentals', icon: '🔒', category: 'IT & Software' },
    { title: 'Graphic Design Studio', icon: '🖼️', category: 'Design' }
  ];

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
      content: 'TechMaster transformed my career completely. The mentorship program and hands-on projects gave me the confidence to land my dream job.',
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

  const faqs = [
    {
      question: 'Why should I opt for TechMaster?',
      answer: 'TechMaster offers industry-relevant curriculum, expert mentorship, and guaranteed internship opportunities with 100% refund guarantee.'
    },
    {
      question: 'What is the validity of the courses and when can I watch them?',
      answer: 'All courses have lifetime access. You can watch them anytime, anywhere at your own pace with mobile and desktop support.'
    },
    {
      question: 'Will my course validity expire after I receive the 100% refund amount?',
      answer: 'No, course access remains valid even after refund. We believe in our quality and want you to succeed.'
    },
    {
      question: 'How will I know that 100% Refund offer has been applied?',
      answer: 'You will receive email confirmation and see the refund status in your dashboard within 24 hours of enrollment.'
    },
    {
      question: 'How will I receive my 100% Refund amount?',
      answer: 'Refunds are processed through the original payment method within 5-7 business days of completion.'
    }
  ];

  const handleSwitchToSignup = () => {
    setShowLoginModal(false);
    setShowSignupModal(true);
  };

  const handleSwitchToLogin = () => {
    setShowSignupModal(false);
    setShowLoginModal(true);
  };

  const closeModals = () => {
    setShowLoginModal(false);
    setShowSignupModal(false);
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
                  <div className={styles.mainImage}>
                    <div className={styles.studentAvatar}>👨‍💻</div>
                  </div>
                  <div className={styles.womanImage}>
                    <div className={styles.womanAvatar}>👩‍💼</div>
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
          
          {/* Stats Section */}
          <div className={`${styles.statSection} row g-4 py-5`}>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className={`${styles.statCard} text-center`}>
                <span className={styles.statNumber}>42+</span>
                <span className={styles.statLabel}>Courses</span>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className={`${styles.statCard} text-center`}>
                <span className={styles.statNumber}>90K+</span>
                <span className={styles.statLabel}>Learners</span>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className={`${styles.statCard} text-center`}>
                <span className={styles.statNumber}>100K+</span>
                <span className={styles.statLabel}>Doubts Solved</span>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className={`${styles.statCard} text-center`}>
                <span className={styles.statNumber}>10K+</span>
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

          <div className="row g-4">
            {courses.map((course, index) => (
              <div key={index} className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div className={`${styles.courseCard} h-100 text-center`}>
                  <div className={styles.courseIcon}>{course.icon}</div>
                  <h3 className={styles.courseTitle}>{course.title}</h3>
                  <span className={styles.courseCategory}>{course.category}</span>
                </div>
              </div>
            ))}
          </div>
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
          <h2 className={`${styles.sectionTitle} text-center mb-3`}>Why Choose TechMaster?</h2>
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
                    <th>TechMaster</th>
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
                  <tr>
                    <td>Guaranteed Paid Internship</td>
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

      {/* FAQ Section */}
      <section className={`${styles.faqSection} py-5`}>
        <div className="container">
          <h2 className={`${styles.sectionTitle} text-center mb-5`}>Got Questions? Check Out Our FAQs!</h2>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className={styles.faqList}>
                {faqs.map((faq, index) => (
                  <div key={index} className={`${styles.faqItem} mb-3`}>
                    <h3 className={styles.faqQuestion}>{faq.question}</h3>
                    <p className={styles.faqAnswer}>{faq.answer}</p>
                  </div>
                ))}
              </div>
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

      {/* Modals
      <LoginModal 
        isOpen={showLoginModal}
        onClose={closeModals}
        onSwitchToSignup={handleSwitchToSignup}
      />
      
      <SignupModal 
        isOpen={showSignupModal}
        onClose={closeModals}
        onSwitchToLogin={handleSwitchToLogin}
      /> */}
    </div>
  );
};

export default LandingPage;