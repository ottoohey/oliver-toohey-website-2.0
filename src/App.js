import "./App.css";
import React, { useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { position } from "./features/homescreenAnimation/homescreenAnimationSlice.js";
import Homescreen from "./components/Homescreen";
import ContactMe from "./components/ContactMe";
import ScrollingView from "./components/ScrollingView";

function App() {
  const dispatch = useDispatch();

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
  });

  return (
    <div className="App">
      <Homescreen
        scrollDownToOverview={scrollDownToOverview}
        scrollDownToContactMe={scrollDownToContactMe}
      />
      <ScrollingView titleRef={titleRef} />
      <ContactMe contactMeRef={contactMeRef} />
    </div>
  );
}

export default App;
