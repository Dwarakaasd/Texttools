import React, { useState } from "react";

export default function Texttohtml() {
  const handletag = (tag) => {
    let newtext = `<${tag}>${text}</${tag}>`;
    setText(newtext);
  };
  const handlecopy = () => {
    navigator.clipboard.writeText(text).catch((err) => {
      console.error("Unable to copy text to clipboard:", err);
    });
  };

  const handleTagClick = (tag) => {
    handletag(tag);
  };

  const handlechange = (event) => {
    console.log("text changed");
    setText(event.target.value);
  };

  const [text, setText] = useState("");

  return (
    <div className="container">
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          <h2> Enter your text here</h2>
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          value={text}
          onChange={handlechange}
          rows="12"
        ></textarea>
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle my-2"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Add HTML Tag
          </button>
          <ul className="dropdown-menu">
            <li>
              <button
                className="dropdown-item"
                onClick={() => handleTagClick("b")}
              >
                Bold Tag
              </button>
            </li>
            <li>
              <button
                className="dropdown-item"
                onClick={() => handleTagClick("p")}
              >
                Paragraph Tag
              </button>
            </li>
            <li>
              <button
                className="dropdown-item"
                onClick={() => handleTagClick("h1")}
              >
                Heading Tag
              </button>
            </li>
          </ul>
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={handlecopy}>
          Copy
        </button>
      </div>
    </div>
  );
}
