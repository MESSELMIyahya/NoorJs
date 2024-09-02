import { Component, element, FCRendered } from "@noorjs/core";

function NavbarComponent(
  this: Component,
  { count }: { count: number }
): FCRendered {
  element("div", this);

  const [getCounter, setCounter] = this.state(count);

  this.styles({
    width: "100%",
    padding: "10px 5%",
    marginBottom: "10px",
    backgroundColor: "#d7cabc",
  });

  this.setEvent("onClick", () => {
    setCounter((c) => c - 1);
    this.render();
  });

  return () => (
    <h3 style={{ color: "#422800" }}>Navbar your number is : {getCounter()}</h3>
  );
}

export default NavbarComponent;
