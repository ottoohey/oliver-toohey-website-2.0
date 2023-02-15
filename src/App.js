import "./App.css";
import { useSpring, animated, easings } from "@react-spring/web";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { transition } from "./features/opacity/opacitySlice.js";

function App() {
  const opacityArray = useSelector((state) => state.opacity.value);
  const dispatch = useDispatch();

  const breathingConfig = {
    duration: 7000,
    easing: easings.easeInOutSine,
  };

  const fastMoveConfig = {
    duration: 500,
    easing: easings.easeInOutSine,
  };

  // higher vh == down screen
  function configureSpring(delay) {
    return {
      from: {
        height: "20vh",
        y: "35vh",
      },
      to: {
        height: "30vh",
        y: "30vh", // subtract from starting height half of height change difference
      },
      loop: { reverse: true, delay: delay },
      config: breathingConfig,
    };
  }

  const [spring1, api1] = useSpring(() => configureSpring(0));
  const [spring2, api2] = useSpring(() => configureSpring(200));
  const [spring3, api3] = useSpring(() => configureSpring(400));
  const [spring4, api4] = useSpring(() => configureSpring(600));
  const [spring5, api5] = useSpring(() => configureSpring(300));
  const [spring6, api6] = useSpring(() => configureSpring(100));

  // const [opaque, setOpacity] = useState(false);

  const expand = (api, order) => {
    api.start({
      to: {
        height: "90vh",
        y: "0vh",
      },
      config: fastMoveConfig,
    });
    dispatch(transition(order));
  };

  const retract = (api, order) => {
    api.start({
      to: {
        height: "20vh",
        y: "35vh",
      },
      config: fastMoveConfig,
      onRest: () => restartAnimation(api),
    });
    dispatch(transition(order));
  };

  const restartAnimation = (api) => {
    api.start({
      from: {
        height: "20vh",
        y: "35vh",
      },
      to: {
        height: "30vh",
        y: "30vh", // subtract from starting height half of height change difference
      },
      loop: { reverse: true },
      config: breathingConfig,
    });
  };

  return (
    <div className="App">
      <header className="App-header relative">
        <div className="p-6 md:p-9 lg:p-12 pointer-events-none absolute">
          <p className="text-2xl sm:text-4xl lg:text-6xl xl:text-8xl font-display text-white">
            OLIVERTOOHEY.COM
          </p>
        </div>
        <div className="container flex flex-row space-x-2 w-screen content-center absolute">
          <div
            className="rounded-container content-center"
            style={{
              width: "0vh",
              height: "90vh",
            }}
          ></div>
          <animated.div
            className="rounded-container"
            style={{
              width: "10%",
              transformOrigin: "center",
              ...spring1,
            }}
            onMouseOver={() => expand(api1, 0)}
            onMouseLeave={() => retract(api1, 0)}
          ></animated.div>
          <animated.div
            className="square-container"
            style={{
              width: "30%",
              ...spring2,
            }}
            onMouseOver={() => expand(api2, 1)}
            onMouseLeave={() => retract(api2, 1)}
          ></animated.div>
          <animated.div
            className="rounded-container"
            style={{
              width: "20%",
              ...spring3,
            }}
            onMouseOver={() => expand(api3, 2)}
            onMouseLeave={() => retract(api3, 2)}
          ></animated.div>
          <animated.div
            className="square-container"
            style={{
              width: "20%",
              ...spring4,
            }}
            onMouseOver={() => expand(api4, 3)}
            onMouseLeave={() => retract(api4, 3)}
          ></animated.div>
          <animated.div
            className="rounded-container"
            style={{
              width: "10%",
              ...spring5,
            }}
            onMouseOver={() => expand(api5, 4)}
            onMouseLeave={() => retract(api5, 4)}
          ></animated.div>
          <animated.div
            className="square-container"
            style={{
              width: "10%",
              ...spring6,
            }}
            onMouseOver={() => expand(api6, 5)}
            onMouseLeave={() => retract(api6, 5)}
          ></animated.div>
        </div>
        <div className="gradient-background-2 absolute mix-blend-multiply pointer-events-none"></div>
        <div className="p-6 md:p-9 lg:p-12 pointer-events-none">
          <p className="text-2xl sm:text-4xl lg:text-6xl xl:text-8xl font-display text-white mix-blend-overlay">
            OLIVERTOOHEY.COM
          </p>
        </div>
        <button className="fixed bottom-24 font-serif">
          descend into my world
        </button>
      </header>
      <header className="App-header fixed">
        {/* <div class="grid grid-flow-col auto-cols-6 w-screen fixed top-24"> */}
        <div className="container flex flex-row space-x-2 w-screen fixed top-24">
          <p
            className={opacityArray[0] ? "text-opaque" : "text-clear"}
            style={{
              width: "10%",
              justifyContent: "center",
            }}
          >
            Hello there, welcome to my website.
          </p>
          <p
            className={opacityArray[1] ? "text-opaque" : "text-clear"}
            style={{
              width: "30%",
            }}
          >
            My name is Oliver Toohey and I'm a Software Developer based in
            Melbourne, Australia. I mainly work with React and Flutter.
          </p>
          <p
            className={opacityArray[2] ? "text-opaque" : "text-clear"}
            style={{
              width: "20%",
            }}
          >
            I also dabble in the AWS/Azure platforms, deploying infrastucture as
            code using CDK.
          </p>
          <p
            className={opacityArray[3] ? "text-opaque" : "text-clear"}
            style={{
              width: "20%",
            }}
          >
            Need something automated? I can do that with Ansible, at least until
            ChatGPT takes over.
          </p>
          <p
            className={opacityArray[4] ? "text-opaque" : "text-clear"}
            style={{
              width: "10%",
            }}
          >
            I love to travel and want to work overseas one day.
          </p>
          <p
            className={opacityArray[5] ? "text-opaque" : "text-clear"}
            style={{
              width: "10%",
            }}
          >
            Nice to meet you :)
          </p>
        </div>
      </header>
    </div>
  );
}

export default App;
