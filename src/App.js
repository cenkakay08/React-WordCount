import axios from "axios";

import React, { useState } from "react";

const ImportFromFileBodyComponent = () => {
  let fileReader;
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);
  const handleFileRead = (e) => {
    const content = fileReader.result;
    setText(content);
    console.log(content);
    counter(content);
    // … do something with the 'content' …
  };

  const counter = (s) => {
    s = s.replace(/(^\s*)|(\s*$)/gi, ""); //exclude  start and end white-space
    s = s.replace(/[ ]{2,}/gi, " "); //2 or more space to 1
    s = s.replace(/\n /, "\n"); // exclude newline with a start spacing
    var abc = s.split(" ").filter(String).length;
    //return s.split(' ').filter(String).length; - this can also be used
    setCount(abc);
  };

  const handleFileChosen = (file) => {
    fileReader = new FileReader();
    fileReader.onloadend = handleFileRead;
    fileReader.readAsText(file);
  };

  return (
    <React.Fragment>
      <p>
        {text} tane kelime var {count}
      </p>
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
