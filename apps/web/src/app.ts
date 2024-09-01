import { Component, ComponentCreator, element, FCRendered } from "@repo/core";
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

  // update the span element when ever the count state gets changed
  this.onChange(() => {
    this.render({});
  }, [countRef]);

  return () => [
    ComponentCreator(NavbarComponent, { count: getCount() }, []),
    ComponentCreator(
      "span",
      {
        style: {
          color: "#422800",
          fontWeight: "500",
          fontSize: "2em",
        },
      },
      getCount() + ""
    ),
    ComponentCreator(
      "div",
      {
        style: {
          display: "flex",
          gap: "4px",
          alignItems: "center",
        },
      },
      [
        ComponentCreator(
          ButtonComponent,
          { text: "increment", fun: increment },
          []
        ),
        ComponentCreator(
          ButtonComponent,
          { text: "decrement", fun: decrement },
          []
        ),
      ]
    ),
  ];
}

export default App;
