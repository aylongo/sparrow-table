import { GridColDef, GridPreProcessEditCellProps } from "@mui/x-data-grid";

type NestValidationFunction = (params: GridPreProcessEditCellProps) => string | void;

type NestGridColDef = GridColDef & {
  validation?: NestValidationFunction;
};

export type { NestGridColDef, NestValidationFunction };
