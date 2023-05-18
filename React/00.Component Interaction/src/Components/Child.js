// Child component
import React from "react";

function ChildComponent(props) {
  function handleClick() {
    const data = "Hello from child!";
    props.onData(data);
  }

  return (
    <div>
      <p>{props.dataFromParent}</p>
      <button onClick={handleClick}>Send data to parent</button>
    </div>
  );
}

export default ChildComponent;
