import "./App.css";
import { useSpring, animated, easings } from "@react-spring/web";
import { useState } from "react";

function App() {
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

  const [opaque, setOpacity] = useState(false);

  const expand = (api) => {
    api.start({
      to: {
        height: "90vh",
        y: "0vh",
      },
      config: fastMoveConfig,
    });
    setOpacity(true);
  };

  const retract = (api) => {
    api.start({
      to: {
        height: "20vh",
        y: "35vh",
      },
      config: fastMoveConfig,
      onRest: () => restartAnimation(api),
    });
    setOpacity(false);
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
              width: "0%",
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
            onMouseOver={() => expand(api1)}
            onMouseLeave={() => retract(api1)}
          ></animated.div>
          <animated.div
            className="square-container"
            style={{
              width: "30%",
              ...spring2,
            }}
            onMouseOver={() => expand(api2)}
            onMouseLeave={() => retract(api2)}
          ></animated.div>
          <animated.div
            className="rounded-container"
            style={{
              width: "20%",
              ...spring3,
            }}
            onMouseOver={() => expand(api3)}
            onMouseLeave={() => retract(api3)}
          ></animated.div>
          <animated.div
            className="square-container"
            style={{
              width: "20%",
              ...spring4,
            }}
            onMouseOver={() => expand(api4)}
            onMouseLeave={() => retract(api4)}
          ></animated.div>
          <animated.div
            className="rounded-container"
            style={{
              width: "10%",
              ...spring5,
            }}
            onMouseOver={() => expand(api5)}
            onMouseLeave={() => retract(api5)}
          ></animated.div>
          <animated.div
            className="square-container"
            style={{
              width: "10%",
              ...spring6,
            }}
            onMouseOver={() => expand(api6)}
            onMouseLeave={() => retract(api6)}
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
            className={opaque ? "text-opaque" : "text-clear"}
            style={{
              width: "10%",
            }}
          >
            Test
          </p>
          <p
            style={{
              width: "30%",
            }}
          >
            Test
          </p>
          <p
            style={{
              width: "20%",
            }}
          >
            Test
          </p>
          <p
            style={{
              width: "20%",
            }}
          >
            Test
          </p>
          <p
            style={{
              width: "10%",
            }}
          >
            Test
          </p>
          <p
            style={{
              width: "10%",
            }}
          >
            Test
          </p>
        </div>
      </header>
    </div>
  );
}

export default App;
