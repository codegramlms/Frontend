import React, { useState } from 'react';
import { Search, ChevronLeft, ChevronRight, Clock, Play } from 'lucide-react';
import styles from './Dashboard.module.css';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('All');
  
  const leaderboardData = [
    { rank: 1, name: 'Avni', time: '0 hour', icon: '🏆' },
    { rank: 2, name: 'admin', time: '0 hour', icon: '🥈' },
    { rank: 3, name: 'tree', time: '0 hour', icon: '🥉' },
    { rank: 4, name: 'Ashish Zade', time: '1.3 hour' },
    { rank: 5, name: 'Lalit Dondage', time: '1.29 hour' },
    { rank: 6, name: 'Sourabh Kachole', time: '1.07 hour' },
  ];

  const courseCategories = [
    { name: 'All', count: 35 },
    { name: 'Design', count: 6 },
    { name: 'Tech', count: 6 },
    { name: 'Business', count: 7 },
    { name: 'IT & Software', count: 16 },
  ];

  return (
    <div className={`${styles.dashboard} container-fluid p-0`}>
      <div className="row g-0">
        {/* Sidebar */}
        <div className={`col-lg-2 col-md-3 ${styles.sidebar}`}>
          
          <nav className={styles.navigation}>
            <div className={`${styles.navItem} ${styles.active}`}>
              <span className={styles.navIcon}>📊</span>
              Dashboard
            </div>
            <div className={styles.navItem}>
              <span className={styles.navIcon}>👥</span>
              Refer and Earn
            </div>
            <div className={styles.navItem}>
              <span className={styles.navIcon}>🎓</span>
              Certificate
            </div>
            <div className={styles.navItem}>
              <span className={styles.navIcon}>💻</span>
              Hackathon
            </div>
            <div className={styles.navItem}>
              <span className={styles.navIcon}>📄</span>
              Build Resume
            </div>
          </nav>
        </div>

        {/* Main Content */}
        <div className={`col-lg-7 col-md-6 ${styles.mainContent}`}>
          {/* Promotion Cards */}
          <div className="row g-3 mb-4">
            <div className="col-md-6">
              <div className={`${styles.promoCard} ${styles.skillsCard}`}>
                <div className={styles.promoContent}>
                  <div className={styles.discount}>60% OFF</div>
                  <h3>Maximize your skills<br />on any 3 courses</h3>
                  <div className={styles.price}>
                    <span className={styles.currentPrice}>₹ 799</span>
                    <span className={styles.originalPrice}>₹2199</span>
                  </div>
                  <div className={styles.validity}>📈 Increase Refund Validity by 1 Years*</div>
                  <button className={`btn ${styles.exploreBtn}`}>
                    Explore now →
                  </button>
                </div>
                <div className={styles.promoImage}>
                  <div className={styles.characterAvatar}>
                    <div className={styles.avatarBody}></div>
                    <div className={styles.avatarHead}></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-md-6">
              <div className={`${styles.promoCard} ${styles.careerCard}`}>
                <div className={styles.promoContent}>
                  <div className={styles.discount}>67% OFF</div>
                  <h3>Accelerate your Career<br />by All access pack</h3>
                  <div className={styles.price}>
                    <span className={styles.currentPrice}>₹ 3299</span>
                    <span className={styles.originalPrice}>₹3799</span>
                  </div>
                  <div className={styles.validity}>🛡️ Get Refund Validity to Lifetime*</div>
                  <button className={`btn ${styles.exploreBtn}`}>
                    Explore now →
                  </button>
                </div>
                <div className={styles.promoImage}>
                  <div className={styles.characterAvatar}>
                    <div className={styles.avatarBody}></div>
                    <div className={styles.avatarHead}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enrolled Courses */}
          <div className={styles.section}>
            <div className={styles.sectionHeader}>
              <h2>Enrolled Courses</h2>
              <div className={styles.searchContainer}>
                <Search size={16} className={styles.searchIcon} />
                <input 
                  type="text" 
                  placeholder="Search courses..." 
                  className={styles.searchInput}
                />
                <ChevronLeft size={20} className={styles.navArrow} />
                <ChevronRight size={20} className={styles.navArrow} />
              </div>
            </div>

            <div className={styles.courseCard}>
              <div className={styles.courseIcon}>
                <div className={styles.pythonLogo}>🐍</div>
              </div>
              <div className={styles.courseInfo}>
                <h3>Python</h3>
                <p className={styles.courseSubtitle}>⏰ Regular expression</p>
                <p className={styles.enrolledDate}>📘 Enrolled On 6th Jul 2025</p>
                <div className={styles.progressContainer}>
                  <div className={styles.progressInfo}>
                    <span className={styles.progressLabel}>📈 Course Progress</span>
                    <span className={styles.progressPercent}>23%</span>
                  </div>
                  <div className={styles.progressBar}>
                    <div className={styles.progressFill}></div>
                  </div>
                </div>
                <button className={`btn ${styles.resumeBtn}`}>
                  <Play size={14} className="me-2" />
                  Resume
                </button>
              </div>
            </div>
          </div>

          {/* Browse Courses */}
          <div className={styles.section}>
            <h2>Browse more Courses</h2>
            <div className={styles.categoryTabs}>
              {courseCategories.map((category) => (
                <button
                  key={category.name}
                  className={`${styles.categoryTab} ${activeTab === category.name ? styles.active : ''}`}
                  onClick={() => setActiveTab(category.name)}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
            
            <div className={styles.courseGrid}>
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className={styles.courseGridItem}>
                  <div className={styles.courseNumber}>{i}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className={`col-lg-3 col-md-3 ${styles.rightSidebar}`}>
          {/* Learning Streak */}
          <div className={styles.streakSection}>
            <div className={styles.streakHeader}>
              <div className={styles.streakTitle}>
                <span className={styles.fireIcon}>🔥</span>
                <span>Learning Streak!</span>
              </div>
              <div className={styles.streakInfo}>
                <div className={styles.longestStreak}>Longest Streak!</div>
                <select className={styles.streakSelect}>
                  <option>1 Days</option>
                  <option>4 Days</option>
                </select>
              </div>
            </div>
            
            <div className={styles.calendar}>
              <div className={styles.calendarHeader}>
                <span>S</span><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span>
              </div>
              <div className={styles.calendarBody}>
                <div className={styles.calendarDay}></div>
                <div className={styles.calendarDay}></div>
                <div className={styles.calendarDay}></div>
                <div className={styles.calendarDay}></div>
                <div className={`${styles.calendarDay} ${styles.active}`}>🟡</div>
                <div className={styles.calendarDay}></div>
                <div className={styles.calendarDay}></div>
              </div>
            </div>
          </div>

          {/* Leaderboard */}
          <div className={styles.leaderboard}>
            <div className={styles.leaderboardHeader}>
              <h3>Leaderboard</h3>
              <div className={styles.leaderboardTabs}>
                <button className={`${styles.leaderboardTab} ${styles.active}`}>Weekly</button>
                <button className={styles.leaderboardTab}>Overall</button>
              </div>
            </div>

            <div className={styles.leaderboardList}>
              {leaderboardData.map((user, index) => (
                <div key={index} className={styles.leaderboardItem}>
                  <div className={styles.userInfo}>
                    <div className={styles.userRank}>
                      {user.icon || `#${user.rank}`}
                    </div>
                    <div className={styles.userName}>{user.name}</div>
                  </div>
                  <div className={styles.userTime}>
                    <Clock size={12} />
                    <span>{user.time}</span>
                  </div>
                </div>
              ))}
              
              <div className={styles.yourRankSection}>
                <div className={styles.yourRankTitle}>Your Rank!</div>
                <div className={styles.yourRankSubtitle}>Course watch time</div>
                <div className={`${styles.leaderboardItem} ${styles.currentUser}`}>
                  <div className={styles.userInfo}>
                    <div className={styles.userRank}>#7270</div>
                    <div className={styles.userName}>You</div>
                  </div>
                  <div className={styles.userTime}>
                    <Clock size={12} />
                    <span>6 hour</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;