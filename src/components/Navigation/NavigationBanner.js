import React from "react";
import { Outlet, Link } from "react-router-dom";

export default function NavigationBanner({ scrollDownToContactMe }) {
  return (
    <>
      <div className="fixed mx-auto inset-x-0 -top-1 bg-zinc-800 h-32 z-40">
        <div className="grid grid-cols-1 h-10 m-auto">
          <p className="uppercase mx-auto inset-x-0 mt-12 text-2xl text-yellow-100">
            olivertoohey.com
          </p>
          <div className="flex mx-auto gap-4 p-4">
            <button className="uppercase text-xs text-yellow-100 hover:font-bold">
              <Link to="/">home</Link>
            </button>
            <button className="uppercase text-xs text-yellow-100 hover:font-bold">
              <Link to="/blogs">blogs</Link>
            </button>
            <button
              className="uppercase text-xs text-yellow-100 hover:font-bold"
              onClick={scrollDownToContactMe}
            >
              contact me
            </button>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
}
