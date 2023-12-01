import React, { useRef, useState } from "react";
import { Autocomplete, TextField } from "@mui/material";
import useEnhancedEffect from "@mui/material/utils/useEnhancedEffect";
import { TableAutocompleteRenderEditCellParams } from "./types";

interface AutocompleteCellProps {
  params: TableAutocompleteRenderEditCellParams;
}

const AutocompleteCell = ({
  params: { api, id, field, error, hasFocus, value, colDef },
}: AutocompleteCellProps) => {
  const inputRef = useRef<HTMLElement>();

  useEnhancedEffect(() => {
    if (hasFocus && inputRef.current) {
      inputRef.current.focus();
    }
  }, [hasFocus]);

  const handleChange = (
    _event: React.SyntheticEvent<Element, Event>,
    value: Object | null
  ) => {
    api.setEditCellValue({
      id,
      field,
      value,
    });
  };

  return (
    <Autocomplete
      autoFocus
      fullWidth
      value={value}
      options={colDef.options}
      noOptionsText="אין תוצאות"
      onChange={handleChange}
      renderInput={(params) => (
        <TextField
          {...params}
          hiddenLabel
          inputRef={inputRef}
          variant="outlined"
          placeholder={colDef.placeholder}
          error={error}
        />
      )}
    />
  );
};

export const renderEditAutocompleteCell = (
  params: TableAutocompleteRenderEditCellParams
) => <AutocompleteCell params={params} />;
