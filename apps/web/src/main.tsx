import { Component } from "@noorjs/core";

@Component()
class AppComponent {
  paint() {
    return "Hello World";
  }
}

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
