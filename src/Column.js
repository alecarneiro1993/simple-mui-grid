import React from "react";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";

const Column = styled(({ children, ...props }) =>
  React.createElement(Grid, { container: true, item: true, ...props }, children)
)`
  height: 100%;
`;

export default Column;
