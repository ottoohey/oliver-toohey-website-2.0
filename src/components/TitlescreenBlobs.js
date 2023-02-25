import { useSpring, animated, easings } from "@react-spring/web";
import { useSelector, useDispatch } from "react-redux";
import {
  transition,
  sliderTransition,
} from "../features/opacity/opacitySlice.js";
import ReactSlider from "react-slider";

export default function TitlescreenBlobs({ isMobile }) {
  const opacityArray = useSelector((state) =>
    isMobile ? state.opacity.mobileValues : state.opacity.value
  );
  const promptEnabled = useSelector((state) => state.opacity.promptBool);
  const previousMobileValue = useSelector(
    (state) => state.opacity.previousMobileValue
  );
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

    if (index === 0) {
      width = isMobile ? "90%" : "5%";
    } else if (index === 1) {
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
    let width = isMobile ? "90%" : "20%";
    api.start({
      to: {
        height: "35vh",
        width: width,
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

  function changeSliderValue(value) {
    dispatch(sliderTransition(value));

    let retractApi = api1;
    let width = "5%";
    switch (previousMobileValue) {
      case 1:
        retractApi = api2;
        width = "15%";
        break;
      case 2:
        retractApi = api3;
        width = "10%";
        break;
      case 3:
        retractApi = api4;
        width = "10%";
        break;
      case 4:
        retractApi = api5;
        width = "5%";
        break;
      case 5:
        retractApi = api6;
        width = "5%";
        break;
      default:
        retractApi = api1;
        width = "5%";
        break;
    }

    let expandApi = api1;
    switch (value) {
      case 1:
        expandApi = api2;
        break;
      case 2:
        expandApi = api3;
        break;
      case 3:
        expandApi = api4;
        break;
      case 4:
        expandApi = api5;
        break;
      case 5:
        expandApi = api6;
        break;
      default:
        expandApi = api1;
        break;
    }
    retract(retractApi, previousMobileValue, width);
    expand(expandApi, value);
  }

  return (
    <div className="flex flex-col">
      <div className="flex flex-row space-x-2 w-screen">
        <div
          className="rounded-container"
          style={{
            width: "25%",
            height: isMobile ? "80vh" : "90vh",
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
          onMouseOver={() => (isMobile ? null : expand(api1, 0))}
          onMouseLeave={() => (isMobile ? null : retract(api1, 0, "5%"))}
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
          onMouseOver={() => (isMobile ? null : expand(api2, 1))}
          onMouseLeave={() => (isMobile ? null : retract(api2, 1, "15%"))}
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
          onMouseOver={() => (isMobile ? null : expand(api3, 2))}
          onMouseLeave={() => (isMobile ? null : retract(api3, 2, "10%"))}
        ></animated.div>
        <animated.div
          className={
            opacityArray[3]
              ? "square-container bg-automation bg-center bg-cover bg-no-repeat border-2 border-green-200"
              : "square-container"
          }
          style={{
            width: "10%",
            ...spring4,
          }}
          onMouseOver={() => (isMobile ? null : expand(api4, 3))}
          onMouseLeave={() => (isMobile ? null : retract(api4, 3, "10%"))}
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
          onMouseOver={() => (isMobile ? null : expand(api5, 4))}
          onMouseLeave={() => (isMobile ? null : retract(api5, 4, "5%"))}
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
          onMouseOver={() => (isMobile ? null : expand(api6, 5))}
          onMouseLeave={() => (isMobile ? null : retract(api6, 5, "5%"))}
        ></animated.div>
        <div
          className="rounded-container"
          style={{
            width: "25%",
            height: isMobile ? "80vh" : "90vh",
            opacity: 0,
          }}
        ></div>
      </div>
      <div
        className={
          isMobile ? "w-screen mx-auto inset-x-0 -mt-12 p-12" : "-ml-96"
        }
      >
        <ReactSlider
          className={isMobile ? "customSlider" : "opacity-0 fixed -top-2"}
          trackClassName="customSlider-track"
          thumbClassName="customSlider-thumb"
          max={5}
          onChange={(value) => changeSliderValue(value)}
        ></ReactSlider>
      </div>
    </div>
  );
}
