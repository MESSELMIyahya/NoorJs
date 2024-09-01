import { Component, ComponentCreator, element, FCRendered } from "@repo/core";

function App(this: Component): FCRendered {
  element("div", this);

  let [getCount, setCount, countRef] = this.state(0);

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
    const span = document.getElementById("counter")!;
    span.innerText = getCount().toString();
  }, [countRef]);

  return [
    ComponentCreator("span", { id: "counter" }, getCount() + ""),
    ComponentCreator("div", {}, [
      ComponentCreator(
        "button",
        { id: "inc", onclick: increment },
        "Increment"
      ),
      ComponentCreator(
        "button",
        { id: "dec", onclick: decrement },
        "decrement"
      ),
    ]),
  ];
}

export default App;
