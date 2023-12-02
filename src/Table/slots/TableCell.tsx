import React, { useContext } from "react";
import { GridCell, GridCellProps } from "@mui/x-data-grid";
import {
  Tooltip,
  TooltipProps,
  Zoom,
  styled,
  tooltipClasses,
} from "@mui/material";
import { TableRootPropsContext } from "../contexts";

const TableErrorTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.error.dark,
    color: theme.palette.error.contrastText,
    fontSize: "0.7rem",
  },
}));

export const TableCell = (props: GridCellProps) => {
  const tableRootProps = useContext(TableRootPropsContext);

  const cellError = tableRootProps
    ? tableRootProps.getErrorsBy(props.rowId, props.field)
    : "";

  return (
    <TableErrorTooltip
      title={cellError}
      open={Boolean(cellError)}
      TransitionComponent={Zoom}
      PopperProps={{ disablePortal: true }}
    >
      <GridCell {...props} />
    </TableErrorTooltip>
  );
};
