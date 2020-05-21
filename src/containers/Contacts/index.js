import React from "react";
import { connect } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import './contacts.css'
function Contacts(props) {
  return (
    <Container>
      <Row className='row'>
        <Col xs={6} md={4}>
          <span>
          Ваш Email: <h1>{localStorage.getItem('email')}</h1>
           </span>
          
        </Col>
      </Row>
    </Container>
  );
}

function mapStateToProps(state) {
  return {
    email: state.auth.email,
  };
}

export default connect(mapStateToProps)(Contacts);
