import React, { useMemo } from "react";
import {
  DataGrid,
  DataGridProps,
  GridColDef,
  GridRowsProp,
  GridPreProcessEditCellProps,
  GridRowEditStopParams,
  GridRowEditStopReasons,
  heIL,
} from "@mui/x-data-grid";
import StyledBox from "./StyledBox";
import { TableRootPropsContext } from "./contexts";
import { TableCell } from "./slots";
import { gridDefsByColTypes } from "./cells/gridDefsByColType";
import { useErrors } from "./hooks";
import { TableColDef, TableNativeColTypes, TableValidation } from "./types";

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

const Table = ({ rows, columns, slots, slotProps, ...props }: TableProps) => {
  const {
    errors,
    addError,
    removeError,
    clearRowErrors,
    getErrorsBy,
  } = useErrors();

  const validateColumn = (
    validation: TableValidation | undefined,
    required: boolean | undefined,
    params: GridPreProcessEditCellProps,
    field: string
  ) => {
    removeError(params.id, field);

    const requiredValidationResult =
      required && !params.props.value && "שדה חובה";
    const validationResult =
      requiredValidationResult || (validation && validation(params));

    const hasError = Boolean(validationResult);

    if (hasError) {
      addError(params.id, field, validationResult!);
    }

    return { ...params.props, error: hasError };
  };

  const parseColDefs = (columns: TableColDef[]) => {
    return columns.map(({ validation, required, ...colDef }) => ({
      ...(colDef.type &&
        getGridDefsByColType(colDef.type as TableNativeColTypes)),
      renderHeader: () =>
        colDef.headerName &&
        getFormattedHeaderName(colDef.headerName, required),
      preProcessEditCellProps:
        (required || validation) &&
        ((params: GridPreProcessEditCellProps) =>
          validateColumn(validation, required, params, colDef.field)),
      ...colDef,
    }));
  };

  const parsedColDefs = useMemo<GridColDef[]>(() => parseColDefs(columns), [
    columns,
  ]);

  const handleRowEditStop = (params: GridRowEditStopParams) => {
    params.reason === GridRowEditStopReasons.escapeKeyDown && clearRowErrors(params.id);
  };

  return (
    <StyledBox sx={{ height: "35%", width: "80%" }}>
      <TableRootPropsContext.Provider value={{ errors, getErrorsBy }}>
        <DataGrid
          rows={rows}
          columns={parsedColDefs}
          onRowEditStop={handleRowEditStop}
          editMode="row"
          pageSizeOptions={[]}
          density="compact"
          showColumnVerticalBorder
          showCellVerticalBorder
          hideFooterSelectedRowCount
          localeText={heIL.components.MuiDataGrid.defaultProps.localeText}
          slots={{
            cell: TableCell,
            ...slots,
          }}
          {...props}
        />
      </TableRootPropsContext.Provider>
    </StyledBox>
  );
};

export default Table;
