import React from "react";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";

const Container = styled(({ children, ...props }) =>
  React.createElement(
    Grid,
    { container: true, direction: "column", ...props },
    children
  )
)`
  height: 100%;
`;

export default Container;
