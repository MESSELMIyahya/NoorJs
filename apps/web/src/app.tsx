import { Component, element, FCRendered } from "@noorjs/old_core";
import NavbarComponent from "./navbar";
import Button from "./button";

function App(this: Component<any>): FCRendered {
  element("div", this);

  console.log("this will log once !!!");

  return () => (
    <div style={{ color: "black" }}>
      <NavbarComponent />
      <Button text="inc" />
    </div>
  );
}

export default App;
