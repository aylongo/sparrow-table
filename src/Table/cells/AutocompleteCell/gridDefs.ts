import { GridColTypeDef } from "@mui/x-data-grid";
import { renderEditAutocompleteCell } from "./AutocompleteCell";

export const AUTOCOMPLETE_GRID_DEFS: GridColTypeDef = {
    // @ts-ignore
    renderEditCell: renderEditAutocompleteCell
}