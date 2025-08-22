import { useState, useRef, useEffect } from "react";

function App() {
  const [name, setName] = useState("");
  const renderCount = useRef(1);
  const inputRef = useRef();

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

  function focus() {
    inputRef.current.focus();
  }

  return (
    <>
      <input
        ref={inputRef}
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>My name is {name}</div>
      <div>I rendered {renderCount.current} times</div>
      <button onClick={focus}>Focus</button>
    </>
  );
}

export default App;
