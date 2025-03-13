import React from "react";
import Nav from "./components/Nav";
import Body1 from "./components/Body1";
import Body2 from "./components/Body2";
import Body3 from "./components/Body3";
import Slider from "./components/Slider";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Nav />
      <Body1 />
      <Body2 />
      <Body3 />
      <div className="mt-4">
        <Slider />
      </div>
      <div className="mt-4">
        <Footer />
      </div>
    </>
  );
}
