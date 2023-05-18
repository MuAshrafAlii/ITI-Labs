// Parent component
import React, { useState } from "react";
import ChildComponent from "./Child";

function ParentComponent() {
  const [dataFromChild, setDataFromChild] = useState(null);

  function handleDataFromChild(data) {
    setDataFromChild(data);
  }

  return (
    <div>
      <ChildComponent
        onData={handleDataFromChild}
        dataFromParent="hii i am data from parent"
      />
      {dataFromChild && <p>Data from child: {dataFromChild}</p>}
    </div>
  );
}

export default ParentComponent;
