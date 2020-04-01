import React from "react";
import { TableWithCellsStyle } from "../styles/TableWithCellsStyle";
import { Cells } from "../Cells/Cells";

export const TableWithCells = ({stage}) => {
  console.log(stage);
    return (
    <TableWithCellsStyle width={stage[0].length} height={stage.length}>
      {stage.map(row =>
        row.map((cell, x) => {
          return <Cells key={x} type={cell[0]} />;
        })
      )}
    </TableWithCellsStyle>
  );
};
