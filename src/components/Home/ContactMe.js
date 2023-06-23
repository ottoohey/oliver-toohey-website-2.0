import React from "react";
import github from "../../images/logos/github-mark-white.png";

export default function ContactMe({ contactMeRef }) {
  return (
    <div className="h-3/4 bg-zinc-700" ref={contactMeRef}>
      <p className="text-white p-4 pt-16">
        Feel free to get in contact with me via one of the methods below.
      </p>
      <div className="grid grid-cols-1 gap-2">
        <a
          href="mailto: hello@olivertoohey.com"
          className="text-white p-4 font-bold hover:text-yellow-100"
        >
          hello@olivertoohey.com
        </a>
        <div>
          {/* <img src={github} alt="GitHub Logo" className="logo" /> */}
          <a
            target="_blank"
            href="https://github.com/ottoohey"
            className="text-white p-4 font-bold hover:text-yellow-100"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>

        <a
          target="_blank"
          href="https://www.linkedin.com/in/oliver-toohey-336652154/"
          className="text-white p-4 pb-8 font-bold hover:text-yellow-100"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
}
