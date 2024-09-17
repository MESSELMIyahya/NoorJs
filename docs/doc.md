# NoorJs Documentation

Welcome to the NoorJs reference documentation, In this page you will learn all the core concepts and API reference that you need to create your next app.

![hero](imgs/documentation.png)

## Table of Contents

1.  [Introduction](#introduction)
2.  [Installation](#installation)
3.  [Basic Usage](#basic-usage)
4.  [Core Concepts](#core-concepts)
    - [Component](#component)
    - [Plugs](#plugs)
    - [JSX](#jsx)
    - [Props](#props)
5.  [API Reference](#api-reference)

    - [Creation & Initialization](#creation-&-IInitialization)
      - [createRoot]()
      - [renderRoot]()
      - [componentCreator]()
      - [createChannel]()
    - [Component Methods](#component-methods)

      - [Attributes & Methods](#attributes--methods)

        - [get() (Method)](#get)
        - [set() (Method)](#set)
        - [methods (Property)](#methods-property)

      - [Styling](#styling)

        - [style() (Method)](#style)
        - [styles() (Method)](#styles)

      - [Events](#events)

        - [setEvent() (Method)](#setevent)
        - [removeEvent() (Method)](#removeevent)

      - [View](#view)

        - [setTextView() (Method)](#settextview)
        - [setView() (Method)](#setview)

      - [State](#state)

        - [state() (Method)](#state-1)
        - [onChange() (Method)](#onchange)

      - [Lifecycle](#lifecycle)

        - [onInit() (Method)](#oninit)
        - [onMount() (Method)](#onmount)
        - [onRender() (Method)](#onrender)

      - [Rendering](#rendering)

        - [render() (Method)](#render)

    - [Built-in Plugs](#built-in-plugs)
      - [Element (Plug)](#element-plug)
      - [Channel (Plug)](#channel-plug)

6.  [Rules & Best Practices](#roles--best-practices)

    - [Plugs-Rules](#plugs-roles)
    - [Rendering & Lifecycle Methods](#rendering--lifecycle-methods)
    - [Channel-Rules](#channel-roles)

7.  [Examples](#examples)

    - [Counting]()
    - [To-do]()

8.  [Contributing](#contributing)
9.  [License](#license)

## Introduction

Welcome to NoorJs, a lightweight UI JavaScript framework designed to help you build fast, efficient, and scalable applications. NoorJs is built around the concept of First-Time-Rendering, which means your component is rendered once at the start and won't be re-rendered unless you explicitly choose to. You have full control over when and how your components are rendered, allowing for optimized performance.

Unlike other frameworks, NoorJs renders components directly to the DOM without relying on a Virtual DOM (VDOM). You can modify your component's view effortlessly by calling a simple function, without triggering a re-render.

NoorJs also introduces a powerful way to manage state. You can listen for changes to specific states and react accordingly, ensuring your components stay in sync with your data. Additionally, lifecycle functions enable you to perform tasks like data fetching or state updates at key points in your component's lifecycle.

Sharing data between components is made incredibly simple with the Channel API. Whether you're passing data to child components, parent components, or components outside of the direct scope, the Channel API allows for seamless and efficient data flow.

Continue reading these docs to explore how NoorJs can transform your approach to building modern web applications.

## Installation

To create your first with NoorJs app run this command

**NPM**

```shell
npm create noor@latest
```

**Yarn**

```shell
yarn create noor
```

**PNPM**

```shell
pnpm create noor
```

**Bun**

```shell
bun create noor
```

then

```shell
cd <your-project-name>
npm install
npm run dev
```

## Basic Usage

NoorJs helps you crate your app fast with without complex API and check this basic counter app

#### main.tsx file

this file has the entrypoint of your app has the createRoot function to create root element to render your app in and renderRoot to render the app in the root element.

```jsx
import { createRoot, renderRoot } from "@noorjs/core";
import App from "./app";

// creating the root
const root = createRoot();

// render the component
renderRoot(root, [<App />]);
```

#### app.tsx file

this file has a simple app component that implements a counting functionality
and increasing the count state whenever the component gets clicked and rerender it once the count state gets changed.

```jsx
import { element, Component } from "@noorjs/core";

function App(this: Component) {
  // initializing the component by call the element plug function and setting the component HTML tag
  element("div", this);
  // setting a count state
  const { getCount, setCount, countRef } = this.state(0);

  // setting a event listener to increase the count state whenever the component is click
  this.setEvent("onClick", () => {
    // increasing the count state
    setCount((c) => c + 1);
  });

  // listening to the state whenever it gets changed and passing the count state ref
  this.onChange(() => {
    // rerendering the app whenever the state gets changed
    this.render();
  }, [countRef]);

  // returning an arrow function that returns the JSX to be rendered
  return () => <h2>{getCount()}</h2>;
}
```

for more examples see [examples section]()

## Core Concepts

You'll learn in this section about the core concepts in NoorJs.

### Component

Component represents a html element and it's function that has some logic and returns an arrow function that returns a JSX and will be used as a pice of UI ,section or even a full page.

**example 1**

```jsx
import { element, Component, FCRendered } from "@noorjs/core";

function App(this: Component): FCRendered {
  element("div", this);
  return () => <div>Hello,World</div>;
}
```

In this example as you can see we imported the `element` plug function,`Component` type and `FCRendered` type and declared a app function that takes `this` with `Component` type as param to add types for the function constructor and uses 'FCRendered' as return type to add return type for the function , Inside the function we called the `element` plug function and passed to it the html tag type and the function constructor to initialize the component and we returned a div element with `hello,World` text.

**Tips**

- You should call the `element` plug function to initialize our component or noorJs will throw error like this `Noor NotCalled: Please call the 'element' function to initialize the component`.
- You should use the `Component` and `FCRendered` types to get full autocomplete in the function constructor and function return
- You Shouldn't declare the component function as an arrow function because arrow function doesn't support constructor `this`.
- You should return an arrow function that returns a JSX inside your component function.

**example 2**

```jsx
import { element, Component, FCRendered } from "@noorjs/core";

function Button(this: Component): FCRendered {
  element("button", this);
  return () => "Click Me";
}

function App(this: Component): FCRendered {
  element("div", this);
  return () => (
    <div>
      Hello,World and <Button />{" "}
    </div>
  );
}
```

In this example we crated `Button` component that was initialized as `button` html element and renders a `Click Me` text and we used this `Button` component inside the `App` component and you can create as many component as you want and use them inside each other.

**example 3**

```jsx
import { element, Component, FCRendered } from "@noorjs/core";

function Logo(this: Component): FCRendered {
  element("img", this);
  // set the img src attribute
  this.set("src", "your-logo-like-or-path");

  return () => null;
}

function Header(this: Component): FCRendered {
  element("header", this);
  return () => (
    <div>
      <h1>Title</h1>
      <Logo />
    </div>
  );
}

function App(this: Component): FCRendered {
  element("main", this);
  return () => <Header />;
}
```

In this example we crated `Logo` component that was initialized as `img` html element and we set the img `src` attribute and the component renders a `null`, we used this `Logo` component inside the `Header` component which is a `header` html element and renders a title and `Logo` component then we the `Header` component inside the App element.

### Plugs

Plugs are functions that are invoked at the top level of a component function, typically as the first operations. They serve various purposes, such as initializing components, adding helpful methods to the component constructor, or managing APIs. For example:

- `element` Plug: Used for initializing the components.
- `channel` Plug: Used for accessing and providing channels.

These plugs help streamline component setup and functionality. See the examples below to familiarize yourself with their usage.

**example 1**

```jsx
import { element, Component, FCRendered } from "@noorjs/core";

function App(this: Component): FCRendered {
  element("div", this);

  this.style("color", "blue");
  return () => <div>Hello,World</div>;
}
```

In this example we called the `element` plug function in the start of our component and we passed the html element tag and the function constructor as params to it , now this `element` plug is the component initializer and it adds many help full methods and properties to our function constructor like the `this.styles` method and each plug has its own functionality like the `channel` plug but only required plug is the `element` plug because it initializes the component.

**Tips**

- The plugs should only be called at top level of a component function and as the first operations , there's some plugs which can be called anywhere at the top level in your function body but is not recommended to do that.
- Every plug takes the constructor as param to add/handle logic some logic in the component function
- Function which is not taking the constructor as param and doesn't add/handle any logic inside constructor object isn't called plug.

### JSX

JSX is a syntax extension for JavaScript that allows you to write HTML-like code directly within your JavaScript files. While there are alternative methods for building components, JSX is commonly used for its simplicity and readability and it describes how the UI will look like.

You can use JSX in your component function by declaring it in variable or returning it from your component function to be rendered render.

The JSX in Noorjs is the same as React's JSX so if you know React this section will just a reminder for you.

**example 1 (helloWorld)**

```jsx
function App(this: Component): FCRendered {
  element("div", this);

  return () => <div>Hello,World</div>; // <== JSX
}
```

In this example we returned a `div` element with `Hello,World` text inside it

**example 2 (Components)**

```jsx
function App(this: Component): FCRendered {
  element("div", this);

  return () => <div>
    <Navbar>
    <div>
        <h3>Countries</h3>
        <ul>
            <li><strong>Algeria</strong></li>
            <li><strong>Egypt</strong></li>
            <li><strong>Palestine</strong></li>
            <li><strong>Saudi Arabia</strong></li>
        </ul>
    </div>
    <Footer/>
  </div>;
}
```

In this example we returned `Navbar` & `Footer` components as list in our `App` component and this's the power of JSX because it describes the UI for us.

**example 3 (Expressions)**

```jsx
function App(this: Component): FCRendered {
  element("div", this);

  const ts = "typescript";

  return () => <div>
  { (720 + 3) * 2  /* => 1446 */ }
  { "javascript".toUpperCase() /* => JAVASCRIPT */ }
  { ts.split('')[0].toUpperCase() + ts.split('')[4] /* => tS */ }
  </div>;
}
```

In this example we implemented expression and it can be a variable, or property, or any other valid JavaScript expression. JSX will execute the expression and return the result.

**example 3 (Expressions/conditions)**

```jsx
function App(this: Component): FCRendered {
  element("div", this);

  const visible = false;

  return () => <div>{visible ? "Yes" : "No"}</div>;
}
```

In this example we implemented in-line condition expressions statement to return `Yes` or `No` and you can implement nested condition statement.

**example 4 (Expressions/null)**

```jsx
function App(this: Component): FCRendered {
  element("div", this);

  return () => (
    <div>
      {
        null // => will render nothing
      }
    </div>
  );
}
```

In this example returned `null` value and when you return `null` you're telling
to render nothing and it commonly used in conditions statements.

**null with conditions statements**

```jsx
function App(this: Component): FCRendered {
  element("div", this);

  const visible = false;

  return () => <div>{visible ? "Yes" : null}</div>;
}
```

**example 5 (Expressions/looping)**

```jsx
function App(this: Component): FCRendered {
  element("div", this);

  return () => (
    <ul>
      {[1, 2, 4, 5].map((e) => (
        <li>{id}</li>
      ))}
    </ul>
  );
}
```

In this example we're looping over an array and returning `li` elements .Looping is as straightforward as using map method in JSX.

**example 5 (properties/attributes)**

```jsx
function App(this: Component): FCRendered {
  element("div", this);

  return () => (
    <form>
      <label htmlFor="name-input" />
      <input id="name-input" placeholder="Name" value="Ali" />
    </form>
  );
}
```

In this example we're passing properties as html attributes to our elements.

**example 5 (methods)**

```jsx
function App(this: Component): FCRendered {
  element("div", this);

  return () => (
    <div>
      <input onInput={(event) => console.log(e.target.value)}></input>
      <button onClick={(event) => console.log("clicked")}>Click</button>
    </div>
  );
}
```

In this example we're passing methods to our elements to fire functions on specific events. As you can see you write methods in camelCase.

**Tips**

- Write methods in elements in camelCase.

**For more docs about JSX visit this [website](https://www.w3schools.com/react/react_jsx.asp)**

### Props

Props (short for properties) are used to pass data from a parent component to a child component, allowing you to create reusable components that behave differently based on the input they receive. Props is an object that cloud contain methods and properties of all types

**example 1 (props)**

```jsx
function ChildComponent(this: Component,{ name,age },:{name:string,age:number}): FCRendered {
  element("h3", this);

  return () => name + " your age is" + age ;
}

function ParentComponent(this: Component): FCRendered {
  element("div", this);

  return () => <div>
  Hello,<ChildComponent name={'Ali'} age={27} />
  </div>; // <== Hello,Ali your age is 27
}
```

In this example we create two components `ParentComponent` and `ChildComponent` which're the parent and child and we added props param that has two properties `name` and `age` with types in the child component function and passed them to `ChildComponent` in `ParentComponent` and this made the `ChildComponent` dynamic component.

**example 1 (methods in props)**

```jsx
function ChildComponent(this: Component,{ getText },:{getText:()=>string}): FCRendered {
  element("h3", this);

  return () => getText();
}

function ParentComponent(this: Component): FCRendered {
  element("div", this);

  const getText = ()=>{
    return "Osama your age is 27";
  }

  return () => <div>
  Hello,<ChildComponent getText={getText} />
  </div>; // <== Hello,Osama your age is 27
}
```

In this example we have two components `ParentComponent` and `ChildComponent` and we added getText method prop param with its type in the child component function and passed getText function that returns string them to `ChildComponent` in `ParentComponent` and called it `ChildComponent`

## API Reference

### Creation & Initialization

Functions used to create and initialize a functionality like render the root or create a component.

#### createRoot()

`createRoot` is function used to crate the root element in the DOM to render the app in , this function takes one optional param witch's a element if you want to use anther element for to render the app to.

```jsx
import { crateRoot } from "@noorjs/core";

const myRoot = crateRoot();
```

Here we created root element and named it `myRoot` , now this element will be used by anther function called `renderRoot` to render your app your app into.

```jsx
import { crateRoot } from "@noorjs/core";

// my root element
const rootElement = document.createElement("div");

const myRoot = crateRoot(rootElement);
```

As we can see we created a html element by `document.createElement` method and passed it in the `createRoot` function to use it as root.

**HINT** : `createRoot` changes the id of your element that you passed to `root`;

#### renderRoot()

`renderRoot` is a function that used to render your app from the root component , it takes two params :

1. `root`: root element that you created with the `createRoot` function.
2. `root component array`: array of root components that hold all your app like `<App/>` component

```jsx
import { crateRoot, renderRoot } from "@noorjs/core";
import App from "./app";

// create my root element
const myRoot = crateRoot();

// render the app component
renderRoot(myRoot, [<App />]);
```

In this code we create a root element which is `myRoot` and we passed it with the `<App/>` component to `renderRoot` function , `renderRoot` function will render the `<App/>` with its nested children into `myRoot` element.

**Warning**
Don't pass the component as normal function like this

```jsx
renderRoot(myRoot, [App]); // => ❌ Will throw an error
```

Pass it as JSX component like this

```jsx
renderRoot(myRoot, [<App />]); // => ✅ Will work
```

#### componentCreator()

`componentCreator` is the function that JSX engine uses to create your component and element inside your JavaScript code.

**example**

Your code will be complied from this

```jsx
const myELement = <div>Hello</div>;
```

to this

```jsx
import { componentCreator } from "@noorjs/core"; // => will be imported by the JSX engine
const myELement = componentCreator("div", null, "Hello");
```

`componentCreator` function accepts 3 params :

1. `type`: which can be html element tag or anther `componentCreator` that returns a component (Not html element).
2. `props`: which is object that holds methods,properties and it can be `null`.
3. `children array` this is the children of the component it can be anther `componentCreator` function or `string` , `null`,`number` or even a JavaScript Expression like `n == c ? c+1 : c*5` or an array of all the prevues types.

**HINT** : The third param `children array` is an array so all of your params after it will be converted into one array wit the JavaScript rest parameters syntax `componentCreator(type,props...children){...}`

Your code will be complied from this

```jsx
// inside your component function body
return ()=> (
  <nav id="nav">
    <h2 className="main-title" id="title" >I love NoorJS</h2>
    <button onClick={(event)=>{
      console.log("You did it");
      console.log(event);
    }}>Click Me</button>
    <Footer rights="..." />
    {
      isLoading ? "loading.." : null
    }
  <main/>
)
```

to this

```jsx
// inside your component function body
return () =>
  componentCreator(
    "nav",
    { id: "nav" },
    componentCreator(
      "h2",
      { className: "main-title", id: "title" },
      "I love NoorJS"
    ),
    componentCreator(
      "button",
      {
        onClick: (event) => {
          console.log("You did it");
          console.log(event);
        },
      },
      "Click Me"
    ),
    componentCreator(Footer, { rights: "..." }),
    isLoading ? "loading.." : null
  );
```

In this code we see that the JSX engine complies each component or element into `componentCreator` function with props and children.

**HINT** : We don't recommend you to use the `componentCreator` function and use JSX instead for readability.

#### createChannel

`createChannel` is a function that create the channel that used to share your data between your component and it used with the `channel` plug function to work and it takes no params.

```jsx
import { createChannel } from "@noorjs/core";

// create a channel
const myChannel = createChannel();
```

Here we crated `myChannel` channel object with the `createChannel` function.

```ts
import { createChannel } from "@noorjs/core";

interface AuthChannelType {
  userName: string | null;
  email: string | null;
  picture: string | null;
  authenticated: boolean;
}

// create a channel
const authChannel = createChannel<AuthChannelType>();
```

To get auto component with all the channel data types we passed the `AuthChannelType` type to the function as a generic and the `createChannel` will use it as your data type.

To get the full channel API functionality with `createChannel` go and read [channel]() plug section.

### Component Methods

Are the main methods inside the component function constructor and where set by the `element` plug function in the component initialization process.

#### Attributes & Methods

Methods & properties to control your component's element.

##### get()

`get` it is a method in the constructor that gives you the ability to get your element's properties like `class`,`styles`,`id` etc... , it takes the property name as a param and returns the value of it.

```jsx
import { crateRoot,Component,FCRendered } from "@noorjs/core";

function App(this: Component): FCRendered {
  element("h2", this);

  const myId = this.get("id");
  const myClassName = this.get("className");

  return () => myId;
}
```

In this code we used the `get` method to get the `id` and `class` properties.

**HINT** : This method is added by the `element` plug.

##### set()

`set` it is a method in the constructor that gives you the ability to set your element's properties and it takes two params:

1. `property`: the property name.
2. `value`: the value that will be set the property.

```jsx
import { crateRoot,Component,FCRendered } from "@noorjs/core";

function App(this: Component): FCRendered {
  element("h2", this);
  // set the className
  this.set("class","text-3xl color-red-500");

  const myClassName = this.get("class")

  return () => "NoorJS";
}

```

In this code we set the `class` property to a new value and we got it with the `get` method.

**HINT** : This method is added by the `element` plug.

##### methods (property)

`methods` is an object property in your component function constructor that includes all the native element DOM methods (NOT EVENTS) like `click`,`scroll`,`addEventListener`.. .

```jsx
import { crateRoot,Component,FCRendered } from "@noorjs/core";

function App(this: Component): FCRendered {
  element("button", this);

  // add an event listener when button is clicked
  this.methods.addEventListener('click',()=>{
    console.log('clicked');
  });

  // click the button
  this.methods.click();

  return () => "Click Me";
}
```

As we can see we used the `addEventListener` method from the `methods` object property to add an event listener when button is clicked and then we clicked that button by calling the `click` method in the `methods` property.

**HINT** `addEventListener` method isn't the recommended way to add events to your element instead there's better way to it in the [event section]()

```jsx
import { crateRoot,Component,FCRendered } from "@noorjs/core";

function App(this: Component): FCRendered {
  element("section", this);

  // scroll to this element section
  this.methods.scroll({smooth:true});

  return () => (...);
}
```

Here we used the `scroll` method from the `methods` object property to scroll to this component element.

**HINT** We don't recommend you to use the action methods like (`click`,`remove`,`scroll`,`focus`) inside the component function body because they will be invoked before the component element is rendered so they will be useless instead we recommend you to use them inside the `onMount` lifecycle method because it will invoked after the first/initial component render and this will let the action methods work properly.

**HINT** : This method is added by the `element` plug.

#### Styling

Methods used to style and add styles to your component element.

##### style()

`style` it is a method in the constructor that let you set style to a specific css property like (`color`,`backgroundColor`,`padding`,etc..) in your component element ,it takes two params :

1. `css property`: the css property that you want to style.
2. `style`: the style that you want to set that property.

```jsx
import { Component,FCRendered } from "@noorjs/core";

function Title(this: Component): FCRendered {
  element("h2", this);
   // setting the color
  this.style("color","red");
  // setting the padding
  this.style("padding","4px 6px");
  // setting the font size
  this.style("fontSize","1.2em");

  return () => "NoorJs";
}
```

In this example we set some styles to `color`,`padding` and `fontSize` css properties of our component element.

**HINT** : This method is added by the `element` plug.

##### styles()

`styles` it is a method in the constructor that let you set multiple styles to the component element and it has one param which is `object of css properties` css properties with their styles.

```jsx
import { Component,FCRendered } from "@noorjs/core";

function Title(this: Component): FCRendered {
  element("button", this);

  // set some styles to the button
  this.styles({
    width:"12em",
    border:"none",
    color:"white",
    backgroundColor:"green",
    borderRadius:"30px",
    padding:"4px 6px"
  })

  return () => "Download";
}
```

As you can see here we set multiple styles to our button.

**HINT** : This method is added by the `element` plug.

#### Events

Methods that let you add DOM events to your component element.

##### setEvent()

`setEvent` it is a method in the constructor that let you add events to your component element and it the recommended to add events ,this method takes two params:

1. `event`: the event name like `onClick`,`onBlur` and all the dom events.
2. `callback`: a callback function that will run whenever this event is triggered and it has one param which is the event object.

```jsx
import { Component,FCRendered } from "@noorjs/core";

function Title(this: Component): FCRendered {
  element("button", this);

  // add onClick event
  this.setEvent("onClick",()=>{
    console.log("Clicked me");
  })

   // add onMouseOver event
  this.setEvent("onMouseOver",()=>{
    console.log("Mouse is over me");
  })

  return () => "Hire me";
}
```

In this code we added two events with the `setEvent` method ,first event is `onClick` and the secund is `onMouseOver` event and we set a callbacks so whenever these events get triggered they will be called.

**HINT** : The methods that you set using this method are set to the `element dom's events` and you have to remove them if you don't need them to remove them use the [removeEvent]() method.

**HINT** : This method is added by the `element` plug.

##### removeEvent()

`setEvent` it is a method in the constructor that let you remove events from your component or events that where set by the `setEvent` method ,this method takes one param :

1. `event`: event name that you want to remove like `onClick`,`onBlur`.

```jsx
import { Component,FCRendered } from "@noorjs/core";

function Title(this: Component): FCRendered {
  element("button", this);

  // add onClick event
  this.setEvent("onClick",()=>{
    console.log("Clicked me");
  })

  // remove the onClick event
  this.removeEvent("onClick");

  return () => "Hire me";
}
```

As we can see here we added `onClick` event with the `setEvent` method and then we removed this event by using the `removeEvent` method with just the name of the event and without passing the event callback function.

**HINT** : You should use the removeEvent inside function like to remove the event when the number is 5 or something or by clicking a button ,don't remove after you set it like we did in the last example because it's just for showing you the method.

**HINT** : This method is added by the `element` plug.

#### View

Methods that let you update the view (innerHTML/innerText) of your component element without rerendering the component.

##### setView()

`setView` it is a method in the constructor that gives you the ability to change the `innerHTML` of your component element without rerendering the component ,this function takes one param :

1. `view`: which is a `string` that will set to the component element's `innerHTML`.

```jsx
import { Component,FCRendered } from "@noorjs/core";

function Title(this: Component): FCRendered {
  element("div", this);

  this.setEvent("onClick",()=>{
    this.setView("<a>link</a>")
  })

  return () => "no thing";
}
```

In this example we added a event that will triggered whenever the user clicks on `div`
and this will call a function that has the `setView` inside it to set the `innerHTML` of our body to a html `a` link element.

```jsx
import { Component,FCRendered } from "@noorjs/core";

function Title(this: Component): FCRendered {
  element("button", this);

  this.setView("use React");

  return () => "use Noor";
}
```

In this code the `setView` won't work because the method is called before the initial render so it set the `innerHTML` before the initial and initial render will replace it.

**HINT** : This method shouldn't be called inside the component function body because it will be replaced by the initial render instead use it inside anther function like event ,lifecycle or function that will be called after the first render like the [onMount]() method.

**HINT** : This method is added by the `element` plug.

##### setTextView()

`setTextView` like the `setView` method it is a method in the constructor that gives you the ability to change the `innerText` of your component element without rerendering the component ,and also takes one param :

1. `view`: `string` that will set to the component element's `innerText`.

```jsx
import { Component,FCRendered } from "@noorjs/core";

function Title(this: Component): FCRendered {
  element("button", this);
  // set an event that will be called wherever the mouse is over this button
  this.setEvent("onMouseOver",()=>{
    // set the innerText
    this.setView("is over me")
  })

  // set an event that be called wherever the mouse is out of this button
  this.setEvent("onMouseOut",()=>{
    // set the innerText
    this.setView("alone")
  })

  return () => "alone";
}
```

As we see we add two events the first one will be triggered whenever the mouse is over the button and calls a callback function that sets the `innerText` to some text and the secund event will be triggered whenever the mouse is out of the button and calls a callback function that set `innerText` to some text.

**HINT** : The same role `setTextView` method shouldn't be called inside the component function directly you should call it inside a function that will be triggered after the initial render like the [onMount]() method.

**HINT** : This method is added by the `element` plug.

#### State

Methods to set/get,manage,watch States in your component.

##### State()

`state` it is a method in the constructor that lets you create and manage states in your component and this function takes just one param :

1. `initialValue`: the initial value of this state it can be any this `string`,`number`,`array`,`object`.. .

and it returns an array of three items :

1.`getter()` a getter for function for getting the current value of the state.

2.`setter()` a setter for function for setting value of the state and it takes one param which' the `newValue`.

2.`ref` a reference `string` for this state in the constructor (You'll need it in [onChange()]() method) .

```jsx
import { Component,FCRendered } from "@noorjs/core";

function Title(this: Component): FCRendered {
  element("button", this);
  // setting a name state and destructuring the array items
  const [getName,setName] = this.state("Ali");

  // resetting the name
  setName("Anas");
  setName("Mohamed");

  this.setEvent("onClick",()=>{
    // resetting the name
    setName("Ahmed");
    console.log(getName());
  })

  return () => getName();
}
```

In this example we create a `name` state that has a `string` as initial value , then we reset it to anther `string` value and then also we reset it anther value ,also we added
a event that will be triggered when the button is clicked and call a function that sets the `name` state to a new `string` value ,we returned the `name` state as the button view.

**HINT** : When the state is changed the component won't rerender ,if you want to do that you do it manual by the [render()]() method.

**HINT** : This method is added by the `element` plug.

##### onChange()

`onChange` it is a method in the constructor that gives you the ability to watch or know when some states get changed and it will call a callback function when the state gets changed ,this method take two params:

1. `callback` a callback function that will be called whenever the states changed.

2. `references array` array of states references ,put the reference of the state in the this array if you want to know when the state gets changed.

```jsx
import { Component,FCRendered } from "@noorjs/core";

function Title(this: Component): FCRendered {
  element("button", this);
  // setting a counter state and destructuring the array items
  const [getCounter,setCounter,counterRef] = this.state(0);

  // watch the state when it gets changed
  this.onChange(()=>{
    // log a message
    console.log("State changed",getCounter());
  },[counterRef])
  // add 1 to the counter state when the use click on the button
  this.setEvent("onClick",()=>{
    setCounter((e)=>e+1);
  });

  return () => "Click Me";
}
```

In this code we create the `counter` state and set its initial value to `0` then we add the called the `onChange` method and we passed to it the `callback` function that logs the new value the `counter` state whenever it gets called and passed an array of the states references to watch them and added the `counterRef` in it ,after that we set a `onClick` event to calls a function that increases the `counter` state whenever it gets triggered.

You can use the `onChange` inside other functions like this example

```jsx
import { Component, FCRendered } from "@noorjs/core";

function Title(this: Component): FCRendered {
  element("button", this);
  // setting a name state destructuring the array items
  const [getName,setName,nameRef] = this.state("Mosa");

  // click event
  this.setEvent("onClick", () => {
    // start watching the name state when it gets changed
    this.onChange(() => {
      // log the name
      console.log("your now is:",getName());
    }, [nameRef]);
  });

  // mouse over event
  this.setEvent("onMouseOver",()=>{
    // setting the name state
    setName((n)=>n=="Mosa" ?  "Ali" : "Mosa");
  })

  return () => "Click Me";
}
```

As we can see in this code we won't know when the state gets changed and what its new value until we click to start watching it and logging to the console when it gets changed.

**HINT** : You can use the `onChange` inside other functions.
**HINT** : This method is added by the `element` plug.

#### Rendering

Methods to render/rerender the component

##### Render()

`render` it is a method in the constructor that full control to rerender your component it looks like the the `setView` & `setTextView` but the different between that view setters and the `render` method that the it calls the component returned JSX function to recreates and regenerate all the component with the new values data and then render them to the `innerHTML` of the element of this component.

```jsx
import { Component,FCRendered } from "@noorjs/core";

function Title(this: Component): FCRendered {
  element("button", this);
  // counter state
  const [getCounter,setCounter,counterRef] = this.state(0);

  // click event
  this.setEvent("onClick",()=>{
    // increase the counter state
    setCounter((c)=>c+1);
  });

  // when the counter state gets changed

  this.onChange(()=>{
    // rerendering the component to get a new view with the latest values
    this.render()
  },[counterRef])


  return () => getCount();
}
```

In this code we created a `counter` state and set `onClick` event to increase the `counter` state when it gets triggered and added a `callback` to the `onChange` method to rerender the component whenever the `counter` gets changed so this will give us the newest value of the `counter` in the button.

**HINT** It's not recommended to use the `render` method in component that don't return a JSX instead use `setView` & `setTextView` method because the power the `render` method to rerender the JSX not the normal strings.

**HINT** It's not recommended to use the `setView` or `setTextView` methods in components that return JSX because they will replace the `innerHTML` and `innerText` instead use the `render` method.

```jsx
import { Component,FCRendered } from "@noorjs/core";

function Title(this: Component): FCRendered {
  element("button", this);
  // counter state
  const [getCounter, setCounter] = this.state(0);
  // list state
  const [getList, setList,listRef] = this.state<number[]>([]);

  // function new item to the list
  const addItem = () => {
    // increase the counter value
    setCounter((c) => c + 1);
    // assigning new Item to the counter
    const newItem = getCounter();
    // adding the new Item to the list
    setList((list) => [...list, getCounter()]);
  };

  // rerender the component when the list state gets changed
  this.onChange(()=>{
    this.render();
  },[listRef])

  return () => (
    <div>
      <ul>
        {getList().map((item) => (
          <li>{item}</li>
        ))}
      </ul>

      <button onClick={addItem}>Add Item</button>
    </div>
  );
}
```

In this simple app we created two states `counter` and `list` and we create an arrow function named addItem which increases the `counter` state and add it as new item to the `list` state ,then we added `onChange` method that take a `callback` function that rerenders the component whenever the `list` state gets changed using the `listRef` which is the `list` state reference ,after that we returned a function that returned a JSX and this JSX includes `button` element that has `onClick` prop method which is assigned to the `addItem` function and also it includes `ul` list and we loop over the `list` and returning `li` elements with `item` as text.

whenever the user clicks on the button the `counter` will be increased and new item add to the `list` state that will triggered the `onChange` method and render the component to see the new item in the website(view).

**HINT** : This method is added by the `element` plug.

#### Lifecycle

Lifecycle Methods are methods in the constructor that help you run a `callback` functions during the lifecycle of the component like initialization , initial render and rerendering .

##### onInit()

`onInit` it is a method in the constructor that you can use it to run a function when the component is initialized and before the initial render and it accepts one param which is the `callback` function that you want to run.

```jsx
import { Component,FCRendered } from "@noorjs/core";

function Title(this: Component): FCRendered {
  element("button", this);

  // run a function when the component is initialized
  this.onInit(()=>{
      console.log("component initialized");
  })

  return ()=> "click"
}
```

In this example the `callback` that we passed to the `onInit` method will run when the component is initialized and before the first render.

**HINT** The difference between code in the component function body and the code in the `onInit` method that the component function when the comwill be called firstponent is initialized then the component gets initialized then the lifecycle methods run.

**WHEN TO USE** `onInit` method is the best method for data fetching and initialization process like connecting to websocket or authentication verification.

**WHEN NOT TO USE** Don't use this method in DOM logic and actions like clicking a button or rendering and changing the view with `render()` ,`setView()` and `setTextView()` methods because it get ran before the initial render.

**HINT** : This method is added by the `element` plug.

##### onMount()

`onMount` it is a method in the constructor that you can use it to run a function after the initial render and like the `onInit` method it also accepts one param which is the `callback` function that you want to run.

```jsx
import { Component,FCRendered } from "@noorjs/core";

function Title(this: Component): FCRendered {
  element("button", this);

  // run a function when the component is initialized
  this.onInit(()=>{
      console.log("FIRST(1): component initialized");
  })

  // run a function after the initial render
  this.onMount(()=>{
      console.log("SECOND(2):after the initial render");
  })

  return ()=> "click"
}
```

In this code the `onMount` method will be called after the `onInit` method because the `onMount` method will be called once after the initial render.

**WHEN TO USE** `onMount` method is the best method for interacting with the DOM and DOM action methods like `click`,`scroll`... because it gets called directly after initial render and you can also use it for data fetching.

**HINT** : This method is added by the `element` plug.

##### onRender()

`onRender` it is a method in the constructor that you can use it to run a function gets rerendered unlike the `onMount` method `onRender` won't be called after the initial render it will be called just after you component get rerendered by the [render]() method.

```jsx
import { Component,FCRendered } from "@noorjs/core";

function Title(this: Component): FCRendered {
  element("button", this);

  // add an event to rerender the component gets clicked
  this.setEvent("onClick",()=>{
      this.render();
  });

  // run a function when component gets rerender render
  this.onRender(()=>{
      console.log("component rerendered");
  })

  return ()=> "click"
}
```

In this example the `onRender` method won't be called until we rerender the component by clicking the button to invoke a function that calls the `render` method.

**WHEN TO USE** `onRender` is useful for debugging and conditions like checking states every rerender and to know when your component has been rerendered.

**WHEN-NOT-TO-USE** `onRender` isn't the method that you're going to use so often so try not use it in complex logic use `onMount` or `onInit` instead.

**HINT** : This method is added by the `element` plug.

### Built-in Plugs

Built-in Plugs are plugs built into the NoorJs core and each one of them provides a different for more about plugs see [Plugs core concept]()

#### Element Plug

`Element` plug is the most used plug because you can create a valid component without it , it initializes component ,creates the component element and adds the [Component Methods]() to the component function constructor and this plug should be called always as the top-level of your component function and as the first operation. this `element` plug takes two params :

1. `HTML TAG` The element html tag that you want your component element to be.
2. `constructor (this)` the component function constructor.

```jsx
import { element, Component, FCRendered } from "@noorjs/core";

function Button(this: Component): FCRendered {
  // initialize the component
  element("button", this);

  return () => "Click me";
}
```

In this example we created a `Button` component then we used the `element` plug to initialize this component as `button` html element and we passed it the component function constructor to add the Component Methods to it.

```jsx
import { element, Component, FCRendered } from "@noorjs/core";

function App(this: Component): FCRendered {
  // initialize the component
  element("div", this);

  // style the component
  this.styles({
    color:"red",
    fontSize:"1.2em"
  })

  return () => (<div>
    <h2>I Love NoorJS</h2>
  </div>);
}
```

I this code we initialized our component with the `element` plug and we added some styles with the [styles]() method that was added by the `element` plug.

The `element` adds many methods to your constructor that help you to interact with the DOM add states and more and you use can read about each one of them in the [Component Methods]() section and this's a list of them.

- [get()]() method (let you get the component element attributes/properties).
- [set()]() method (let you set the component element attributes/properties).
- [methods]() property (include all the DOM action methods).
- [style()]() method (let you style a specific css property in your component element).
- [styles()]() method (let you style many css properties in your component element).
- [setEvent()]() method (let you add an events to your component element).
- [removeEvent()]() method (let you remove the added events from your component element).
- [setView()]() method (let you set the innerHTML of your component element).
- [setTextView()]() method (let you set the innerText of your component element).
- [state()]() method (let you create a state in your component).
- [onInit()]() lifecycle method (let you do something after the initialization of the component).
- [onMount()]() lifecycle method (let you do something after the initial/first of the component).
- [onRender()]() lifecycle method (let you do something when the component get rerendered by the `render` method).
- [render()]() method (let you rerender the component).

**HINT** Always use `element` plug to initialize your component.

#### Channel Plug

`channel` is a plug that let you use the channel API and provide or access a channel , and this plug is should be used with a channel object that was created by th [createChannel] function and it takes one param and returns two methods.

Params:

1. `constructor (this)`: the component function constructor.
   Return:
1. `Accessor`: a function that the takes channel object as a param and returns the data that was provided by this channel.
1. `Provider`: a function that let provide a data using a channel object ,it takes two params the first one it the channel object that use want to provide that data through and the second one is the data that you want to provide and it should be `object` ,he second param is optional because the `provider` method returns a `value` method that let you set the data ,(NoorJS will throw an error if you set the data with the second param and with the `value` method UES-ONE-OF-THEM).

Before we start doing some code we should know that in NoorJS Channel API there're three different way of providing data

1. Parent-To-Child
2. Child-To-Child (Also known as Peer-To-Peer) (You won't find this in another Library)
3. Child-To-Parent (You won't find this in another Library).

##### Parent-To-Child Example

In this example we'll learn how to shear data from Parent-To-Child.

**app.tsx**

```jsx
import { createChannel,element,Component,FCRendered } from "@noorjs/core";
// import my home section component
import HomeSection from "./homeSection";

// channel type
interface ThemeChannelTypes {
  getTheme:()=>"dark"|"white";
  setTheme:(theme:"dark"|"white")=>void
}

// create a channel using ThemeChannelTypes type
export const myThemeChannel = createChannel<ThemeChannelTypes>();

// create my App component
function App(this: Component): FCRendered {
  // initialize the component
  element("div", this);
  // create a theme state
  const [getTheme,setTheme,themeRef] = this.state<"dark"|"white">("white") // default theme is 'white'

  // use the channel plug to provide this theme via myThemeChannel channel
  channel(this) // pass it the component function constructor
  .provider(myThemeChannel) // pass it the channel object
  .value({ // data that I want to shear
    // add the theme state getter & setter function
    getTheme,
    setTheme
  });

  // change some styles when the theme gets changed

  this.onChange(()=>{
    this.style("transition","all 300ms");
    this.style("backgroundColor",getTheme() == "dark" ? "black" : "white")
    this.style("color",getTheme() == "dark" ? "white" : "black")
  },[themeRef])

  return () => (<div>
    <HomeSection/>
  </div>);
}
```

**homeSection.tsx**

```jsx
import { createChannel,element,Component,FCRendered } from "@noorjs/core";
import { myThemeChannel } from "./app";

// create my HomeSection component
function HomeSection(this: Component): FCRendered {
  // initialize the component
  element("div", this);
  // accessing the provided data from the myThemeChannel cannel
  const { getTheme,setTheme } =  channel(this) // pass it the component function constructor
  .accessor(myThemeChannel) // access the data by passing the channel object

  // function to toggle the theme
  const toggle = ()=>{
    // toggling the theme
    setTheme(getTheme() == "dark" ? "white" : "dark")
  }

  return () => (<div>
    <h2>Home Section</h2>
    <button onClick={toggle} >Toggle Theme</button>
  </div>);
}
```

In this example we created `myThemeChannel` channel and exported it and we created two components the first one the `App` component which is the provider of the data and we created `theme` state and we used the `channel` plug to shear the `theme` state getter and setter methods via `myThemeChannel` channel by using the `provider` method that the `channel` plug returns and we called a `onChange` function to change some styles when the `theme` state gets changed using the `themeRef`, we retune the `HomeSection` component.

then use create the `HomeSection` component that uses the `channel` plug returned `accessor` method to access the sheared data via the `myThemeChannel` channel and we declared a `toggle` arrow function to toggle the sheared theme state and passed this function to a button's `onclick` event method.

When the use clicks the button the theme state will be toggled and styles will be changed because we're watching it in the `App` component when it gets changed to change the styles based the theme.

##### Child-To-Child Example

now we'll learn how to shear data from Child-To-Child using the same theme toggle app.

**app.tsx**

```jsx
import { element,Component,FCRendered } from "@noorjs/core";
// import my MainSection component
import MainSection from "./mainSection";
// import my ToggleButton component
import ToggleButton from "./toggleButton";

// create my App component
function App(this: Component): FCRendered {
  // initialize the component
  element("div", this);

  // returning the children
  return () => (<div>
    <ToggleButton/> {/* => Accessor */}
    <MainSection/> {/* => Provider */}
  </div>);
}
```

**toggleButton.tsx**

```jsx
import { createChannel,element,Component,FCRendered } from "@noorjs/core";
import {myThemeChannel} from "./homeSection"

// create my ToggleButton component
function ToggleButton(this: Component): FCRendered {
 // initialize the component
  element("div", this);
  // accessing the provided data from the myThemeChannel cannel
  const theme_chan = channel(this) // pass it the component function constructor
  .accessor(myThemeChannel) // access the data by passing the channel object

  // function to toggle the theme
  const toggle = ()=>{
    // toggling the theme
    theme_chan.setTheme(theme_chan.getTheme() == "dark" ? "white" : "dark")
  }

  return () => (<div>
    <h2>Toggle Theme</h2>
    <button onClick={toggle} >Toggle Theme</button>
  </div>)
  ;
}
```

**mainSection.tsx**

```jsx
import { createChannel,element,Component,FCRendered } from "@noorjs/core";
import { myThemeChannel } from "./app";

// channel type
interface ThemeChannelTypes {
  getTheme:()=>"dark"|"white";
  setTheme:(theme:"dark"|"white")=>void
}

// create a channel using ThemeChannelTypes type
export const myThemeChannel = createChannel<ThemeChannelTypes>();

// create my MainSection component
function MainSection(this: Component): FCRendered {
  // initialize the component
  element("div", this);
   // create a theme state
  const [getTheme,setTheme,themeRef] = this.state<"dark"|"white">("white") // default theme is 'white'

  // use the channel plug to provide this theme via myThemeChannel channel
  channel(this) // pass it the component function constructor
  .provider(myThemeChannel) // pass it the channel object
  .value({ // data that I want to shear
    // add the theme state getter & setter function
    getTheme,
    setTheme
  });

  // change some styles when the theme gets changed

  this.onChange(()=>{
    this.style("transition","all 300ms");
    this.style("backgroundColor",getTheme() == "dark" ? "black" : "white")
    this.style("color",getTheme() == "dark" ? "white" : "black")
  },[themeRef])


  return () => (<div>
      <h3>Some Title Here</h3>
      <p>
      This is a paragraph and this's anther paragraph
      </p>
  </div>);
}
```

In this example we created the `App` component that renders two (peer-to-peer) children component.

Let's start with the `MainSection` which is the channel provider , we created `myThemeChannel` channel and used it in this component to provide the `theme` state and we called the `onChange` function to change some styles when the `theme` state gets changed using the `themeRef`.

In the other hand in the `ToggleButton` component which is the accessor , we accessed the `theme` state using the `channel` plug returned `accessor` method and assigned that sheared data in `theme_chan` var **(if we destructure it and the provider component hasn't rendered yet and the channel data is still empty we'll get an error ,so to access it after the provider component has set the data in the channel we should assign it to a var to access what is inside it.)** then we created the `toggle` arrow function to toggle the theme and passed it to the onclick in the button.

When we click button the theme will be changed.

##### Child-To-Parent Example

now we'll also learn how to shear data from Child-To-Parent using the same theme toggle app.

**app.tsx**

```jsx
import { element,Component,FCRendered } from "@noorjs/core";
// import my ToggleButton component
import ToggleButton , { myThemeChannel } from "./toggleButton";

// create my App component
function App(this: Component): FCRendered {
  // initialize the component
  element("div", this);

  // accessing the provided data by the ToggleButton child
  const theme_chan =  channel(this) // pass it the component function constructor
  .accessor(myThemeChannel) // access the data by passing the channel object


  const getCurrent = ()=>{
    // logging the theme that was provided by the
    console.log(theme_chan.getTheme)
  }


  // returning the children
  return () => (<div>
    <ToggleButton/>
    <button onClick={getCurrent}>Get Current Theme</button>
  </div>);
}
```

**toggleButton.tsx**

```jsx
import { createChannel,element,Component,FCRendered } from "@noorjs/core";

// channel type
interface ThemeChannelTypes {
 getTheme:()=>"dark"|"white";
 setTheme:(theme:"dark"|"white")=>void
}

// create a channel using ThemeChannelTypes type
export const myThemeChannel = createChannel<ThemeChannelTypes>();


// create my ToggleButton component
function ToggleButton(this: Component): FCRendered {
// initialize the component
 element("div", this);
 const [getTheme,setTheme] = this.state("white");


  //
  this.onInit(()=>{
    // checking the theme in the cookies
    // code ...
    setTheme("dark");
  })

   // use the channel plug to provide this theme via myThemeChannel channel
  channel(this) // pass it the component function constructor
  .provider(myThemeChannel) // pass it the channel object
  .value({ // data that I want to shear
    getTheme
  });

 return () => (<div>
   <h2>Theme</h2>
 </div>)
 ;
}
```

In this app we created the `App` component which has the `ToggleButton` as child and the `App` is an accessor and it uses the `channel` plug returned `accessor` method to access the `myThemeChannel` channel data and then we created `getCurrent` arrow function that logs the current theme by using the `theme_chan` which has the sheared data and then we passed it to the onclick in the button.

We create `ToggleButton` component which is the provider of the `myThemeChannel` channel , in this component we create the `theme` state then we added `onInit` method to check the theme in cookies and set it to the `theme` state, then we used the `channel` plug to shear the data via the `myThemeChannel` channel.

When the user clicks the button it will logs the current theme by accessing it form the child.

### Rules & Best Practices

These are a list of role and best practices that you should follow for building performance, scalable and bug-free apps

#### Plugs Rules

- Always use plugs and the top-level of your component function.
- Don't use plugs inside other functions.
- Try to use as the first operation in your component function.

#### Rendering & Lifecycle Methods

- Don't use `onInit()` lifecycle method to in interacting with the DOM because it gets invoked before the component first/initial render.
- Don't use the `render()` method inside the lifecycle methods.
- Use the DOM action methods like `click`,`scroll`... inside the `onMount()` life lifecycle method because it gets invoked after the initial render.
- Use the `render()` method to rerender component that has JSX and if the component has just simple string,number use the `setView` and `setTextView` methods.
- Don't use `setView` and `setTextView` methods inside the component that has JSX because they'll clear the `innerHTML` and `innerText` and set the new view instead use `render()` method.

#### Channel Rules

- Don't provide and access the same channel in the component and NoorJS will throw an error because you can't access the same channel that you're providing and it bad practice.
- When component accessing a channel that was provided by child or a peer component (component which is not your component's parent or child) don't destructure the data the `accessor` method returns because the data won't get updated instead assign the returned `accessor` method data to a variable and it inside other functions and don't use it in the component function body because you're trying to access it before even it gets provided by the child or the peer component.

## Contributing

Please read the [contributing guide](/CONTRIBUTING.md).

## License

Licensed under the [MIT license](https://github.com/MESSELMIyahya/NoorJs/blob/main/LICENSE).
