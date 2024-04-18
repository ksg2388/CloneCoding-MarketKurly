import { useCallback, useEffect, useRef, useState } from 'react';

const useHover = (): [React.RefObject<HTMLDivElement>, boolean] => {
  const [isHover, setIsHover] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseOver = useCallback(() => {
    setIsHover(true);
  }, []);

  const handleMouseOut = useCallback(() => {
    setIsHover(false);
  }, []);

  useEffect(() => {
    const element = ref.current;
    if (!element) {
      return;
    }

    element.addEventListener('mouseover', handleMouseOver);
    element.addEventListener('mouseout', handleMouseOut);

    return () => {
      element.removeEventListener('mouseover', handleMouseOver);
      element.removeEventListener('mouseout', handleMouseOut);
    };
  }, [ref, handleMouseOut, handleMouseOver]);

  return [ref, isHover];
};

export default useHover;
