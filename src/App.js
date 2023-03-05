import "./App.css";
import React, { useRef } from "react";
import { Routes, Route, Outlet, HashRouter } from "react-router-dom";
import Homescreen from "./components/home/Homescreen";
import Blogs from "./components/blogs/Blogs";
import ErrorPage from "./components/navigation/ErrorPage";
import NavigationBanner from "./components/navigation/NavigationBanner";
import BlogPost from "./components/blogs/BlogPost";

function App() {
  const contactMeRef = useRef();
  function scrollDownToContactMe() {
    contactMeRef.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="App">
      <HashRouter>
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
              <Route
                path=":postId"
                element={<BlogPost contactMeRef={contactMeRef} />}
              />
            </Route>
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
