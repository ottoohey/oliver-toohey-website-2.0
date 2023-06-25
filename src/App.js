import "./App.css";
import React, { useRef } from "react";
import { Routes, Route, Outlet, HashRouter } from "react-router-dom";
import Homescreen from "./components/home/Homescreen";
import Blogs from "./components/blogs/Blogs";
import Apps from "./components/apps/Apps";
import ErrorPage from "./components/navigation/ErrorPage";
import NavigationBanner from "./components/navigation/NavigationBanner";
import BlogPost from "./components/blogs/BlogPost";
import AppDetails from "./components/apps/AppDetails";
import NOTDSupport from "./components/apps/applications/NOTDSupport";

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
            <Route path="/apps" element={<Outlet />}>
              <Route index element={<Apps />} />
              <Route
                path=":appId"
                element={<AppDetails contactMeRef={contactMeRef} />}
              />
            </Route>
            <Route
              path="/notd-support"
              element={<NOTDSupport contactMeRef={contactMeRef} />}
            ></Route>
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
