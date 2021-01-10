import axios from "axios";

import React, { useState } from "react";

const App = (props) => {
  const [text, setText] = useState("default");
  const [File, setFile] = useState(undefined);
  const handleupdate = () => {
    const abc = document.getElementById("input");
    setFile(abc.files[0]);

    console.log(File);
  };
  return (
    <div>
      <h1>{text} sdsdsdsd</h1>
      <h3>File Upload using React!{console.log(File)}</h3>
      <div>
        <input type="file" id="input" onChange={handleupdate} />
      </div>
    </div>
  );
};

export default App;
