import React from "react";
import styled from "styled-components";
import { Table, Column, Cell } from "fixed-data-table-2";

const TableOfWords = ({ wordTable }) => {
  return (
    <Tabblediv>
      <Table
        rowHeight={20}
        rowsCount={wordTable.length}
        headerHeight={30}
        width={280}
        height={450}
      >
        <Column
          columnKey="0"
          header={<Cell>Word</Cell>}
          width={100}
          cell={({ rowIndex, columnKey }) => {
            return <Cell>{wordTable[rowIndex][columnKey]}</Cell>;
          }}
        />
        <Column
          columnKey="1"
          header={<Cell>Times</Cell>}
          width={200}
          cell={({ rowIndex, columnKey }) => {
            return <Cell>{wordTable[rowIndex][columnKey]}</Cell>;
          }}
        />
      </Table>
    </Tabblediv>
  );
};

const Tabblediv = styled.div`
  height: 55vh;
  width: 18vw;
  top: 42vh;
  left: 40vw;
  background-color: #fafafa;
  position: absolute;
  overflow: hidden;
  border: 1px solid;
  box-shadow: 5px 10px 8px 10px #888888;
`;

export default TableOfWords;
