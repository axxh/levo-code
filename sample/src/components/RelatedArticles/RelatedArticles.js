import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

class RelatedArticles extends React.Component {
  constructor(props) {
    super(props);

    this.handleShowMore = this.handleShowMore.bind(this);

    this.state = {
      show: 3,
      cards: [
        {
          id: 1,
          date: '12 Sept 2018',
          title: 'Testing header Text',
          content: 'Chocolate cake toffee lollipop wafer chupa chups. Topping cookie oat cake bonbon tiramisu ice cream liquorice. Jelly-o dragée halvah bonbon cake.',
          url: 'https://www.google.com',
          panelColor: 'panel1'
        },
        {
          id: 2,
          date: '12 Sept 2018',
          title: 'Testing header Text',
          content: 'Chocolate cake toffee lollipop wafer chupa chups. Topping cookie oat cake bonbon tiramisu ice cream liquorice. Jelly-o dragée halvah bonbon cake.',
          url: 'https://www.google.com',
          panelColor: 'panel2'
        },
        {
          id: 3,
          date: '12 Sept 2018',
          title: 'Testing header Text',
          content: 'Chocolate cake toffee lollipop wafer chupa chups. Topping cookie oat cake bonbon tiramisu ice cream liquorice. Jelly-o dragée halvah bonbon cake.',
          url: 'https://www.google.com',
          panelColor: 'panel3'
        },
        {
          id: 4,
          date: '12 Sept 2018',
          title: 'Testing header Text',
          content: 'Chocolate cake toffee lollipop wafer chupa chups. Topping cookie oat cake bonbon tiramisu ice cream liquorice. Jelly-o dragée halvah bonbon cake.',
          url: 'https://www.google.com',
          panelColor: 'panel2'
        },
        {
          id: 5,
          date: '12 Sept 2018',
          title: 'Testing header Text',
          content: 'Chocolate cake toffee lollipop wafer chupa chups. Topping cookie oat cake bonbon tiramisu ice cream liquorice. Jelly-o dragée halvah bonbon cake.',
          url: 'https://www.google.com',
          panelColor: 'panel3'
        },
        {
          id: 6,
          date: '12 Sept 2018',
          title: 'Testing header Text',
          content: 'Chocolate cake toffee lollipop wafer chupa chups. Topping cookie oat cake bonbon tiramisu ice cream liquorice. Jelly-o dragée halvah bonbon cake.',
          url: 'https://www.google.com',
          panelColor: 'panel1'
        }
      ]
    };
  }

  componentDidMount() {
    console.log('did mount?');
  }

  handleShowMore() {
    const stateData = this.state;

    console.log('clicked', stateData, this.state);

    this.setState(prevState => {
      return({ show: stateData.show >= stateData.cards.length ? stateData.show : stateData.show + 100 });
    });
  }

  render() {
    const data = this.state;
    const items = data.cards.slice(0, data.show);

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
            {items.map(card => (
              <Col xs={12} sm={6} md={4} key={card.id}>
                <div className={`card ${card.panelColor}`}>
                  <span className="date">{card.date}</span>
                  <h5>{card.title}</h5>
                  <p>{card.content}</p>
                  <Button href={card.url} variant="outline-dark read-more-btn" size="sm">
                    Read More
                  </Button>
                </div>
              </Col>
            ))}
          </Row>
        </Container>

        <Container>
          <Row>
            <Col>
              <div className={`load-more-container ${items.length < 4 ? "" : "d-none"}`}>
                <Button variant="outline-dark load-more-btn" size="md" onClick={this.handleShowMore}>
                  Show More
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
