import React, { useState } from 'react';
import styles from './LoginModal.module.css';

const LoginModal = ({ isOpen, onClose, onSwitchToSignup }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login:', { email, password });
  };

  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>
          ×
        </button>
        
        <div className={styles.header}>
          <div className={styles.logo}>
            <span className={styles.logoIcon}>🎓</span>
            <span className={styles.logoText}>CodeGram</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputGroup}>
            <span className={styles.inputIcon}>📧</span>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.input}
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <span className={styles.inputIcon}>🔑</span>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={styles.input}
              required
            />
          </div>

          <button type="submit" className={styles.submitButton}>
            Login
          </button>
        </form>

        <div className={styles.footer}>
          <span className={styles.switchText}>
            New User?
            <button 
              className={styles.switchButton}
              onClick={onSwitchToSignup}
            >
              Register here
            </button>
          </span>
          <button className={styles.forgotPassword}>
            Forgot Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;