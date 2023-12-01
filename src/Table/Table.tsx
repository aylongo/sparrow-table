import React, { useMemo } from "react";
import {
  DataGrid,
  DataGridProps,
  GridColDef,
  GridPreProcessEditCellProps,
  GridRowsProp,
  heIL,
} from "@mui/x-data-grid";
import StyledBox from "./StyledBox";
import { TableColDef, TableNativeColTypes, TableValidation } from "./types";
import { gridDefsByColTypes } from "./cells/gridDefsByColType";

interface TableProps extends Omit<DataGridProps, "rows" | "columns"> {
  rows: GridRowsProp;
  columns: TableColDef[];
  canUploadFromExcel?: boolean; // TODO
}

const getGridDefsByColType = (colType: TableNativeColTypes) => {
  return gridDefsByColTypes[colType];
};

const getFormattedHeaderName = (headerName: string, required?: boolean) =>
  required ? headerName.concat("*") : headerName;

const validateColumn = (
  validation: TableValidation | undefined,
  params: GridPreProcessEditCellProps,
  required: boolean | undefined
) => {
  const validationResult = validation && validation(params);
  const isEmpty = !params.props.value;

  const hasError = !!(required
    ? isEmpty || validationResult
    : validationResult);

  return { ...params.props, error: hasError };
};

const parseColDefs = (columns: TableColDef[]) => {
  return columns.map(({ validation, required, ...colDef }) => ({
    ...(colDef.type &&
      getGridDefsByColType(colDef.type as TableNativeColTypes)),
    renderHeader: () =>
      colDef.headerName && getFormattedHeaderName(colDef.headerName, required),
    preProcessEditCellProps:
      (required || validation) &&
      ((params: GridPreProcessEditCellProps) =>
        validateColumn(validation, params, required)),
    ...colDef,
  }));
};

const Table = ({ rows, columns, ...props }: TableProps) => {
  const parsedColDefs = useMemo<GridColDef[]>(() => parseColDefs(columns), [
    columns,
  ]);

  return (
    <StyledBox sx={{ height: 300, width: "80%" }}>
      <DataGrid
        rows={rows}
        columns={parsedColDefs}
        editMode="row"
        pageSizeOptions={[]}
        density="compact"
        showColumnVerticalBorder
        showCellVerticalBorder
        hideFooterSelectedRowCount
        localeText={heIL.components.MuiDataGrid.defaultProps.localeText}
        {...props}
      />
    </StyledBox>
  );
};

export default Table;
