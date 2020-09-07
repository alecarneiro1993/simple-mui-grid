import React from "react";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";

const MUIContainer = styled(({ children, ...props }) =>
  React.createElement(
    Grid,
    { container: true, direction: "column", ...props },
    children
  )
)`
  height: 100%;
`;

function Container({ children, ...props }) {
  return React.createElement(MUIContainer, props, children);
}

export default Container;
