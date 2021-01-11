import axios from "axios";
import splitter from "./stringSplit";
import React, { useState } from "react";

const ImportFromFileBodyComponent = () => {
  let fileReader;
  const [text, setText] = useState("");
  const [stringInfo, setstringInfo] = useState("");
  const handleFileRead = (e) => {
    const content = fileReader.result;
    setText(content);
    console.log(content);
    counter(content);
    // … do something with the 'content' …
  };

  const counter = (str) => {
    var result = splitter(str);
    setstringInfo(result);
  };

  const handleFileChosen = (file) => {
    fileReader = new FileReader();
    fileReader.onloadend = handleFileRead;
    fileReader.readAsText(file);
  };

  return (
    <React.Fragment>
      <div className="upload-expense">
        <input
          type="file"
          id="file"
          className="input-file"
          accept=".txt"
          onChange={(e) => handleFileChosen(e.target.files[0])}
        />
      </div>
      <div>tane kelime var {stringInfo}</div>
    </React.Fragment>
  );
};

export default ImportFromFileBodyComponent;
