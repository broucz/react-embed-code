import React, { Component } from 'react';
import Code from 'react-embed-code';

const str = `import React, { Component } from 'react';
import { Grid, Row, Cell } from 'react-inline-grid';

const box = { background: '#bdbdbd', padding: '8px' };

class Root extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Row is="center">
            <Cell is="3 tablet-2 phone-4">
              <div style={{...box}}></div>
            </Cell>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Root;
`;

class Root extends Component {
  render() {
    return (
      <div style={{ margin: '0 auto', maxWidth: '980px' }}>
        <h3>react-embed-code</h3>
        <Code embed={str} />
      </div>
    );
  }
}

export default Root;
