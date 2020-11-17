import { useEffect, useState } from 'react';

/**
 * Hook to match a media query and return its boolean value.
 */
const useMediaQuery = (
  /**
   * CSS Media query string
   */
  query: string,
  /**
   * Controls the default state of the query before the useEffect mounts. Useful for SSR
   */
  defaultState: boolean = false,
  /**
   * Called with an error object when a fatal error occurs in adding listeners
   */
  onError?: (e: any) => void
) => {
  const [state, setState] = useState(defaultState);

  useEffect(() => {
    let mounted = true;
    const mql = window.matchMedia(query);
    const onChange = () => {
      if (!mounted) return;
      setState(!!mql.matches);
    };

    try {
      mql.addEventListener('change', onChange);
    } catch (e1) {
      try {
        // Safari
        mql.addListener(onChange);
      } catch (e2) {
        onError && onError(e2);
      }
    }

    setState(mql.matches);

    return () => {
      mounted = false;
      try {
        mql.removeEventListener('change', onChange);
      } catch (e1) {
        try {
          // Safari
          mql.removeListener(onChange);
        } catch (e2) {
          onError && onError(e2);
        }
      }
    };
  }, [query]);

  return state;
};

export default useMediaQuery;
