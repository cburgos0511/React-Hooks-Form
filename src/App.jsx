import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [comment, setComment] = useState("");
  const [info, setInfo] = useState("");

  const submit = e => {
    e.preventDefault();
    let validate = Number(age);
    if (!validate) {
      setInfo("You must input and age.");
    } else {
      setInfo(
        `My name is ${name} and I am ${age} years old. I would like you to know that ${comment}`
      );
      setName("");
      setAge("");
      setComment("");
    }
  };
  const form = () => (
    <form onSubmit={e => submit(e)} action="">
      <div className="talk-to-me">
        <h2>Step 1</h2>
        <h1>Talk to me</h1>
      </div>
      <div className="form-input">
        <input
          placeholder="Name*"
          value={name}
          onChange={e => setName(e.target.value)}
          type="text"
        />
      </div>
      <div className="form-input">
        <input
          placeholder="Age*"
          value={age}
          onChange={e => setAge(e.target.value)}
          type="text"
        />
      </div>
      <div className="form-input">
        <textarea
          value={comment}
          placeholder="Comment*"
          onChange={e => setComment(e.target.value)}
          name="comment"
          rows="5"
        />
      </div>
      <div className="form-input">
        <button>submit</button>
      </div>
    </form>
  );
  return (
    <div className="App">
      {form()}
      <div>
        <h1 className="msg">{info}</h1>
      </div>
    </div>
  );
}
