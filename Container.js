import React from "react";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";

const Container = styled(({ children, ...props }) => (
  <Grid container direction="column" {...props}>
    {children}
  </Grid>
))`
  height: 100%;
`;

export default Container;
