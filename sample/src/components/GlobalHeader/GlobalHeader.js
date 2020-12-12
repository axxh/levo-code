import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

class GlobalHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section className="header">
        <Container>
          <Row>
            <Col>
              <h1>Header..</h1>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export { GlobalHeader };
