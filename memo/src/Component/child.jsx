import React from "react";

function Child({ name }) {
  console.log("child component render");
  return (
    <>
      <h1>Child Component Name: {name}</h1>
    </>
  );
}
export default React.memo(Child);
//export default Child;
