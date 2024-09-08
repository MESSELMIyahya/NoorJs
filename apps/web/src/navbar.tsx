import {
  channel,
  Component,
  createChannel,
  element,
  FCRendered,
} from "@noorjs/core";

interface dataType {
  getCount: () => number;
  setCount: (n: number) => void;
}

export const newChannel = createChannel<dataType>();

function NavbarComponent(this: Component<any>): FCRendered {
  element("div", this);
  const [getCount, setCount] = this.state(0);

  this.styles({
    width: "100%",
    padding: "10px 5%",
    marginBottom: "10px",
    backgroundColor: "#d7cabc",
  });

  channel(this)
    .provider(newChannel)
    .value({
      getCount: getCount,
      setCount: (n) => {
        setCount(n);
        this.render();
      },
    });

  return () => <h3 style={{ color: "#422800" }}>{getCount()}</h3>;
}

export default NavbarComponent;
