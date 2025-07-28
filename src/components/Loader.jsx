import { useEffect, useState } from "react";
import "./Loader.css";

const Loader = ({ onFinish }) => {
  const [animateOut, setAnimateOut] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimateOut(true); // start exit animation
      setTimeout(() => {
        onFinish(); // notify parent after animation
      }, 1000); // match animation duration
    }, 3000); // fake loading time (replace with real condition if needed)

    return () => clearTimeout(timeout);
  });

  return (
    <div className={`loader-screen ${animateOut ? "exit" : ""}`}>
      <div className="loader-bar"></div>
    </div>
  );
};

export default Loader;
