import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useQuery = (key: string) => {
  const [param, setparam] = useState<string>();
  const queryParams = new URLSearchParams(useLocation().search);

  useEffect(() => {
    const singleValue = queryParams.get(key);
    if (singleValue) {
      setparam(singleValue);
    }
  }, [queryParams]);

  return param;
};

export default useQuery;
