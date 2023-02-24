import React, { useState, useEffect } from "react";
import HomescreenBlobs from "./HomescreenBlobs.js";
import HomescreenBio from "./HomescreenBio.js";

export default function Homescreen({
  scrollDownToOverview,
  scrollDownToContactMe,
}) {
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
        <HomescreenBlobs isMobile={isMobile} />
        {/* <div className="gradient-background absolute mix-blend-multiply pointer-events-none"></div> */}
        <button
          className="text-yellow-100 uppercase hover:font-bold"
          onClick={scrollDownToOverview}
        >
          descend into my world
        </button>
      </div>
      <div className="fixed mx-auto inset-x-0 -top-1 bg-zinc-800 h-24">
        <p className="fixed uppercase mx-auto inset-x-0 top-12 text-2xl text-yellow-100">
          olivertoohey.com
        </p>
        <button
          className={
            isMobile
              ? "opacity-0"
              : "fixed uppercase top-12 right-12 text-xs text-yellow-100 hover:font-bold"
          }
          onClick={scrollDownToContactMe}
        >
          contact me
        </button>
      </div>
      <HomescreenBio isMobile={isMobile} />
    </>
  );
}
