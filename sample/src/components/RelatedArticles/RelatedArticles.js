import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

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

          <Row>
            <Col xs={12} sm={6} md={4}>
              <div className="card panel1">
                <span className="date">12 Sept 2018</span>
                <h5>Testing header Text</h5>
                <p>
                  Chocolate cake toffee lollipop wafer chupa chups. Topping
                  cookie oat cake bonbon tiramisu ice cream liquorice. Jelly-o
                  dragée halvah bonbon cake.
                </p>
                <Button variant="outline-dark read-more-btn" size="sm">
                  Read More
                </Button>
              </div>
            </Col>
            <Col xs={12} sm={6} md={4}>
              <div className="card panel2">
                <span className="date">12 Sept 2018</span>
                <h5>Testing header Text</h5>
                <p>
                  Chocolate cake toffee lollipop wafer chupa chups. Topping
                  cookie oat cake bonbon tiramisu ice cream liquorice. Jelly-o
                  dragée halvah bonbon cake.
                </p>
                <Button variant="outline-dark read-more-btn" size="sm">
                  Read More
                </Button>
              </div>
            </Col>
            <Col xs={12} sm={6} md={4}>
              <div className="card panel3">
                <span className="date">12 Sept 2018</span>
                <h5>Testing header Text</h5>
                <p>
                  Chocolate cake toffee lollipop wafer chupa chups. Topping
                  cookie oat cake bonbon tiramisu ice cream liquorice. Jelly-o
                  dragée halvah bonbon cake.
                </p>
                <Button variant="outline-dark read-more-btn" size="sm">
                  Read More
                </Button>
              </div>
            </Col>
          </Row>
        </Container>

        <Container>
          <Row>
            <Col>
              <div className="load-more-container">
                <Button variant="outline-dark load-more-btn" size="md">
                  Read More
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export { RelatedArticles };
