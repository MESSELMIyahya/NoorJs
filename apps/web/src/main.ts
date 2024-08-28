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

  let times = state(0, this);

  this.setEvent("onClick", (e) => {
    console.log("clicked :", times);
    times++;
    if (times == 6) {
      this.removeEvent("onClick");
    } else {
      this.render({ times },`increased {{times}}`);
    }
  });

  console.log(this.get("id"));

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
