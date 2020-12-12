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
              <p>Example header..</p>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export { GlobalHeader };
