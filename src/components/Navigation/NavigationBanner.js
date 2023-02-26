import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";

export default function NavigationBanner({ scrollDownToContactMe }) {
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
      <div className="fixed mx-auto inset-x-0 -top-1 bg-zinc-800 h-24 z-40">
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
      <Outlet />
    </>
  );
}
