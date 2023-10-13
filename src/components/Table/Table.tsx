import React, { useMemo } from "react";
import {
  DataGrid,
  DataGridProps,
  GridColDef,
  GridColumnHeaderParams,
  GridPreProcessEditCellProps,
  GridRowsProp,
  heIL,
} from "@mui/x-data-grid";
import StyledBox from "./StyledBox";
import { TableColDef, TableValidation } from "../../types";

interface TableProps extends Omit<DataGridProps, "rows" | "columns"> {
  rows: GridRowsProp;
  columns: TableColDef[];
  canUploadFromExcel?: boolean;
}

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

  console.log({ value: params.props.value, hasError });

  return { ...params.props, error: hasError };
};

const parseColDefs = (columns: TableColDef[]) => {
  return columns.map(({ validation, required, ...columnDef }) => ({
    renderHeader: () => columnDef.headerName && getFormattedHeaderName(columnDef.headerName, required),
    preProcessEditCellProps:
      (required || validation) &&
      ((params: GridPreProcessEditCellProps) =>
        validateColumn(validation, params, required)),
    ...columnDef,
  }));
};

const Table = ({ rows, columns, ...props }: TableProps) => {
  const parsedColDefs = useMemo<GridColDef[]>(() => parseColDefs(columns), [columns]);

  return (
    <StyledBox sx={{ height: 300, width: "80%", direction: "rtl" }}>
      <DataGrid
        rows={rows}
        columns={parsedColDefs}
        editMode="row"
        pageSizeOptions={[]}
        density="compact"
        clipboardCopyCellDelimiter=","
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
