import axios from "axios";

import React, { useState } from "react";

const ImportFromFileBodyComponent = () => {
  let fileReader;
  const [text, setText] = useState("null asda sd asdas d");
  const handleFileRead = (e) => {
    const content = fileReader.result;
    setText(content);
    test(content);
    // … do something with the 'content' …
  };

  const test = (str) => {
    console.log(str);
  };

  const handleFileChosen = (file) => {
    fileReader = new FileReader();
    fileReader.onloadend = handleFileRead;
    fileReader.readAsText(file);
  };

  return (
    <React.Fragment>
      <h1>{text} sdsdsdsd</h1>
      <div className="upload-expense">
        <input
          type="file"
          id="file"
          className="input-file"
          accept=".txt"
          onChange={(e) => handleFileChosen(e.target.files[0])}
        />
      </div>
    </React.Fragment>
  );
};

export default ImportFromFileBodyComponent;
