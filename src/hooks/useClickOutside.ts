import { useEffect } from 'react';

/**
 * React hook that detects click outside an element
 *
 * @param {node} ref, element to detect click outside
 * @param {func} handler, function for invoking when click outside element is detected
 */
const useClickOutside = (ref: any, handler: any) => {
  useEffect(() => {
    document.addEventListener('click', handleClickOutside, false);

    return () => {
      document.removeEventListener('click', handleClickOutside, false);
    };
  });

  const handleClickOutside = (event: any) => {
    if (ref.current && !ref.current.contains(event.target)) {
      handler();
    }
  };
};

export default useClickOutside;
