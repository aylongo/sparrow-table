import {
  GridColDef,
  GridNativeColTypes,
  GridPreProcessEditCellProps,
} from "@mui/x-data-grid";
import { AutocompleteColDef } from "../cells/AutocompleteCell/types";

export type TableValidation = (
  params: GridPreProcessEditCellProps
) => string | void;

export type TableBaseColDef = GridColDef & {
  headerName: string;
  type?: TableColTypes;
  validation?: TableValidation;
  required?: boolean;
};

export type TableColDef = TableBaseColDef | AutocompleteColDef;

export type TableColTypes = GridNativeColTypes | TableNativeColTypes;

export type TableNativeColTypes = 'autocomplete';
