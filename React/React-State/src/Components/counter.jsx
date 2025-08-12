import { useState } from "react";

export default function Counter() {
  let [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
    console.log(`Count: {count}`);
  }

  return (
    <div>
      <button onClick={increment}>Count: {count}</button>
    </div>
  );
}
