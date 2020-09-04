import React from "react";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";

const Column = styled(({ children, ...props }) => (
  <Grid container item {...props}>
    {children}
  </Grid>
))`
  height: 100%;
`;

export default Column;
