import { GridColDef, GridPreProcessEditCellProps } from "@mui/x-data-grid";

type TableValidation = (params: GridPreProcessEditCellProps) => string | void;

type TableColDef = GridColDef & {
  validation?: TableValidation;
  required?: boolean;
};

export type { TableColDef, TableValidation };
