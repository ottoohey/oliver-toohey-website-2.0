import "./App.css";
import React, { useRef } from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Homescreen from "./components/Home/Homescreen";
import Blogs from "./components/Blogs/Blogs";
import ErrorPage from "./components/Navigation/ErrorPage";
import NavigationBanner from "./components/Navigation/NavigationBanner";
import BlogPost from "./components/Blogs/BlogPost";

function App() {
  const contactMeRef = useRef();
  function scrollDownToContactMe() {
    contactMeRef.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <NavigationBanner scrollDownToContactMe={scrollDownToContactMe} />
            }
          >
            <Route index element={<Homescreen contactMeRef={contactMeRef} />} />
            <Route path="/blogs" element={<Outlet />}>
              <Route index element={<Blogs />} />
              <Route path=":postId" element={<BlogPost />} />
            </Route>
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
