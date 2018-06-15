import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import AddFile from './components/AddFile.jsx';

class App extends Component {
  componentDidMount() {
    console.log('App ready');
  }

  render() {
    return (
      <div className="App">
        <Container fluid>
          <Row>
            <Col>
              <h1>IPFSex - File exchange</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <AddFile />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
