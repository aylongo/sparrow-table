import { GridColTypeDef } from "@mui/x-data-grid";
import { TableNativeColTypes } from "../types";
import { AUTOCOMPLETE_GRID_DEFS } from "./AutocompleteCell/gridDefs";

export const gridDefsByColTypes: Record<TableNativeColTypes, GridColTypeDef | undefined> = {
    autocomplete: AUTOCOMPLETE_GRID_DEFS
};