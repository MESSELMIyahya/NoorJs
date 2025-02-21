import { Component, createElement } from "@noorjs/core";
import { renderRoot } from "@noorjs/dom";

// @Component()
// class AppComponent {
//   paint() {
//     return "Hello World";
//   }
// }

console.time("RENDERING");

// console.log(createElement(AppComponent, {}));

// console.log('element :',<div><span/></div>)

const ele = (
  <ul className="">
    {Array.from({ length: 50 }).map((_, idx) => (
      <li>
        {idx % 2 == 0 ? (
          <span>
            Numbers{" "}
            {Array.from({ length: 20 }).map(
              (_, sub_idx) => ", " + (sub_idx & idx)
            )}
          </span>
        ) : null}
      </li>
    ))}
  </ul>
);

// console.log("ELE :", ele);
renderRoot(ele, document.getElementById("app")!);

console.timeEnd("RENDERING");

// @Component()
// class Home {
//   paint() {
//     return "home";
//   }
// }
// const count = 0;
// console.log( <AppComponent/> );

// console.log(createElement(AppComponent, {}));

// @Component({})
// class MyComponent {
//   isFetching = withState(false);
//   data = withState([]);

//   @OnInit() // will be ran called after the initial render
//   fetching_data() {
//     // set the isFetching state to 'true'
//     this.isFetching.set(true);
//     // ...fetch data logic
//     // save the data in the state
//     this.data.set([
//       /* ...fetched data */
//     ]);
//     // set the isFetching state to 'false'
//     this.isFetching.set(false);
//   }

//   // onChange
//   @OnChange([data])
//   fetch_data() {
//     console.log("DATA IS FETCHED :", this.data.get());
//   }

//   return() {
//     return (
//       <div>
//         {/* ..wrapping the fetched data */}
//         {this.data.get().map((item) => (
//           <Component /*...Props */ />
//         ))}
//       </div>
//     );
//   }
// }
