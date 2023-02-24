import { useSelector } from "react-redux";
import { useSpring, animated } from "@react-spring/web";

export default function MorphingShape() {
  const fixedPosition = useSelector((state) => state.homescreen.value);
  const paddingEnabled = useSelector(
    (state) => state.homescreen.paddingEnabled
  );

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
  );
}
