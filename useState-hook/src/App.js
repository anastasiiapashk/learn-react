import { useState } from "react";

function App() {
  const [state, setState] = useState({ count: 0, theme: "blue" });

  function decrementCount() {
    setState((prevCount) => {
      return { ...prevCount, count: prevCount.count - 1 };
    });
  }

  function incrementCount() {
    setState((prevCount) => {
      return { ...prevCount, count: prevCount.count + 1 };
    });
  }

  return (
    <>
      <button onClick={decrementCount}>-</button>
      <span>{state.count}</span>
      <span> {state.theme}</span>
      <button onClick={incrementCount}>+</button>
    </>
  );
}

export default App;
