import splitter from "./stringSplit";
import React, { useState } from "react";
import styled from 'styled-components';
import { useTable } from 'react-table'

const ImportFromFileBodyComponent = () => {
  var words = [];
  var numbers = [];
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
      <WrapperAll>
      <React.Fragment>
        <Wrapper>
          <Title>Word Count!</Title>
        </Wrapper>
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
        <div>tane kelime var {stringInfo}</div>
        </div>
      </React.Fragment>
    </WrapperAll>
    </React.Fragment>
  );
};

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #ffd369;
`;
const Wrapper = styled.section`
  background: #393e46;
`;
const WrapperAll = styled.section`
  background: #222831;
  height: 100vh;
  width: 100vw;
  * {
    margin: 0;
    padding: 0;
  }
`;

export default ImportFromFileBodyComponent;