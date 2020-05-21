import React from "react";
import { Carousel } from "react-bootstrap";
import "./home.css";

function Home(props) {
  return (
    <div>
      <div className="logo-box">
        <img src="img/logo.png" alt="LOGO" />
      </div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="img/5e97a727c7c9a.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 className="shadowText">MANASTORM: ARENA OF LEGENDS®</h3>
            <p className="shadowText">
              Изучи всевозможные заклинания и стань Мастером Арены
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="img/5e97a70baefd3.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3 className="shadowText">ЗАПИСКИ ИСКАТЕЛЯ: ТАЙНЫ ДАРКВУДА</h3>
            <p className="shadowText">
              Отправляйтесь в невероятное путешествие в проклятый город Дарквуд!
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="img/5e97a76e6befa.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3 className="shadowText">RAVENHILL®: HIDDEN MYSTERY</h3>
            <p className="shadowText">
              Распутайте клубок загадочных проиcшествий в городе, полном тайн и
              мистики!
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Home;
