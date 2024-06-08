import {
  GridPreProcessEditCellProps,
  GridValueGetterParams,
} from "@mui/x-data-grid";
import { TableColDef } from "../../Table/types";

const validateAge = (params: GridPreProcessEditCellProps) => {
  if (!params.props.value || params.props.value < 0) {
    return "לא להטריל";
  }
};

const columns: TableColDef[] = [
  { field: "id", headerName: "מזהה", width: 90, flex: 1 },
  {
    field: "firstName",
    headerName: "שם פרטי",
    headerAlign: "left",
    width: 150,
    flex: 1,
    editable: true,
    required: true,
  },
  {
    field: "lastName",
    headerName: "שם משפחה",
    headerAlign: "left",
    width: 150,
    flex: 1,
    editable: true,
    required: true,
  },
  {
    field: "age",
    headerName: "גיל",
    headerAlign: "left",
    align: "left",
    type: "number",
    width: 110,
    flex: 1,
    editable: true,
    required: true,
    validation: validateAge,
  },
  {
    field: "fullName",
    headerName: "שם מלא",
    headerAlign: "left",
    description: "This column has a value getter",
    width: 160,
    flex: 1,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
  {
    field: "date",
    headerName: "תאריך",
    headerAlign: "left",
    type: "date",
    width: 160,
    flex: 1,
    editable: true,
    required: true,
  },
  {
    field: "weight",
    headerName: "משקל (שם תואר)",
    headerAlign: "left",
    type: "autocomplete",
    options: ["שמן", "גדול", "שמנמן"],
    placeholder: "תואר המשקל",
    width: 160,
    flex: 1,
    editable: true,
    validation: (params: GridPreProcessEditCellProps) => {
      if (!params.props.value) {
        return "חייב להזין ערך גדול ושמן במיוחד";
      }
    },
  },
  {
    field: "isRolling",
    headerName: "האם מתגלגל?",
    headerAlign: "left",
    type: "boolean",
    width: 160,
    flex: 1,
    editable: true,
  },
  {
    field: "country",
    headerName: "מדינה",
    headerAlign: "left",
    type: "singleSelect",
    width: 160,
    flex: 1,
    getOptionValue: (value: any) => value.id,
    getOptionLabel: (value: any) => value.text,
    valueOptions: [
      { id: "BR", text: "ברזיל" },
      { id: "FR", text: "צרפת" },
    ],
    editable: true,
  },
];

export { columns };
