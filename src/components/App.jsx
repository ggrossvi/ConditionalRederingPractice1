import React from "react";
import Form from "./Form";

//1. Show Login as the button text if userIsRegistered is true.

var userIsRegistered = true;

function App() {
  return (
    <div className="container">
      <Form isRegistered={userIsRegistered} />
    </div>
  );
}

export default App;
