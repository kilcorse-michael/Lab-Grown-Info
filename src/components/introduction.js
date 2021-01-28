import { Container, Row, Col } from 'reactstrap';
import diamond from '../imgs/diamond.png';
import diamond2 from '../imgs/diamond2.png';

function Introduction() {
  return (
    <div className="text-center">
    <Container>
      <Row>
        <Col>
            <img className="diamond" src={diamond} />
        </Col>
        <Col sm="6">
        <h2>One of these is mined and one is lab grown. Can you tell which is which?</h2>
        </Col>
        <Col>
        <img className="diamond2" src={diamond2} />
        </Col>
      </Row>
      <br />
      <Row>
        <Col>
        <h1>You can't see a difference because there is no difference!</h1>
        </Col>
      </Row>
    </Container>
    <div id="page-content">
       <div class="container text-center">
         <div class="row justify-content-center">
           <div class="col-md-7">
             <h1 class="font-weight-light mt-4 text-white">Scroll Down to Learn More!</h1>
             <p class="lead text-white-50">We are so excited to introduce you to the world of Lab Grown Diamond. Continue Scrolling to learn all about this jewelry revolution.</p>
           </div>
         </div>
       </div>
     </div>
     < br/>
     < br/>
     <br />
    </div>
  );
}

export default Introduction;
