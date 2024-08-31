import { Component, element, FCRendered } from "@repo/core";

function App(this: Component): FCRendered {
  element("p", this);

  let [getCount, setCount] = this.state(0);

  const buttonsIds = {
    b1: this.get("id") + "b1",
    b2: this.get("id") + "b2",
  };

  this.onMount(() => {
    const button1 = document.getElementById(buttonsIds.b1)!;
    const button2 = document.getElementById(buttonsIds.b2)!;
    // set the methods
    button1.onclick = increment;
    button2.onclick = decrement;
  });

  this.onRender(() => {
    const button1 = document.getElementById(buttonsIds.b1)!;
    const button2 = document.getElementById(buttonsIds.b2)!;
    // set the methods
    button1.onclick = increment;
    button2.onclick = decrement;
  });

  const increment = () => {
    setCount((c) => c + 1);
    this.render({ count: getCount() });
  };

  const decrement = () => {
    setCount(getCount() - 1);
    this.render({ count: getCount() });
  };

  return [
    { count: getCount() },
    /*html*/ `
    <p>{{count}}</p>
    <button id="${buttonsIds.b1}">increase</button>
    <button id="${buttonsIds.b2}">decrease</button>
    `,
  ];
}

export default App;
