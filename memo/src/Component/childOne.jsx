import React from "react";

function ChildOne() {
  console.log("childOne component render");
  return (
    <>
      <h1>Child One</h1>
    </>
  );
}
export default React.memo(ChildOne);
