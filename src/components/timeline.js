import React from 'react';
import History from './history';
import NextChapter from './nextChapter';
import Prelude from './prelude';
import Eighties from './eighties';
import Gia from './GIA';
import JeffMann from './jeffMann';
import { Container, Row, Col } from 'reactstrap';

class Timeline extends React.Component {
  render() {
    return (
      <div className="text-center">
      <Container>
        <Row>
          <Col className="prelude">
            <Prelude />
          </Col>
          <Col>

          </Col>
        </Row>
        <Row>
          <Col>

          </Col>
          <Col>
            <History />
          </Col>

        </Row>
        <Row>

          <Col>
            <NextChapter />
          </Col>

          <Col>

          </Col>
          </Row>
          <Row>
          <Col>

          </Col>

          <Col>
            <Eighties />
          </Col>
        </Row>
        <Row>
        <Col>
          <Gia />
        </Col>
        <Col>
        </Col>
      </Row>
      <br/>
      <Row>
      <Col>
        <JeffMann />
      </Col>
    </Row>
    </Container>
    </div>
    );
  }
}

export default Timeline;
