import axios from 'axios';

const getUserData = () => {
  try {
    const user = JSON.parse(sessionStorage.getItem('user'));
    return {
      user: user,
      token: sessionStorage.getItem('token'),
      role: user ? user.role : null
    };
  } catch (error) {
    console.error("Error parsing user data:", error);
    return { user: null, token: null, role: null };
  }
};

// Generic POST API function with authentication
export const postApiWithAuth = async (url, data, customHeaders = {}) => {
  try {
    const { user, token, role } = getUserData();
    
    const headers = {
      'Content-Type': 'application/json',
      ...customHeaders
    };

    // Add Bearer token if available
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    // Add user data to custom headers
    if (user) {
      headers['X-User-Data'] = JSON.stringify(user);
      headers['X-User-Role'] = role || '';
      headers['X-User-Email'] = user.email || '';
      headers['X-User-Id'] = user.id || '';
    }

    const response = await axios.post(url, data, { headers });
    return response;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};