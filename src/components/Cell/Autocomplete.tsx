import React from "react";
import { Autocomplete, TextField } from "@mui/material";
import { GridRenderCellParams } from "@mui/x-data-grid";

interface RenderEditAutocompleteCellProps {
  options: Object[];
  placeholder: string;
}

interface AutocompleteCellProps {
  options: Object[];
  placeholder: string;
  params: GridRenderCellParams<any, string>;
}

const AutocompleteCell = ({
  options,
  placeholder,
  params,
}: AutocompleteCellProps) => {
  const handleOnChange = (
    event: React.SyntheticEvent<Element, Event>,
    value: Object | null
  ) => {
    params.api.setEditCellValue({
      id: params.id,
      field: params.field,
      value: value,
    });
  };

  return (
    <Autocomplete
      autoFocus
      fullWidth
      value={params.value}
      options={options}
      onChange={handleOnChange}
      renderInput={(params) => (
        <TextField autoFocus variant="outlined" placeholder={placeholder} hiddenLabel={true} {...params}  />
      )}
    />
  );
};

const renderAutocompleteCell = (params: GridRenderCellParams) => (
  <>{params.value}</>
);

const renderEditAutocompleteCell = ({
  options,
  placeholder,
}: RenderEditAutocompleteCellProps) => {
  return (params: GridRenderCellParams) => (
    <AutocompleteCell params={params} options={options} placeholder={placeholder} />
  );
};

export { renderAutocompleteCell, renderEditAutocompleteCell };
