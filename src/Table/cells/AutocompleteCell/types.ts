import { GridRenderEditCellParams } from "@mui/x-data-grid";
import { TableBaseColDef } from "../../types";

export type TableAutocompleteRenderEditCellParams = GridRenderEditCellParams & {
  colDef: AutocompleteColDef;
};

export type AutocompleteColDef = TableBaseColDef & {
  type: "autocomplete";
  placeholder: string;
  options: Object[];
};
