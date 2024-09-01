import { Component, element, FCRendered } from "@noorjs/core";

// Button component

function ButtonComponent(
  this: Component,
  { fun, text }: { fun: () => void; text: string }
): FCRendered {
  element("button", this);

  // styles
  this.styles({
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
  });

  this.setEvent("onClick", () => {
    fun();
  });

  return () => text;
}

export default ButtonComponent;
