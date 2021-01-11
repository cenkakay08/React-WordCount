import axios from "axios";

import React, { useState } from "react";

import splitter from './stringSplit';

const ImportFromFileBodyComponent = () => {
  let fileReader;
  const [text, setText] = useState("null asda sd asdas d");
  const handleFileRead = (e) => {
    const content = fileReader.result;
    test(content);
    // … do something with the 'content' …
  };

  const test = (str) => {
    var result = splitter(str)
    setText(result);
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
      <div>
        <b>{text}</b>
      </div>
    </React.Fragment>
  );
};

export default ImportFromFileBodyComponent;
