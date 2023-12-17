import { useEffect, useState } from "react";

export const useIsMobile = () => {
  const initial = window.matchMedia("(max-width: 768px)").matches;
  const [isMobile, setIsMobile] = useState(initial);
  useEffect(() => {
    const updateMedia = () => {
      console.log(
        "Outside IsMobile: ",
        window.matchMedia("(max-width: 768px)").matches
      );
      setTimeout(() => {
        setIsMobile(window.matchMedia("(max-width: 768px)").matches);
      }, 1000);
    };
    window.screen.orientation.addEventListener("change", updateMedia);
    window.addEventListener("orientationchange", updateMedia);
    return () => {
      window.screen.orientation.removeEventListener("change", updateMedia);
      window.removeEventListener("orientationchange", updateMedia);
    };
  }, []);
  return [isMobile, setIsMobile];
};
