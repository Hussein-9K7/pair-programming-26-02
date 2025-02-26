import { useState } from 'react';
import axios from 'axios';

const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const login = async (userData) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.post('/api/auth/login', userData);
      setIsLoading(false);
      return response.data;
    } catch (err) {
      setIsLoading(false);
      setError(err.response ? err.response.data.message : 'An error occurred');
    }
  };

  return { login, error, isLoading };
};

export default useLogin;
