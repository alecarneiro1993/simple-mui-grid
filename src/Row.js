import React from "react";
import Grid from "@material-ui/core/Grid";

function Row({ children, ...props }) {
  return React.createElement(
    Grid,
    { container: true, item: true, direction: "row", ...props },
    children
  );
}

export default Row;
