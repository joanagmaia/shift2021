import { useEffect, useState } from 'react';

const api = 'https://crazycolors-api.herokuapp.com';

const useFetch = (url) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(async () => {
    const fetchData = async () => {
      setIsLoading(true);
      await fetch(`${api}/${url}`)
        .then((response) => response.json())
        .then((response) => {
          setIsLoading(false);
          setError(false);
          setData(response);
        })
        .catch(() => {
          setIsLoading(false);
          setError(true);
        });
    };

    fetchData();
  }, []);

  return {
    data,
    isLoading,
    error,
  };
};

export default useFetch;
