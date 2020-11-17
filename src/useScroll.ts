import { useEffect, useState } from 'react';

type ScrollOptions = {
  /**
   * Pixels needed to scroll trigger hook. Default 10
   */
  margin?: number;
};

export default function useScroll({ margin = 10 }: ScrollOptions = {}) {
  // setting initial value to true
  const [scroll, setScroll] = useState(false);

  // running on mount
  useEffect(() => {
    const onScroll = () => {
      const scrollCheck = window.scrollY > margin;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    };

    // setting the event handler from web API
    document.addEventListener('scroll', onScroll);

    // cleaning up from the web API
    return () => {
      document.removeEventListener('scroll', onScroll);
    };
  }, [scroll, setScroll, margin]);

  return scroll;
}
