import {
  GridPreProcessEditCellProps,
  GridValueGetterParams,
} from "@mui/x-data-grid";
import { renderAutocompleteCell, renderEditAutocompleteCell } from "../Cell";
import { TableColDef } from "../../types";

const validateAge = (params: GridPreProcessEditCellProps) => {
  if (!params.props.value || params.props.value < 0) {
    return "Value has to be positive";
  }
}

const columns: TableColDef[] = [
  { field: "id", headerName: "מזהה", width: 90 },
  {
    field: "firstName",
    headerName: "שם פרטי",
    headerAlign: 'left',
    width: 150,
    editable: true,
  },
  {
    field: "lastName",
    headerName: "שם משפחה",
    headerAlign: 'left',
    width: 150,
    editable: true,
  },
  {
    field: "age",
    headerName: "גיל",
    headerAlign: 'left',
    align: 'left',
    type: "number",
    width: 110,
    editable: true,
    validation: validateAge,
  },
  {
    field: "fullName",
    headerName: "שם מלא",
    headerAlign: 'left',
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
  {
    field: "date",
    headerName: "תאריך",
    headerAlign: 'left',
    type: "date",
    width: 160,
    editable: true,
  },
  {
    field: "isRolling",
    headerName: "האם מתגלגל?",
    headerAlign: 'left',
    type: "boolean",
    width: 160,
    editable: true,
  },
  {
    field: "country",
    headerName: "מדינה",
    headerAlign: 'left',
    type: "singleSelect",
    width: 160,
    getOptionValue: (value: any) => value.id,
    getOptionLabel: (value: any) => value.text,
    valueOptions: [
      { id: "BR", text: "ברזיל" },
      { id: "FR", text: "צרפת" },
    ],
    editable: true,
  },
  {
    field: "weight",
    headerName: "משקל (שם תואר)",
    headerAlign: 'left',
    width: 160,
    renderCell: renderAutocompleteCell,
    renderEditCell: renderEditAutocompleteCell({
      options: ["שמן", "גדול", "שמנמן"],
      placeholder: "תואר המשקל",
    }),
    editable: true,
  },
];

export { columns };
