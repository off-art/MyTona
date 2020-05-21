import React, { Component } from "react";
import { Form, Button, Card } from "react-bootstrap";
import "./login.css";
import { connect } from "react-redux";
import { auth } from "../../store/actions/auth";
class Login extends Component {
  state = {
    formControls: {
      email: {
        value: "",
        type: "email",
        placeholder: "Enter email",
        label: "Email address",
        controlId: "formBasicEmail",
        error: "Введите корректный Email",
      },
      password: {
        value: "",
        type: "password",
        placeholder: "Password",
        label: "Password",
        controlId: "formBasicPassword",
        error: "Введите корректный Email",
      },
    },
  };

  login = () => {
    const { email, password } = this.state.formControls;
    this.props.auth(email.value, password.value, true);
  };

  registr = () => {
    const { email, password } = this.state.formControls;
    this.props.auth(email.value, password.value, false);
  };

  handleChange = (e, controlName) => {
    const formControls = { ...this.state.formControls };
    const control = { ...formControls[controlName] };
    control.value = e.target.value;
    formControls[controlName] = control;
    this.setState({
      formControls,
    });
  };

  renderInputs = () => {
    return Object.keys(this.state.formControls).map((controlName, index) => {
      const control = this.state.formControls[controlName];
      return (
        <Form.Group key={controlName + index} controlId={control.controlId}>
          <Form.Label>{control.label}</Form.Label>
          <Form.Control
            onChange={(e) => this.handleChange(e, controlName)}
            value={control.value}
            type={control.type}
            placeholder={control.placeholder}
          />
        </Form.Group>
      );
    });
  };
  singIn = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <Card
        style={{
          width: "18rem",
          margin: "0 auto",
          padding: "10px",
          marginTop: "50px",
        }}
      >
        <Form onSubmit={this.singIn}>
          {this.renderInputs()}
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <div className="buttonsBlock">
            <Button
              className="btn"
              variant="primary"
              type="submit"
              onClick={this.login}
            >
              Login
            </Button>
            <Button
              onClick={this.registr}
              className="btn"
              variant="primary"
              type="submit"
            >
              Registr
            </Button>
          </div>
        </Form>
      </Card>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    auth: (email, password, isLogin) =>
      dispatch(auth(email, password, isLogin)),
  };
}

export default connect(null, mapDispatchToProps)(Login);
