import { Component, element, FCRendered } from "@noorjs/core";

const data: { name: string; age: number; marks: number[] }[] = [
  { name: "Alice", age: 23, marks: [85, 92, 78] },
  { name: "Bob", age: 21, marks: [74, 80, 90] },
  { name: "Charlie", age: 22, marks: [88, 76, 91] },
  { name: "Diana", age: 24, marks: [92, 89, 85] },
  { name: "Eve", age: 20, marks: [67, 75, 80] },
  { name: "Frank", age: 25, marks: [78, 83, 72] },
  { name: "Grace", age: 23, marks: [90, 84, 95] },
  { name: "Hank", age: 22, marks: [65, 78, 71] },
  { name: "Ivy", age: 24, marks: [87, 90, 83] },
  { name: "Jack", age: 21, marks: [79, 81, 75] },
  { name: "Kate", age: 22, marks: [94, 88, 90] },
  { name: "Leo", age: 20, marks: [72, 84, 79] },
  { name: "Mia", age: 23, marks: [91, 89, 92] },
  { name: "Nate", age: 21, marks: [73, 70, 68] },
  { name: "Olivia", age: 22, marks: [88, 94, 87] },
  { name: "Paul", age: 24, marks: [77, 81, 79] },
  { name: "Quincy", age: 25, marks: [85, 83, 86] },
  { name: "Rose", age: 23, marks: [89, 90, 91] },
  { name: "Sam", age: 22, marks: [76, 82, 79] },
  { name: "Tina", age: 21, marks: [68, 75, 73] },
  { name: "Uma", age: 24, marks: [93, 95, 92] },
  { name: "Victor", age: 20, marks: [74, 79, 80] },
  { name: "Wendy", age: 23, marks: [82, 88, 85] },
  { name: "Xander", age: 22, marks: [70, 74, 76] },
  { name: "Yara", age: 21, marks: [95, 92, 94] },
  { name: "Zane", age: 24, marks: [83, 87, 82] },
  { name: "Amy", age: 25, marks: [79, 84, 81] },
  { name: "Ben", age: 23, marks: [92, 89, 90] },
  { name: "Cathy", age: 22, marks: [87, 85, 91] },
  { name: "David", age: 21, marks: [78, 81, 77] },
];

function App(this: Component): FCRendered {
  element("div", this);

  const [getList, setList, listRef] = this.state(data);

  // remove element
  const removeIt = (name: string) => {
    setList((e) => e.filter((p) => p.name != name));
  };

  // render when the list gets changed
  this.onChange(() => {
    this.render();
  }, [listRef]);

  console.log("this will log once !!!");

  return () => (
    <div style={{ color: "black" }}>
      {getList().map((person) => (
        <div
          style={{
            display: "flex",
            gap: "5px",
            alignItems: "center",
            marginBottom: "5px",
          }}
        >
          <div>{person.name}</div>
          <div style={{ color: "color" }}>{person.age}</div>
          <div style={{ backgroundColor: "white", display: "flex", gap: "2" }}>
            {person.marks.map((e) =>
              e >= 80 ? (
                <span style={{ color: "green", padding: "0 5px" }}>{e}</span>
              ) : (
                <span style={{ color: "red", padding: "0 5px" }}>{e}</span>
              )
            )}
          </div>
          <button onClick={() => removeIt(person.name)}>X</button>
        </div>
      ))}
    </div>
  );
}

export default App;
