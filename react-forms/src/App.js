import React from "react";
import "./styles.css";
import ToDo from "./components/ToDo";
import Form from "./components/Form";

export default function App() {
  return (
    <div className="App">
      <h1>Volunteer Sign Up</h1>
      <ToDo />
      <Form />
    </div>
  );
}
