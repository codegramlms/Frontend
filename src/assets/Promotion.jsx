import React from "react";
import src from './logo.png';

export default function CodegramHomePage() {
  const styles = {
    container: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f8fafc 0%, #e0f2fe 50%, #e8eaf6 100%)',
      padding: '20px',
      fontFamily: 'Arial, sans-serif'
    },
    maxWidth: {
      maxWidth: '1200px',
      margin: '0 auto'
    },
    header: {
      textAlign: 'center',
      marginBottom: '40px'
    },
    logoContainer: {
      background: 'white',
      borderRadius: '50%',
      width: '120px',
      height: '120px',
      margin: '0 auto 20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
      border: '4px solid #dbeafe',
      padding: '10px'
    },
    logoInner: {
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '50%',
      overflow: 'hidden'
    },
    logoImage: {
      width: '80px',
      height: '80px',
      objectFit: 'contain',
      maxWidth: '100%',
      maxHeight: '100%'
    },
    mainTitle: {
      fontSize: '3.5rem',
      fontWeight: '900',
      background: 'linear-gradient(45deg, #2563eb, #4f46e5, #7c3aed)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      marginBottom: '10px',
      letterSpacing: '2px'
    },
    subtitle: {
      fontSize: '1.25rem',
      color: '#6b7280',
      fontWeight: '500'
    },
    divider: {
      width: '96px',
      height: '4px',
      background: 'linear-gradient(45deg, #3b82f6, #4f46e5)',
      margin: '20px auto',
      borderRadius: '2px'
    },
    heroSection: {
      textAlign: 'center',
      marginBottom: '50px'
    },
    heroTitle: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      color: '#1f2937',
      marginBottom: '15px'
    },
    heroHighlight: {
      color: '#2563eb'
    },
    heroText: {
      fontSize: '1.125rem',
      color: '#6b7280',
      maxWidth: '800px',
      margin: '0 auto',
      lineHeight: '1.7'
    },
    mainGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '30px',
      marginBottom: '50px'
    },
    coursesContainer: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '25px',
      gridColumn: 'span 2'
    },
    courseCard: {
      background: 'white',
      borderRadius: '16px',
      padding: '30px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
      border: '1px solid #f3f4f6',
      transition: 'all 0.3s ease',
      cursor: 'pointer'
    },
    courseCardHover: {
      boxShadow: '0 20px 25px rgba(0,0,0,0.1)',
      transform: 'translateY(-5px)'
    },
    courseHeader: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '20px'
    },
    courseIcon: {
      width: '48px',
      height: '48px',
      borderRadius: '12px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: '15px',
      color: 'white',
      fontWeight: 'bold',
      fontSize: '18px'
    },
    javaIcon: {
      background: 'linear-gradient(45deg, #f97316, #dc2626)'
    },
    reactIcon: {
      background: 'linear-gradient(45deg, #3b82f6, #06b6d4)'
    },
    courseTitle: {
      fontSize: '1.25rem',
      fontWeight: 'bold',
      color: '#1f2937'
    },
    courseText: {
      color: '#6b7280',
      marginBottom: '20px',
      lineHeight: '1.6'
    },
    tagContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '8px'
    },
    tag: {
      padding: '4px 12px',
      borderRadius: '20px',
      fontSize: '0.875rem',
      fontWeight: '500'
    },
    tagOrange: {
      background: '#fed7aa',
      color: '#c2410c'
    },
    tagRed: {
      background: '#fecaca',
      color: '#dc2626'
    },
    tagYellow: {
      background: '#fef3c7',
      color: '#d97706'
    },
    tagBlue: {
      background: '#dbeafe',
      color: '#2563eb'
    },
    tagCyan: {
      background: '#cffafe',
      color: '#0891b2'
    },
    tagGreen: {
      background: '#dcfce7',
      color: '#16a34a'
    },
    sidebarCard: {
      background: 'white',
      borderRadius: '16px',
      padding: '30px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
      border: '1px solid #f3f4f6'
    },
    sidebarTitle: {
      fontSize: '1.25rem',
      fontWeight: 'bold',
      color: '#1f2937',
      marginBottom: '25px',
      textAlign: 'center'
    },
    featureList: {
      display: 'flex',
      flexDirection: 'column',
      gap: '15px'
    },
    featureItem: {
      display: 'flex',
      alignItems: 'center'
    },
    featureIcon: {
      width: '32px',
      height: '32px',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: '12px',
      fontSize: '14px'
    },
    greenIcon: {
      background: '#dcfce7',
      color: '#16a34a'
    },
    blueIcon: {
      background: '#dbeafe',
      color: '#2563eb'
    },
    purpleIcon: {
      background: '#f3e8ff',
      color: '#7c3aed'
    },
    orangeIcon: {
      background: '#fed7aa',
      color: '#ea580c'
    },
    featureText: {
      color: '#374751',
      fontWeight: '500'
    },
    bottomGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '30px'
    },
    testimonialCard: {
      background: 'linear-gradient(45deg, #2563eb, #4f46e5)',
      borderRadius: '16px',
      padding: '30px',
      color: 'white',
      boxShadow: '0 4px 6px rgba(0,0,0,0.05)'
    },
    testimonialTitle: {
      fontSize: '1.25rem',
      fontWeight: 'bold',
      marginBottom: '20px',
      textAlign: 'center'
    },
    testimonialText: {
      fontStyle: 'italic',
      color: '#bfdbfe',
      textAlign: 'center',
      marginBottom: '12px'
    },
    stars: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: '15px',
      gap: '2px'
    },
    star: {
      color: '#fbbf24',
      fontSize: '18px'
    },
    contactCard: {
      background: 'white',
      borderRadius: '16px',
      padding: '30px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
      border: '1px solid #f3f4f6',
      textAlign: 'center'
    },
    contactTitle: {
      fontSize: '1.25rem',
      fontWeight: 'bold',
      color: '#1f2937',
      marginBottom: '20px'
    },
    contactInfo: {
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
      marginBottom: '25px'
    },
    contactItem: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px'
    },
    contactText: {
      color: '#374751',
      fontWeight: '500'
    },
    enrollButton: {
      width: '100%',
      background: 'linear-gradient(45deg, #2563eb, #4f46e5)',
      color: 'white',
      fontWeight: 'bold',
      padding: '12px 24px',
      borderRadius: '12px',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      fontSize: '16px'
    },
    footer: {
      textAlign: 'center',
      marginTop: '40px',
      paddingTop: '25px',
      borderTop: '1px solid #e5e7eb'
    },
    footerText: {
      color: '#9ca3af',
      fontSize: '0.875rem'
    }
  };

  const handleCourseHover = (e) => {
    Object.assign(e.currentTarget.style, styles.courseCardHover);
  };

  const handleCourseLeave = (e) => {
    e.currentTarget.style.boxShadow = styles.courseCard.boxShadow;
    e.currentTarget.style.transform = 'translateY(0)';
  };

  const handleButtonHover = (e) => {
    e.currentTarget.style.background = 'linear-gradient(45deg, #1d4ed8, #3730a3)';
    e.currentTarget.style.transform = 'translateY(-2px)';
    e.currentTarget.style.boxShadow = '0 8px 25px rgba(37, 99, 235, 0.3)';
  };

  const handleButtonLeave = (e) => {
    e.currentTarget.style.background = 'linear-gradient(45deg, #2563eb, #4f46e5)';
    e.currentTarget.style.transform = 'translateY(0)';
    e.currentTarget.style.boxShadow = 'none';
  };

  return (
    <div style={styles.container}>
      <div style={styles.maxWidth}>
        {/* Header Section */}
        <div style={styles.header}>
          <div style={styles.logoContainer}>
            <div style={styles.logoInner}>
              <img
                src={src}
                alt="CodeGram Logo"
                style={styles.logoImage}
              />
            </div>
          </div>
          <h1 style={styles.mainTitle}>CODEGRAM</h1>
          <p style={styles.subtitle}>Project-Oriented Corporate Training</p>
          <div style={styles.divider}></div>
        </div>

        {/* Hero Section */}
        <div style={styles.heroSection}>
          <h2 style={styles.heroTitle}>
            Master the Skills That <span style={styles.heroHighlight}>Matter</span>
          </h2>
          <p style={styles.heroText}>
            Learn all the courses with real-world projects designed to boost your career. 
            CODEGRAM offers focused training for software professionals and students.
          </p>
        </div>

        {/* Main Content Grid */}
        <div style={styles.mainGrid}>
          {/* Courses Section */}
          <div style={styles.coursesContainer}>
            {/* Java Course */}
            <div 
              style={styles.courseCard}
              onMouseEnter={handleCourseHover}
              onMouseLeave={handleCourseLeave}
            >
              <div style={styles.courseHeader}>
                <div style={{...styles.courseIcon, ...styles.javaIcon}}>
                  <span>J</span>
                </div>
                <h3 style={styles.courseTitle}>Java Development</h3>
              </div>
              <p style={styles.courseText}>
                Master Core Java, OOPs, JDBC, Servlets, JSP, and Spring Boot. Build enterprise applications with hands-on projects.
              </p>
              <div style={styles.tagContainer}>
                <span style={{...styles.tag, ...styles.tagOrange}}>Core Java</span>
                <span style={{...styles.tag, ...styles.tagRed}}>Spring Boot</span>
                <span style={{...styles.tag, ...styles.tagYellow}}>JSP</span>
              </div>
            </div>

            {/* React Course */}
            <div 
              style={styles.courseCard}
              onMouseEnter={handleCourseHover}
              onMouseLeave={handleCourseLeave}
            >
              <div style={styles.courseHeader}>
                <div style={{...styles.courseIcon, ...styles.reactIcon}}>
                  <span>R</span>
                </div>
                <h3 style={styles.courseTitle}>React Frontend</h3>
              </div>
              <p style={styles.courseText}>
                Master modern frontend development with React.js. Learn components, Hooks, State Management, and API integration.
              </p>
              <div style={styles.tagContainer}>
                <span style={{...styles.tag, ...styles.tagBlue}}>React.js</span>
                <span style={{...styles.tag, ...styles.tagCyan}}>Hooks</span>
                <span style={{...styles.tag, ...styles.tagGreen}}>APIs</span>
              </div>
            </div>
          </div>

          {/* Why Choose Us Sidebar */}
          <div style={styles.sidebarCard}>
            <h3 style={styles.sidebarTitle}>Why CODEGRAM?</h3>
            <div style={styles.featureList}>
              <div style={styles.featureItem}>
                <div style={{...styles.featureIcon, ...styles.greenIcon}}>
                  <span>✓</span>
                </div>
                <span style={styles.featureText}>Project-Based Learning</span>
              </div>
              <div style={styles.featureItem}>
                <div style={{...styles.featureIcon, ...styles.blueIcon}}>
                  <span>✓</span>
                </div>
                <span style={styles.featureText}>Expert Trainers</span>
              </div>
              <div style={styles.featureItem}>
                <div style={{...styles.featureIcon, ...styles.purpleIcon}}>
                  <span>✓</span>
                </div>
                <span style={styles.featureText}>Certification</span>
              </div>
              <div style={styles.featureItem}>
                <div style={{...styles.featureIcon, ...styles.orangeIcon}}>
                  <span>✓</span>
                </div>
                <span style={styles.featureText}>Career Support</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div style={styles.bottomGrid}>
          {/* Testimonials */}
          <div style={styles.testimonialCard}>
            <h4 style={styles.testimonialTitle}>Student Success</h4>
            <div>
              <p style={styles.testimonialText}>
                "The Java training helped me land my first developer job!"
              </p>
              <p style={styles.testimonialText}>
                "CODEGRAM made technical learning fun and job-focused."
              </p>
            </div>
            <div style={styles.stars}>
              {[...Array(5)].map((_, i) => (
                <span key={i} style={styles.star}>★</span>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div style={styles.contactCard}>
            <h4 style={styles.contactTitle}>Ready to Start?</h4>
            <div style={styles.contactInfo}>
              <div style={styles.contactItem}>
                <span style={{fontSize: '20px'}}>📞</span>
                <span style={styles.contactText}>+91-XXXX-XXX-XXX</span>
              </div>
              <div style={styles.contactItem}>
                <span style={{fontSize: '20px'}}>✉️</span>
                <span style={styles.contactText}>info@codegram.com</span>
              </div>
            </div>
            <button 
              style={styles.enrollButton}
              onMouseEnter={handleButtonHover}
              onMouseLeave={handleButtonLeave}
            >
              Coming Soon....
            </button>
          </div>
        </div>

        {/* Footer */}
        <div style={styles.footer}>
          <p style={styles.footerText}>
            © 2025 CODEGRAM. Empowering careers through quality education.
          </p>
        </div>
      </div>
    </div>
  );
}