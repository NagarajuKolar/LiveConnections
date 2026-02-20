import { useEffect } from "react";

const useLiveFadeUp = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".live-fade-up");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("live-fade-visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
};

export default useLiveFadeUp;