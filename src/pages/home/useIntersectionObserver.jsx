import { useEffect, useRef, useState } from 'react';

const useIntersectionObserver = (options) => {
  const [entries, setEntries] = useState([]);
  const observer = useRef(null);

  useEffect(() => {
    observer.current = new IntersectionObserver((observedEntries) => {
      setEntries(observedEntries);
    }, options);

    return () => {
      if (observer.current) observer.current.disconnect();
    };
  }, [options]);

  const observe = (element) => {
    if (observer.current && element) observer.current.observe(element);
  };

  const unobserve = (element) => {
    if (observer.current && element) observer.current.unobserve(element);
  };

  return [observe, unobserve, entries];
};

export default useIntersectionObserver;
