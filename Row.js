import React from "react";
import Grid from "@material-ui/core/Grid";

function Row({ children, ...props }) {
  return (
    <Grid container item direction="row" {...props}>
      {children}
    </Grid>
  );
}

export default Row;
