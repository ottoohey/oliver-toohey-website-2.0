import React, { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { position } from "../../features/homescreenAnimation/homescreenAnimationSlice";
import Titlescreen from "../Home/Titlescreen";
import ContactMe from "../Home/ContactMe";
import ScrollingView from "../Home/ScrollingView";
import { sliderTransition } from "../../features/opacity/opacitySlice";

export default function Homescreen({ contactMeRef }) {
  const previousMobileValue = useSelector(
    (state) => state.opacity.previousMobileValue
  );
  const dispatch = useDispatch();

  const titleRef = useRef();
  function scrollDownToOverview() {
    titleRef.current.scrollIntoView({ behavior: "smooth" });
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

    if (scrollPosition <= 0) {
      dispatch(sliderTransition(previousMobileValue));
    } else {
      dispatch(sliderTransition(6));
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <>
      <Titlescreen scrollDownToOverview={scrollDownToOverview} />
      <ScrollingView titleRef={titleRef} />
      <ContactMe contactMeRef={contactMeRef} />
    </>
  );
}
