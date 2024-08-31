import { Component, element, FCRendered } from "@repo/core";

function App(this: Component): FCRendered {
  element("button", this);

  let [getCount, setCount, countRef] = this.state(0);

  this.onChange(() => {
    // render when the count state gets changed
    this.render({ count: getCount() });
    if (getCount() == 10) {
      this.setView(`You won ${getCount()}`);
    }
  }, [countRef]);

  this.setEvent("onClick", () => {
    setCount((c) => c + 1);
  });

  return [{ count: getCount() }, /*html*/ `{{count}}`];
}

export default App;
