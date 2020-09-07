# Simple Material UI Grid

Wraps Material UI's Grid component for easier structuring and readability.

### Installing

Install this package by `npm` or `yarn`:

```
npm install simple-mui-grid

or

yarn add simple-mui-grid
```

### Usage

Check the example below:

```javascript
import React from "react";
import { Container, Row, Column } from "simple-mui-grid";

function MyComponent(props) {
  return (
    <Container>
      <Row justify="flex-start">
        <Column xs={3}>Column 3</Column>
        <Column xs={6}>Column 6</Column>
      </Row>
      <Row justify="center">
        <Column xs={9}>Column 9</Column>
        <Column xs={3}>Column 3</Column>
      </Row>
      <Row justify="flex-end">
        <Column xs={12}>Column 12</Column>
      </Row>
    </Container>
  );
}
```

Also refer to [Material UI's Grid API](https://material-ui.com/api/grid/#grid-api)

## Authors

- **Alexandre Carneiro** - [Github Profile](https://github.com/alecarneiro1993)

## Contributing

Feel free to add ideas or fix by submitting an issue and/or a pull request.

## License

Read `License.md` file.
