import React from "react";
import { DataGrid, GridPreProcessEditCellProps, GridRowsProp, heIL } from "@mui/x-data-grid";
import { Alert } from "@mui/material";
import StyledBox from "./StyledBox";
import { NestGridColDef, NestValidationFunction } from "../../types";

interface EditableTableProps {
  rows: GridRowsProp;
  columns: NestGridColDef[];
}

const validateColumn = (
  validation: NestValidationFunction,
  params: GridPreProcessEditCellProps
) => {
  const validationResult = validation(params);

  return validationResult ? { ...params.props, error: true } : { ...params.props, error: false };
};

const parseColumnDefs = (columns: NestGridColDef[]) => {
  return columns.map(({ validation, ...column }) => ({
    ...column,
    preProcessEditCellProps: validation && ((params: GridPreProcessEditCellProps) =>
      validateColumn(validation, params)),
  }));
};

const EditableTable = ({ rows, columns }: EditableTableProps) => {
  return (
    <StyledBox sx={{ height: 300, width: "80%", direction: 'rtl' }}>
      <DataGrid
        rows={rows}
        columns={parseColumnDefs(columns)}
        editMode="row"
        pageSizeOptions={[]}
        density="compact"
        clipboardCopyCellDelimiter=","
        showColumnVerticalBorder
        showCellVerticalBorder
        hideFooterSelectedRowCount
        localeText={heIL.components.MuiDataGrid.defaultProps.localeText}
      />
      <Alert severity="error"></Alert>
    </StyledBox>
  );
};

export default EditableTable;
