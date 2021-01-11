import splitter from "./stringSplit";
import React, { useState } from "react";
import styled from 'styled-components';
import { useTable } from 'react-table'

const ImportFromFileBodyComponent = () => {
  const [words, setWords] = useState("");
  let fileReader;
  const handleFileRead = (e) => {
    const content = fileReader.result;
    counter(content);
    // … do something with the 'content' …
  };

  const counter = (str) => {
    setWords(splitter(str));
  };

  const handleFileChosen = (file) => {
    fileReader = new FileReader();
    fileReader.onloadend = handleFileRead;
    fileReader.readAsText(file);
  };

  const createTable = () => {
    let table = []
    table.push(<tr><td>Word</td><td>Times</td></tr>)
    // Outer loop to create parent
    for (let i = 0; i < words.length; i++) {
      let children = []
      //Inner loop to create children
      for (let j = 0; j < 2; j++) {
        children.push(<td>{words[i][j]}</td>)
      }
      //Create the parent and add the children
      table.push(<tr>{children}</tr>)
    }
    return table
  }

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
        <table>
          {createTable()}
        </table>
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