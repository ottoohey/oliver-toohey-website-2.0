import "./App.css";
import { useSpring, animated, easings } from "@react-spring/web";
import React, { useRef, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { transition } from "./features/opacity/opacitySlice.js";
import { position } from "./features/homescreenAnimation/homescreenAnimationSlice.js";

function App() {
  const opacityArray = useSelector((state) => state.opacity.value);
  const fixedPosition = useSelector((state) => state.homescreen.value);
  const paddingEnabled = useSelector(
    (state) => state.homescreen.paddingEnabled
  );
  const promptEnabled = useSelector((state) => state.opacity.promptBool);
  const dispatch = useDispatch();

  const breathingConfig = {
    duration: 2000,
    easing: easings.easeInOutSine,
  };

  const fastMoveConfig = {
    duration: 200,
    easing: easings.easeInOutSine,
  };

  const breathingHeightFromTo = ["20vh", "22vh"];
  const breathingYFromTo = ["35vh", "34vh"]; // subtract from starting height half of height change difference

  // higher vh == down screen
  function configureSpring(index, delay) {
    let width = "0%";

    if (index === 1) {
      width = "15%";
    } else if (index === 2 || index === 3) {
      width = "10%";
    } else {
      width = "5%";
    }

    return {
      from: {
        height: breathingHeightFromTo[0],
        width: width,
        y: breathingYFromTo[0],
      },
      to: {
        height: breathingHeightFromTo[1],
        width: width,
        y: breathingYFromTo[1],
      },
      loop: { reverse: true, delay: delay },
      config: breathingConfig,
    };
  }

  const [spring1, api1] = useSpring(() => configureSpring(0, 0));
  const [spring2, api2] = useSpring(() => configureSpring(1, 200));
  const [spring3, api3] = useSpring(() => configureSpring(2, 400));
  const [spring4, api4] = useSpring(() => configureSpring(3, 600));
  const [spring5, api5] = useSpring(() => configureSpring(4, 300));
  const [spring6, api6] = useSpring(() => configureSpring(5, 100));

  const expand = (api, order) => {
    api.start({
      to: {
        height: "35vh",
        width: "20%",
        y: "27vh",
      },
      config: fastMoveConfig,
    });
    dispatch(transition(order));
  };

  const retract = (api, order, width) => {
    api.start({
      to: {
        height: breathingHeightFromTo[1],
        width: width,
        y: breathingYFromTo[1],
      },
      config: fastMoveConfig,
      onRest: () => restartAnimation(api, width),
    });
    dispatch(transition(order));
  };

  const restartAnimation = (api, width) => {
    api.start({
      from: {
        height: breathingHeightFromTo[1],
        width: width,
        y: breathingYFromTo[1],
      },
      to: {
        height: breathingHeightFromTo[0],
        width: width,
        y: breathingYFromTo[0], // subtract from starting height half of height change difference
      },
      loop: { reverse: true },
      config: breathingConfig,
    });
  };

  const titleRef = useRef();
  function scrollDownToOverview() {
    titleRef.current.scrollIntoView({ behavior: "smooth" });
  }

  const contactMeRef = useRef();
  function scrollDownToContactMe() {
    contactMeRef.current.scrollIntoView({ behavior: "smooth" });
  }

  const handleScroll = () => {
    const scrollPosition = window.pageYOffset;

    const mobDescElement = document.getElementById("mobDescElement");
    const mobDescElementDistanceToTop =
      window.pageYOffset + mobDescElement.getBoundingClientRect().top;
    const mobDescElementRelativePostition =
      mobDescElementDistanceToTop - scrollPosition;

    const webDescElement = document.getElementById("webDescElement");
    const webDescElementDistanceToTop =
      window.pageYOffset + webDescElement.getBoundingClientRect().top;
    const webDescElementRelativePostition =
      webDescElementDistanceToTop - scrollPosition;

    const cloudDescElement = document.getElementById("cloudDescElement");
    const cloudDescElementDistanceToTop =
      window.pageYOffset + cloudDescElement.getBoundingClientRect().top;
    const cloudDescElementRelativePostition =
      cloudDescElementDistanceToTop - scrollPosition;

    const automationDescElement = document.getElementById(
      "automationDescElement"
    );
    const automationDescElementDistanceToTop =
      window.pageYOffset + automationDescElement.getBoundingClientRect().top;
    const automationDescElementRelativePostition =
      automationDescElementDistanceToTop - scrollPosition;

    dispatch(
      position([
        mobDescElementRelativePostition,
        webDescElementRelativePostition,
        cloudDescElementRelativePostition,
        automationDescElementRelativePostition,
      ])
    );
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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

  const morphShape = (stackIndex) => {
    let bgImage = "s3";
    switch (stackIndex) {
      case 1:
        bgImage = "bg-cloudfront";
        break;
      case 2:
        bgImage = "bg-route53";
        break;
      default:
        bgImage = "bg-s3";
        break;
    }
    if (fixedPosition[0]) {
      morph(0);
      return "phone-screen fixed top-32 pointer-events-none bg-zinc-700 bg-flutter bg-no-repeat bg-center bg-[length:100px_100px]";
    } else if (fixedPosition[1]) {
      morph(1);
      return "laptop-screen fixed top-32 pointer-events-none bg-zinc-700 bg-react bg-no-repeat bg-center bg-[length:100px_100px]";
    } else if (fixedPosition[2]) {
      morph(2);
      return (
        "cloud-stack fixed top-32 pointer-events-none bg-zinc-700/90 bg-no-repeat bg-center bg-[length:100px_100px] " +
        bgImage
      );
    } else if (fixedPosition[3]) {
      morph(3);
      return "automation-clock fixed top-32 pointer-events-none bg-zinc-700 bg-cron bg-no-repeat bg-center bg-[length:200px]";
    } else if (fixedPosition[4]) {
      morph();
      return "clock-off fixed top-32 pointer-events-none bg-yellow-100";
    } else {
      morph();
      return "starter-square relative top-32 pointer-events-none bg-yellow-100";
    }
  };

  const [morphSpring, morphApi] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 1, tension: 0, friction: 5 },
  }));

  const trans = (x, y, s) =>
    `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

  const morph = (index) => {
    switch (index) {
      case 0:
        morphApi.start({
          to: {
            xys: [0, 5, 1],
          },
        });
        break;
      case 1:
        morphApi.start({
          to: {
            xys: [0, 10, 1],
          },
        });
        break;
      case 2:
        morphApi.start({
          to: {
            xys: [80, 0, 1],
          },
        });
        break;
      case 3:
        morphApi.start({
          to: {
            xys: [0, 0, 1],
          },
        });
        break;
      default:
        morphApi.start({
          to: {
            xys: [0, 0, 1],
          },
        });
    }
  };

  return (
    <div className="App">
      <div className="App-header relative">
        <div>
          <div className="flex flex-row space-x-2 w-screen content-center">
            <div
              className="rounded-container"
              style={{
                width: "25%",
                height: "90vh",
                opacity: 0,
              }}
            ></div>
            <animated.div
              className={
                opacityArray[0]
                  ? "rounded-container bg-award bg-top border-2 border-green-200"
                  : "rounded-container"
              }
              style={{
                width: "5%",
                transformOrigin: "center",
                ...spring1,
              }}
              onMouseOver={() => expand(api1, 0)}
              onMouseLeave={() => retract(api1, 0, "5%")}
            >
              <div
                className={
                  promptEnabled || isMobile
                    ? "opacity-0 pointer-events-none"
                    : "grid grid-col-1 justify-items-center -mt-12 opacity-1 pointer-events-none"
                }
              >
                <p className="text-xs">TOUCH ME</p>
                <div className="arrow-down pointer-events-none"></div>
              </div>
            </animated.div>
            <animated.div
              className={
                opacityArray[1]
                  ? "square-container bg-dev bg-center border-2 border-green-200"
                  : "square-container"
              }
              style={{
                width: "15%",
                ...spring2,
              }}
              onMouseOver={() => expand(api2, 1)}
              onMouseLeave={() => retract(api2, 1, "15%")}
            ></animated.div>
            <animated.div
              className={
                opacityArray[2]
                  ? "rounded-container bg-cloud bg-right-bottom bg-cover border-2 border-green-200"
                  : "rounded-container"
              }
              style={{
                width: "10%",
                ...spring3,
              }}
              onMouseOver={() => expand(api3, 2)}
              onMouseLeave={() => retract(api3, 2, "10%")}
            ></animated.div>
            <animated.div
              className={
                opacityArray[3]
                  ? "square-container bg-open-ai bg-right bg-cover border-2 border-green-200"
                  : "square-container"
              }
              style={{
                width: "10%",
                ...spring4,
              }}
              onMouseOver={() => expand(api4, 3)}
              onMouseLeave={() => retract(api4, 3, "10%")}
            ></animated.div>
            <animated.div
              className={
                opacityArray[4]
                  ? "rounded-container bg-norway bg-center border-2 border-green-200"
                  : "rounded-container"
              }
              style={{
                width: "5%",
                ...spring5,
              }}
              onMouseOver={() => expand(api5, 4)}
              onMouseLeave={() => retract(api5, 4, "5%")}
            ></animated.div>
            <animated.div
              className={
                opacityArray[5]
                  ? "square-container bg-mona bg-center border-2 border-green-200"
                  : "square-container"
              }
              style={{
                width: "5%",
                ...spring6,
              }}
              onMouseOver={() => expand(api6, 5)}
              onMouseLeave={() => retract(api6, 5, "5%")}
            ></animated.div>
            <div
              className="rounded-container"
              style={{
                width: "25%",
                height: "90vh",
                opacity: 0,
              }}
            ></div>
          </div>
        </div>
        {/* <div className="gradient-background absolute mix-blend-multiply pointer-events-none"></div> */}
        <button
          className="text-yellow-100 uppercase hover:font-bold"
          onClick={scrollDownToOverview}
        >
          descend into my world
        </button>
      </div>
      <div className="fixed mx-auto inset-x-0 top-0 bg-zinc-800 h-24">
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
      <div className="fixed mx-auto inset-x-0 top-24 text-sm sm:text-lg">
        <p className={opacityArray[0] ? "text-opaque" : "text-clear"}>
          Hello there, welcome to my website.
        </p>
      </div>
      <div className="fixed mx-auto inset-x-0 top-24 text-sm sm:text-lg">
        <p className={opacityArray[1] ? "text-opaque" : "text-clear"}>
          My name is Oliver Toohey and I'm a Software Developer based in
          Melbourne, Australia. React vs Flutter - porque no los dos?
        </p>
      </div>
      <div className="fixed mx-auto inset-x-0 top-24 text-sm sm:text-lg">
        <p className={opacityArray[2] ? "text-opaque" : "text-clear"}>
          My head gets stuck in the clouds sometimes (haha), mainly AWS and
          Azure.
        </p>
      </div>
      <div className="fixed mx-auto inset-x-0 top-24 text-sm sm:text-lg">
        <p className={opacityArray[3] ? "text-opaque" : "text-clear"}>
          Need something automated? I can do that with Ansible, at least until
          ChatGPT takes over.
        </p>
      </div>
      <div className="fixed mx-auto inset-x-0 top-24 text-sm sm:text-lg">
        <p className={opacityArray[4] ? "text-opaque" : "text-clear"}>
          I love to travel and want to work overseas one day.
        </p>
      </div>
      <div className="fixed mx-auto inset-x-0 top-24 text-sm sm:text-lg">
        <p className={opacityArray[5] ? "text-opaque" : "text-clear"}>
          Nice to meet you.
        </p>
      </div>
      <div className="flex pt-32 bg-zinc-800">
        <div
          className={
            paddingEnabled
              ? "w-1/2 flex justify-end p-8"
              : "w-1/2 flex justify-end p-0"
          }
        >
          <animated.div
            className={morphShape(2)}
            style={{
              transform: morphSpring.xys.to(trans),
              opacity: fixedPosition[2] ? 1 : 0,
            }}
          ></animated.div>
          <animated.div
            className={morphShape()}
            style={{
              transform: morphSpring.xys.to(trans),
              y: fixedPosition[2] ? "25pt" : "0pt",
              opacity: fixedPosition[2] ? 1 : 0,
            }}
          ></animated.div>
          <animated.div
            className={morphShape(1)}
            style={{
              transform: morphSpring.xys.to(trans),
              y: fixedPosition[2] ? "-25pt" : "0pt",
            }}
          ></animated.div>
        </div>
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
              Most of my experience is with Flutter, however React Native isn't
              an issue either.
            </p>
            <p className="text-white text-start p-4">
              Check out my app <strong>here</strong>.
            </p>
            <p className="text-white text-start text-xs p-4 mt-4">
              KEEP SCROLLING
            </p>
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
            <p
              className="text-white text-start pt-64 p-4"
              id="cloudDescElement"
            >
              So where do I deploy everything?
            </p>
            <p className="text-white text-start p-4">
              The cloud of course, wherever that is...
            </p>
            <p className="text-white text-start p-4">
              I have my AWS Solutions Architect Associate Certificate and can
              deploy infrastructure as code using CDK.
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
              Finally, transitioning to full time work as left me with a
              worryingly small amount of free time.
            </p>
            <p className="text-white text-start p-4">
              Thankfully I have been introduced to automation.
            </p>
            <p className="text-white text-start p-4">
              At work, we use Ansible.
            </p>
            <p className="text-white text-start p-4">
              At home, I use Google App Scripts.
            </p>
            <p className="text-white text-start text-xs p-4 mt-4 mb-64">
              &#11088; YOU MADE IT &#11088;
            </p>
          </>
        </div>
      </div>
      <div className="h-3/4 bg-zinc-700" ref={contactMeRef}>
        <p className="text-white p-4 pt-16">
          Please don't hesitate to contact me by any means necessary.
        </p>
        <p className="text-white p-4">
          Although, if convenient, please try one of the following methods.
        </p>
        <p className="text-white p-4">oli@olivertoohey.com</p>
        <p className="text-white p-4">linkedin</p>
        <p className="text-white p-4 pb-16">github</p>
      </div>
    </div>
  );
}

export default App;
