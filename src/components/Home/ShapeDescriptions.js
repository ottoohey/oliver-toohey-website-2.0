import React from "react";

export default function ShapeDescriptions({ titleRef }) {
  return (
    <div className="flex-col w-1/3 pt-16">
      <>
        <p
          className="text-white text-start pt-64 p-4"
          ref={titleRef}
          id="mobDescElement"
        >
          Need a mobile app developed?
        </p>
        <p className="text-white text-start p-4">I can help.</p>
        <p className="text-white text-start p-4">
          Most of my experience is with Flutter, however React Native isn't an
          issue either.
        </p>
        <p className="text-white text-start p-4">
          Check out my app{" "}
          <strong>
            <a
              href="https://apps.apple.com/au/app/project-cut/id1662427655"
              target="_blank"
              rel="noreferrer"
              className="hover:text-yellow-100"
            >
              here
            </a>
          </strong>
          .
        </p>
        <p className="text-white text-start text-xs p-4 mt-4">KEEP SCROLLING</p>
        <div
          className="arrow-down pointer-events-none ml-4"
          style={{
            height: "100pt",
          }}
        ></div>
      </>
      <>
        <p className="text-white text-start pt-64 p-4" id="webDescElement">
          I've got websites covered too.
        </p>
        <p className="text-white text-start p-4">
          Although that should be pretty obvious if you're reading this.
        </p>
        <p className="text-white text-start p-4">
          I put a lot of effort into these animations, so I hope you like them.
        </p>
        <p className="text-white text-start p-4">
          Have a look at how I did it{" "}
          <strong>
            <a
              href="https://github.com/ottoohey/oliver-toohey-website-2.0"
              target="_blank"
              rel="noreferrer"
              className="hover:text-yellow-100"
            >
              here
            </a>
          </strong>
          .
        </p>
        <p className="text-white text-start text-xs p-4 mt-4">
          YOU'VE GOT THIS
        </p>
        <div
          className="arrow-down pointer-events-none ml-4"
          style={{
            height: "100pt",
          }}
        ></div>
      </>
      <>
        <p className="text-white text-start pt-64 p-4" id="cloudDescElement">
          So where do I deploy everything?
        </p>
        <p className="text-white text-start p-4">
          The cloud of course, wherever that is...
        </p>
        <p className="text-white text-start p-4">
          I have my AWS Solutions Architect Associate Certificate and can deploy
          infrastructure as code using CDK.
        </p>
        <p className="text-white text-start p-4">
          I've also done a fair bit in Azure.
        </p>
        <p className="text-white text-start text-xs p-4 mt-4">
          I BELIEVE IN YOU
        </p>
        <div
          className="arrow-down pointer-events-none ml-4"
          style={{
            height: "100pt",
          }}
        ></div>
      </>
      <>
        <p
          className="text-white text-start pt-64 p-4"
          id="automationDescElement"
        >
          Finally, transitioning to full time work has left me with a worryingly
          small amount of free time.
        </p>
        <p className="text-white text-start p-4">
          Thankfully I have been introduced to automation.
        </p>
        <p className="text-white text-start p-4">At work, we use Ansible.</p>
        <p className="text-white text-start p-4">
          At home, I use Google App Scripts.
        </p>
        <p className="text-white text-start text-xs p-4 mt-4 mb-64">
          &#11088; YOU MADE IT &#11088;
        </p>
      </>
    </div>
  );
}
