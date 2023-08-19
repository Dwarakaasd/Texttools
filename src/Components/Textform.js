import React, { useState } from "react";
export default function Textform(props) {
  const handleupclick = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
    console.log("It is clicked");
    props.showAlert("Converted to uppercase", "Success");
  };
  const handleloclick = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("Converted to lowercase", "Success");
  };
  const handleclear = () => {
    let newtext = "";
    setText(newtext);
    props.showAlert("Text cleared", "Success");
  };
  const handlecopy = () => {
    navigator.clipboard.writeText(text).catch((err) => {
      console.error("Unable to copy text to clipboard:", err);
    });
    props.showAlert("Copied to clipboard", "Success");
  };
  const handlexs = () => {
    let newtext = text.replace(/\s+/g, " ");
    setText(newtext);
    props.showAlert("Extra spaces Removed", "Success");
  };
  const handletag = (tag) => {
    let newtext = `<${tag}>${text}</${tag}>`;
    setText(newtext);
    props.showAlert("Tag is applied", "Success");
  };
  const handleTagClick = (tag) => {
    handletag(tag);
  };
  // const handlebs = () => {
  //   let newtext = text.slice(0, -1);
  //   setText(newtext);
  // };
  const handlechange = (event) => {
    console.log("text changed");
    setText(event.target.value);
  };
  const styles = {
    // color: "black",
  };
  const styled = {
    // display: "flex",
    // flexDirection: "row",
    // "@media screen and (maxWidth: 700px)": {
    //   display: "flex",
    //   flexWrap: "wrap",
    //   justifyContent: "between",
    // },
  };
  const [text, setText] = useState("");
  return (
    <div
      className="container"
      style={{ color: props.mode2 === "light" ? "black" : "white" }}
    >
      <div className="mb-3">
        <label
          forhtml="exampleFormControlTextarea1"
          className="form-label my-2"
          style={styles}
        >
          <h2 className="my-2" style={styles}>
            {" "}
            Enter your text here
          </h2>
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          value={text}
          onChange={handlechange}
          rows="12"
        ></textarea>
        <div style={styled}>
          <button
            disabled={text.length === 0}
            className="btn btn-primary mx-1 my-1"
            onClick={handleupclick}
          >
            Uppercase
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-primary mx-1 my-1"
            onClick={handleloclick}
          >
            Lowercase
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-primary mx-1 my-1"
            onClick={handleclear}
          >
            Clear
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-primary mx-1 my-1"
            onClick={handlecopy}
          >
            Copy
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-primary mx-1 my-1"
            onClick={handlexs}
          >
            Remove Extra spaces
          </button>
          <div className="dropdown">
            <button
              disabled={text.length === 0}
              className="btn btn-primary dropdown-toggle mx-1 my-1"
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
          {/* <button className="btn btn-primary mx-1 my-1" onClick={handlebs}>
            &#8592;
          </button> */}
        </div>
        <p style={styles}>
          {" "}
          {text.trim().split(/\s+/).filter(Boolean).length} words and{" "}
          {text.length} characters
        </p>
        <h3 style={styles}> Preview</h3>
        {text ? (
          <p style={styles}>{text}</p>
        ) : (
          <p style={styles}>Nothing to preview</p>
        )}
      </div>
    </div>
  );
}
