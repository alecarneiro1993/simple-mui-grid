import React from "react";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";

const MUIColumn = styled(({ children, ...props }) =>
  React.createElement(Grid, { container: true, item: true, ...props }, children)
)`
  height: 100%;
`;

function Column({ children, ...props }) {
  return React.createElement(MUIColumn, props, children);
}

export default Column;
