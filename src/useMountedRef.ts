import { useEffect, useRef } from 'react';

/**
 * Hook returning whether or not a component is mounted.
 */
export default function useMountedRef() {
  const isMounted = useRef(false);
  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  });
  return isMounted;
}
