import {
  createRoot,
  Component,
  renderRoot,
  element,
  state,
  FCRendered,
} from "@repo/core";

// creating the root
const root = createRoot();

// button component

function ButtonComponent(this: Component): FCRendered {
  element("button", this);
  // styles
  this.styles({
    backgroundColor: "#e0e0e0",
    borderRadius: "5px",
    border: "none",
    padding: "5px 10px",
    color: "#010101",
  });

  let times = state(0, this);

  this.setEvent("onClick", (e) => {
    times++;
    this.render({ times });

    const random = Math.floor(Math.random() * 5);

    if (random == 1) this.style("backgroundColor", "lightgoldenrodyellow");
    else if (random == 2) this.style("backgroundColor", "lightgreen");
    else if (random == 3) this.style("backgroundColor", "lightblue");
    else if (random == 4) this.style("backgroundColor", "lightsalmon");
    else this.style("backgroundColor", "lightcyan");

  });


  return [{ times }, `count {{times}}`];
}

// render the component

renderRoot(root, [ButtonComponent]);

// const element = () => ({});

// function Componenft() {
//   element("div", this);
//   this.inject(["Navbar"], this);
//   const name = state("name", this);

//   //   const [ref, element] = accessElement(this);

//   function fetch() {
//     return [1, 2, 3, 4];
//   }

//   this.addMethod("onclick", (ele) => {
//     ele.innerText = name;
//   });

//   this.click();

//   return /*html*/ `
//     <p><Navbar /></p>
//     <p id="${""}">{name}</p>
//     { age }`;
// }

// console.log(Component.apply({}));

// function Component(this:{name:string},n) {
//     element("p", this);

//     console.log(this,n);

//     this.style({
//         name:''
//     })

//     this.classNames('')

//     const count = state("count", this);

//     const increment = ()=>{
//         count++
//     }

//     this.addMethod("onclick", (ele) => {
//       count++;
//     //   this.setInnerText(count);
//     },true);

//     return /*html*/ `{count}`;
// }
