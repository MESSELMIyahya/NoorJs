import { Component, ComponentCreator, element, FCRendered } from "@repo/core";

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

  const buttonStyle: Partial<CSSStyleDeclaration> = {
    backgroundColor: "#fbeee0",
    border: "4px solid #422800",
    borderRadius: "30px",
    boxShadow: "#d7cdc3 4px 4px 0 0",
    color: "#422800",
    cursor: "pointer",
    display: "inline-block",
    fontWeight: "600",
    fontSize: " 18px",
    padding: "0 18px",
    lineHeight: " 50px",
    textAlign: "center",
    textDecoration: "none",
    userSelect: "none",
    touchAction: "manipulation",
  };

  return () => [
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
          "button",
          { onClick: increment, style: buttonStyle },
          "Increment"
        ),
        ComponentCreator(
          "button",
          { onClick: decrement, style: buttonStyle },
          "decrement"
        ),
      ]
    ),
  ];
}

export default App;
