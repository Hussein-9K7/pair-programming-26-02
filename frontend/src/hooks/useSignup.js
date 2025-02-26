import { useState } from 'react';
import axios from 'axios';

const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const signup = async (userData) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.post('/api/auth/signup', userData);
      setIsLoading(false);
      return response.data;
    } catch (err) {
      setIsLoading(false);
      setError(err.response ? err.response.data.message : 'An error occurred');
    }
  };

  return { signup, error, isLoading };
};

export default useSignup;
