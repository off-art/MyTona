import React, { useEffect, useState } from "react";
import "./App.css";
import { Home, News, Contacts, Login, Loader, Logout } from "./components";
import { Navbar, Nav } from "react-bootstrap";
import { Switch, Route, Redirect, Link } from "react-router-dom";
import { connect } from "react-redux";
import { autoLogin } from "./store/actions/auth";

function App({ autoLogin, isAuth  }) {


  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    autoLogin()

    fetch(
      "http://newsapi.org/v2/top-headlines?" +
        "country=ru&" +
        "pageSize=100&" +
        "apiKey=2380086968a1446d87000d3087b96671"
    )
      .then((response) => response.json())
      .then((news) => {
        setNews(news);
        setTimeout(() => {
          setLoading(false);
        },2000)
      });
  },[]);

  let routes = (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Redirect to="/login" />
    </Switch>
  );

  if (isAuth) {
    routes = (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/news"
          render={() => (loading ? <Loader /> : <News news={news} />)}
        />
        <Route exact path="/logout" component={Logout} />
        <Route exact path="/contacts" component={Contacts} />
        <Redirect to="/" />
      </Switch>
    );
  }
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>
          <Link className="linkItem" to="/">
            MyTona
          </Link>
        </Navbar.Brand>
        {isAuth && (
          <Nav className="mr-auto">
            <Link className="linkItem" to="/news">
              News
            </Link>
            <Link className="linkItem" to="/contacts">
              Contacts
            </Link>
          </Nav>
        )}
        <Nav>
          {isAuth ? (
            <Link className="linkItem" to="/logout">
              Logout
            </Link>
          ) : (
            <Link className="linkItem" to="/login">
              Login
            </Link>
          )}
        </Nav>
      </Navbar>
      {routes}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    isAuth: !!state.auth.token,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    autoLogin: () => dispatch(autoLogin()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
