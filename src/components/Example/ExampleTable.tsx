import React from "react";
import { Table } from "../../Table";
import { columns } from "./ColumnDefinition";

const rows = [
  {
    id: 1,
    lastName: "מצב",
    firstName: "מה",
    age: 35,
    country: "BR",
    weight: "שמן",
  },
  { id: 2, lastName: "הנמר", firstName: "אפי", age: 42 },
  { id: 3, lastName: "אלעד", firstName: "אדיר", age: 45, weight: "שמנמן" },
  { id: 4, lastName: "מאט", firstName: "שאזא", age: 16 },
  { id: 5, lastName: "דודי", firstName: "דודי", age: null, isRolling: true },
  { id: 6, lastName: "ללא תקנה", firstName: null, age: 150 },
];

const ExampleTable = () => {
  return (
    <>
      <Table rows={rows} columns={columns} showColumnVerticalBorder={false} />
    </>
  );
};

export default ExampleTable;
