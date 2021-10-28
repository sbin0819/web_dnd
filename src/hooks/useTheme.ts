import { useState, useEffect } from 'react';
import useWindowSize from './useWindowSize';
type UseThemeReturnType = 'desktop' | 'mobile';
const useTheme = () => {
  const [type, setType] = useState<UseThemeReturnType>('desktop');
  const { width } = useWindowSize();

  useEffect(() => {
    if (width && width < 550) {
      setType('mobile');
    } else {
      setType('desktop');
    }
  }, [width]);
  return type;
};

export default useTheme;
