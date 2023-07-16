import React from "react";
import { EditableTable } from "../EditableTable";
import { columns } from "./ColumnDefinition";

const rows = [
  { id: 1, lastName: "You", firstName: "Fuck", age: 35, selection: "BR", customField: 'שמן' },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

const Wrapper = () => {
  return (
    <>
      <EditableTable rows={rows} columns={columns} />
    </>
  );
};

export default Wrapper;
