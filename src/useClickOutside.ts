import { useEffect } from 'react';

/**
 *  Hook to call a callback when clicks happen outside a certain element passed in as a ref.
 * @param ref React ref object
 * @param callback Callback when user has clicked outside
 * @param {boolean} enabled Optional param passed in to disable or enable the hook. default = true
 */
const useClickOutside = (
  ref: React.RefObject<HTMLElement>,
  callback: () => void,
  enabled = true
) => {
  const handleClick = (e: React.ChangeEvent<HTMLElement>) => {
    if (ref.current && !ref.current.contains(e.target) && enabled) {
      callback();
    }
  };
  useEffect(() => {
    document.addEventListener('click', handleClick as any);
    return () => {
      document.removeEventListener('click', handleClick as any);
    };
  });
};

export default useClickOutside;
