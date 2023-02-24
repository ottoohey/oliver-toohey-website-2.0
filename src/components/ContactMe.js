import React from "react";

export default function ContactMe({ contactMeRef }) {
  return (
    <div className="h-3/4 bg-zinc-700" ref={contactMeRef}>
      <p className="text-white p-4 pt-16">
        Please don't hesitate to contact me by any means necessary.
      </p>
      <p className="text-white p-4">
        Although, if convenient, please try one of the following methods.
      </p>
      <div className="grid grid-cols-1 gap-2">
        <a
          href="mailto: oli@olivertoohey.com"
          className="text-white p-4 font-bold hover:text-yellow-100"
        >
          oli@olivertoohey.com
        </a>
        <a
          target="_blank"
          href="https://github.com/ottoohey"
          className="text-white p-4 font-bold hover:text-yellow-100"
          rel="noreferrer"
        >
          GitHub
        </a>
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
