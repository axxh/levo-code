import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

class RelatedArticles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log('did mount?');
  }

  render() {
    return (
      <section className="related-articles">
        <Container>
          <Row>
            <Col>
              <h3>Related Articles</h3>

              <p>
                Muffin marshmallow marshmallow cake bonbon. Tiramisu chocolate
                jelly beans chupa chups sugar plum. Jelly beans cookie marzipan
                bonbon cotton candy powder cake cake jelly.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export { RelatedArticles };
