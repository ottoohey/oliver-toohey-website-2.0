import { useSelector } from "react-redux";

export default function TitlescreenBio({ isMobile }) {
  const opacityArray = useSelector((state) =>
    isMobile ? state.opacity.mobileValues : state.opacity.value
  );
  return (
    <>
      <div className="fixed mx-auto inset-x-0 top-32 text-sm sm:text-lg">
        <p className={opacityArray[0] ? "text-opaque" : "text-clear"}>
          Hello there, welcome to my website.
        </p>
      </div>
      <div className="fixed mx-auto inset-x-0 top-32 text-sm sm:text-lg">
        <p className={opacityArray[1] ? "text-opaque" : "text-clear"}>
          My name is Oliver Toohey and I'm a Software Developer based in
          Melbourne, Australia. React vs Flutter - porque no los dos?
        </p>
      </div>
      <div className="fixed mx-auto inset-x-0 top-32 text-sm sm:text-lg">
        <p className={opacityArray[2] ? "text-opaque" : "text-clear"}>
          My head gets stuck in the clouds sometimes (haha), mainly AWS and
          Azure.
        </p>
      </div>
      <div className="fixed mx-auto inset-x-0 top-32 text-sm sm:text-lg">
        <p className={opacityArray[3] ? "text-opaque" : "text-clear"}>
          Need something automated? I can do that with Ansible, at least until
          ChatGPT takes over.
        </p>
      </div>
      <div className="fixed mx-auto inset-x-0 top-32 text-sm sm:text-lg">
        <p className={opacityArray[4] ? "text-opaque" : "text-clear"}>
          I love to travel and want to work overseas one day.
        </p>
      </div>
      <div className="fixed mx-auto inset-x-0 top-32 text-sm sm:text-lg">
        <p className={opacityArray[5] ? "text-opaque" : "text-clear"}>
          Nice to meet you.
        </p>
      </div>
    </>
  );
}
