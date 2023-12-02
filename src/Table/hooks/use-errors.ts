import { useState } from "react";
import { GridRowId } from "@mui/x-data-grid";
import { TableErrors } from "../types";

const getErrorKey = (rowId: GridRowId, field: string) => `${rowId}-${field}`;

const splitErrorKey = (errorKey: string) => {
  const [rowId, field] = errorKey.split("-");

  return { rowId, field };
};

export const useErrors = () => {
  const [errors, setErrors] = useState<TableErrors>(new Map());

  const addError = (rowId: GridRowId, field: string, errorMessage: string) => {
    setErrors((prevErrors) => {
      return prevErrors.set(getErrorKey(rowId, field), errorMessage);
    });
  };

  const removeError = (rowId: GridRowId, field: string) => {
    setErrors((prevErrors) => {
      prevErrors.delete(getErrorKey(rowId, field));

      return prevErrors;
    });
  };

  const clearRowErrors = (rowId: GridRowId) => {
    setErrors((prevErrors) => {
      prevErrors.forEach((_, errorKey) => {
        console.log({ l: splitErrorKey(errorKey), rowId });
        splitErrorKey(errorKey).rowId === rowId.toString() &&
          prevErrors.delete(errorKey);
      });

      return prevErrors;
    });
  };

  const getErrorsBy = (rowId: GridRowId, field: string) =>
    errors.get(getErrorKey(rowId, field));

  return { errors, addError, removeError, clearRowErrors, getErrorsBy };
};
