import React from "react";
import { Card } from "react-bootstrap";
import Moment from "react-moment";

function OneNews(props) {
  const { urlToImage, title, description, publishedAt, url } = props.news;

  return (
    <Card style={{ marginTop: "10px" }}>
      <Card.Img variant="top" src={urlToImage} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <a target="_blank" rel="noopener noreferrer" href={url}>
          Ссылочка
        </a>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">
          <Moment format="DD.MM.YYYY HH:mm" date={publishedAt} />
        </small>
      </Card.Footer>
    </Card>
  );
}

export default OneNews;
