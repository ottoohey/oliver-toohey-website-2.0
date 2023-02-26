import React, { useState, useEffect } from "react";
import TitlescreenBlobs from "./TitlescreenBlobs.js";
import TitlescreenBio from "./TitlescreenBio.js";

export default function Titlescreen({ scrollDownToOverview }) {
  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 768;

  return (
    <>
      <div className="App-header relative">
        <TitlescreenBlobs isMobile={isMobile} />
        {/* <div className="gradient-background absolute mix-blend-multiply pointer-events-none"></div> */}
        <button
          className="text-yellow-100 uppercase hover:font-bold"
          onClick={scrollDownToOverview}
        >
          descend into my world
        </button>
      </div>
      <TitlescreenBio isMobile={isMobile} />
    </>
  );
}
