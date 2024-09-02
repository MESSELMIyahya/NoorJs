import { Component, element, FCRendered } from "@noorjs/core";
import ButtonComponent from "./button";
import NavbarComponent from "./navbar";

function App(this: Component): FCRendered {
  element("div", this);

  const [getCount, setCount, countRef] = this.state(0);

  this.onInit(() => {
    console.log("initialized");
  });

  this.onMount(() => {
    console.log("mounted");
  });

  this.onRender(() => {
    console.log("rendered");
  });

  // increment & decrement functions
  const increment = () => {
    setCount((c) => c + 1);
  };

  const decrement = () => {
    setCount((c) => c - 1);
  };

  console.log("this will log once !!!");

  // rerender the component whenever the count state gets changed
  this.onChange(() => {
    this.render();
  }, [countRef]);

  return () => (
    <div>
      <NavbarComponent count={getCount()} />
      <span style={{ color: "#422800", fontWeight: "500", fontSize: "2em" }}>
        {getCount()}
      </span>
      <div
        style={{
          display: "flex",
          gap: "4px",
          alignItems: "center",
        }}
      >
        <ButtonComponent fun={increment} text="increment" />
        <ButtonComponent fun={decrement} text="decrement" />
      </div>
      {getCount() == 5 ? <span style={{ color: "red" }}>You won</span> : null}
    </div>
  );
}

export default App;
