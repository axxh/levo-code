import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

class GlobalFooter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section className="footer">
        <Container>
          <Row>
            <Col>
              <h4>Footer..</h4>
              <div className="julian">Julian Kryszkiewicz</div>
              <li>
                <a href="https://www.linkedin.com/in/julzk/?originalSubdomain=au" target="_blank" rel="noreferrer">LinkedIn</a>
              </li>
              <li>
                <a href="https://github.com/axxh/levo-code/tree/master/sample" target="_blank" rel="noreferrer">GitHub Repo</a>
              </li>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export { GlobalFooter };
