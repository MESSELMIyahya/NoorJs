![hero](docs/imgs/readmeimg.png)

![GitHub Release](https://img.shields.io/github/v/release/MESSELMIyahya/NoorJs?color=blue)
![NPM Downloads](https://img.shields.io/npm/dm/%40noorjs%2Fcore)
![NPM Version](https://img.shields.io/npm/v/%40noorjs%2Fcore?color=blue)
[![license](https://img.shields.io/npm/l/svelte.svg)](LICENSE.md)

# What is NoorJs?

Welcome to NoorJs, a lightweight UI JavaScript framework designed to help you build fast, efficient, and scalable applications. NoorJs is built around the concept of First-Time-Rendering, which means your component is rendered once at the start and won't be re-rendered unless you explicitly choose to. You have full control over when and how your components are rendered, allowing for optimized performance.

Unlike other frameworks, NoorJs renders components directly to the DOM without relying on a Virtual DOM (VDOM). You can modify your component's view effortlessly by calling a simple function, without triggering a re-render.

NoorJs also introduces a powerful way to manage state. You can listen for changes to specific states and react accordingly, ensuring your components stay in sync with your data. Additionally, lifecycle functions enable you to perform tasks like data fetching or state updates at key points in your component's lifecycle.

Sharing data between components is made incredibly simple with the Channel API. Whether you're passing data to child components, parent components, or components outside of the direct scope, the Channel API allows for seamless and efficient data flow.

Continue reading these docs to explore how NoorJs can transform your approach to building modern web applications.

# Key Features

- **<span style="color: #C80036;">Lightweight Framework</span>**: NoorJs is designed to be a minimal and efficient UI JavaScript framework.
- **<span style="color: #C80036;">First-Time-Rendering</span>**: Components are rendered once at the start and won’t be re-rendered unless explicitly chosen.
- **<span style="color: #C80036;">Element-Based Components</span>**: NoorJs builds the UI by treating each component as an individual HTML element, providing a clear and intuitive structure for managing and rendering your application's interface.
- **<span style="color: #C80036;">Direct DOM Rendering</span>**: Components are rendered directly to the DOM without a Virtual DOM (VDOM).
- **<span style="color: #C80036;">Effortless View Modification</span>**: Modify a component’s view by calling a simple function without triggering a re-render.
- **<span style="color: #C80036;">Optimized Performance</span>**: Full control over when and how components are rendered, enhancing performance.
- **<span style="color: #C80036;">Lifecycle Functions</span>**: Manage component behavior with methods for initialization, post-render, and re-rendering.
- **<span style="color: #C80036;">Powerful State Management</span>**: Manage state effectively and react to state changes to keep components in sync with data.
- **<span style="color: #C80036;">Channel API</span>**: Seamlessly share data between components, including child, parent, or components outside the direct scope.
- **<span style="color: #C80036;">Explicit Rendering Control</span>**: Developers have full control over rendering and re-rendering processes.
- **<span style="color: #C80036;">Provides modern framework feature</span>**: NoorJs supports JSX, allowing for familiar syntax in writing UI components.
- **<span style="color: #C80036;">Arab-Driven Framework</span>**: Developed by the Arab community and designed for the global developer community.

# Getting Started

Begin your NoorJs journey by creating a new application with the following command:

```shell
npm create noor@latest
```

For detailed guidance and further exploration, continue with the [Documentation](docs/doc.md).

# Example

This simple counter app will show you the power of NoorJs

```jsx
import { createRoot, renderRoot, element, Component } from "@noorjs/core";

// app component
function App(this: Component) {
  // initializing the component by call the element plug function and setting the component HTML tag
  element("div", this);
  // setting a counter state
  const { getCounter, setCounter } = this.state(0);

  // adding an event listener to increase the counter state whenever the component is clicked
  this.setEvent("onClick", () => {
    // increasing the counter state
    setCounter((c) => c + 1);
    // rerendering the app when the counter is clicked
    this.render();
  });

  console.log("This runs once");

  // returning an arrow function that returns the JSX to be rendered
  return () => <h2>{getCount()}</h2>;
}

// creating the root
const root = createRoot();

// render the component
renderRoot(root, [<App />]);
```

In this simple counter app we initialized our `App` component by using the `element` plug function then we created the counter state with `0` as initial value ,then we added an `onClick` event listener with `setEvent` function to increase the counter state and rerender the component with `this.render` method (This Is The Power Of NoorJs. Render It When You Need It) then we returned JSX.

NoorJs treats each component as an HTML element that you choose when you initialize your component. For more examples see the [Documentation](docs/doc.md/#element-plug).

# Contributing

Please see the [Contributing](CONTRIBUTING.md) Guide and the [Documentation](docs/doc.md) for information on contributing to NoorJs.

# License

[MIT](LICENSE.md)
