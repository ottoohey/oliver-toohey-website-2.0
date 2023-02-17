import "./App.css";
import { useSpring, animated, easings } from "@react-spring/web";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { transition } from "./features/opacity/opacitySlice.js";

function App() {
  const opacityArray = useSelector((state) => state.opacity.value);
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

  return (
    <div className="App">
      <div className="App-header relative">
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
          ></animated.div>
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
        {/* <div className="gradient-background absolute mix-blend-multiply pointer-events-none"></div> */}
        <button className="text-yellow-100 hover:font-bold hover:underline hover:decoration-green-200">
          descend into my world
        </button>
      </div>
      <p className="fixed uppercase mx-auto inset-x-0 top-12 text-2xl text-yellow-100">
        olivertoohey.com
      </p>
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
          My head gets stuck in the clouds sometimes, mainly AWS and Azure.
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
          Nice to meet you :)
        </p>
      </div>
    </div>
  );
}

export default App;
