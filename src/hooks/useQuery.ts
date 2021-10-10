import { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { SearchParams } from '../typings/common';

const useQuery = (key: SearchParams) => {
  const [param, setparam] = useState<string | null>(null);
  const queryParams = new URLSearchParams(useLocation().search);
  const history = useHistory();

  useEffect(() => {
    const singleValue = queryParams.get(key);
    if (!singleValue && queryParams.has(key)) {
      queryParams.delete(key);
      history.replace({
        search: queryParams.toString(),
      });
    }
    setparam(singleValue);
  }, [queryParams]);

  return param;
};

export default useQuery;
