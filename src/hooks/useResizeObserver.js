import { useEffect, useRef, useState } from "react";

export const useResizeObserver = () => {
  const ref = useRef();
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (!ref.current) return;
    const observer = new ResizeObserver(([entry]) => {
      setDimensions(entry.contentRect);
    });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return [ref, dimensions];
};
