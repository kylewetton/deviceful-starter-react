import React, { useEffect, useRef } from "react";
import Deviceful from "deviceful";
import "./App.css";

function App() {
  const parent = useRef();
  const device = new Deviceful({
    screenshot: "redgarden.jpg",
    screenshotHeight: 2402,
    path: "./deviceful",
  });

  useEffect(() => {
    device.mount(parent.current);
  }, []);

  return (
    <>
      <div ref={parent} className="laptop"></div>

      <div className="flex">
        <button onClick={() => device.swivel()}>Swivel</button>
        <button onClick={() => device.swivel({ to: 0 })}>Center</button>
      </div>
    </>
  );
}

export default App;
