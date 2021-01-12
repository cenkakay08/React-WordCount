import splitter from "./stringSplit";
import { Table, Column, Cell } from 'fixed-data-table-2'; // npm install fixed-data-table-2
import React, { useState, useCallback } from "react";
import styled from "styled-components";
import { useDropzone } from "react-dropzone";
import { ScrollView } from "@cantonjs/react-scroll-view";

const WordCountApp = () => {
  const [wordTable, setWordTable] = useState("");
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();

      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");
      reader.onloadend = () => {
        // Do whatever you want with the file contents
        const string = reader.result;
        console.log(string);
        var result = splitter(string, "table");
        setWordTable(result);
      };
      reader.readAsText(file);
    });
  }, []);
  const { getRootProps, getInputProps } = useDropzone({ onDrop });
  
  return (
    <WrapperAll>
      <React.Fragment>
        <Wrapper>
          <Title>Word Count!</Title>
        </Wrapper>
        <Div {...getRootProps()}>
          <input
            {...getInputProps()}
            type="file"
            id="file"
            className="input-file"
            accept=".txt"
          />
          <Droptext>
            Drag 'n' drop some files here, or click to select files
          </Droptext>
        </Div>
        <ScrollView style={{ height: "100vh" }}>
          <div>
            <Table
            rowHeight={50}
            rowsCount={wordTable.length}
            headerHeight={50}
            width={300}
            height={400}
          >
            <Column
              columnKey="0"
              header={<Cell>Word</Cell>}
              width={150}
              cell={({ rowIndex, columnKey }) => {
                return <Cell>{wordTable[rowIndex][columnKey]}</Cell>;
              }}
            />
            <Column
              columnKey="1"
              header={<Cell>Times</Cell>}
              width={150}
              cell={({ rowIndex, columnKey }) => {
                return <Cell>{wordTable[rowIndex][columnKey]}</Cell>;
              }}
            />
          </Table>
      </div>
        </ScrollView>
      </React.Fragment>
    </WrapperAll>
  );
};

const Droptext = styled.p``;
const Div = styled.div`
  height: 20vh;
  width: 90vw;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-width: 2px;
  border-radius: 2px;
  border-style: dashed;
  background-color: #fafafa;
  color: #bdbdbd;
  outline: none;
  transition: border 0.24s ease-in-out;
`;
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
export default WordCountApp;