import React, { createContext } from "react";
import { GridRowId } from "@mui/x-data-grid";
import { TableErrors } from "../types";

type TableRootPropsContextProps = {
    errors: TableErrors;
    getErrorsBy: (rowId: GridRowId, field: string) => string | undefined;
} | null;

export const TableRootPropsContext = createContext<TableRootPropsContextProps>(
  null
);
