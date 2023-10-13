import React, { useRef, useState } from "react";
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
  const [inputValue] = useState(params.value);
  const error = params.error;

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
      value={inputValue}
      options={options}
      noOptionsText="אין תוצאות"
      onChange={handleOnChange}
      renderInput={(params) => (
        <TextField
          {...params}
          hiddenLabel
          inputRef={inputRef}
          variant="outlined"
          placeholder={placeholder}
          error={error}
        />
      )}
    />
  );
};

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

export { renderEditAutocompleteCell };
