import React, { useEffect, useRef } from "react";
import { Autocomplete, TextField } from "@mui/material";
import {
  GridRenderCellParams,
  GridRenderEditCellParams,
} from "@mui/x-data-grid";
import useEnhancedEffect from "@mui/material/utils/useEnhancedEffect";

interface RenderEditAutocompleteCellProps {
  options: Object[];
  placeholder: string;
}

interface AutocompleteCellProps {
  options: Object[];
  placeholder: string;
  params: GridRenderEditCellParams;
}

const AutocompleteCell = ({
  options,
  placeholder,
  params,
}: AutocompleteCellProps) => {
  const inputRef = useRef<HTMLElement>();

  useEnhancedEffect(() => {
    if (params.hasFocus && inputRef.current) {
      inputRef.current.focus();
    }
  }, [params.hasFocus]);

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
        <TextField
          {...params}
          autoFocus
          inputRef={inputRef}
          variant="outlined"
          placeholder={placeholder}
          hiddenLabel={true}
        />
      )}
    />
  );
};

const renderAutocompleteCell = (params: GridRenderCellParams) => params.value;

const renderEditAutocompleteCell = ({
  options,
  placeholder,
}: RenderEditAutocompleteCellProps) => {
  return (params: GridRenderEditCellParams) => (
    <AutocompleteCell
      params={params}
      options={options}
      placeholder={placeholder}
    />
  );
};

export { renderAutocompleteCell, renderEditAutocompleteCell };