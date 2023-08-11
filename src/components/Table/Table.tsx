import React from "react";
import { DataGrid, GridPreProcessEditCellProps, GridRowsProp, heIL } from "@mui/x-data-grid";
import { Alert } from "@mui/material";
import StyledBox from "./StyledBox";
import { TableColDef, TableValidation } from "../../types";

interface TableProps {
  rows: GridRowsProp;
  columns: TableColDef[];
}

const validateColumn = (
  validation: TableValidation,
  params: GridPreProcessEditCellProps
) => {
  const validationResult = validation(params);

  return validationResult ? { ...params.props, error: true } : { ...params.props, error: false };
};

const parseColumnDefs = (columns: TableColDef[]) => {
  return columns.map(({ validation, ...column }) => ({
    ...column,
    preProcessEditCellProps: validation && ((params: GridPreProcessEditCellProps) =>
      validateColumn(validation, params)),
  }));
};

const Table = ({ rows, columns }: TableProps) => {
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

export default Table;
