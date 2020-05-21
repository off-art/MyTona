const express = require("express");
const morgan = require("morgan");
const fetch = require("node-fetch");

const app = express();

const port = 3001;
const urlFetch =
  "http://newsapi.org/v2/top-headlines?" +
  "country=ru&" +
  "pageSize=100&" +
  "apiKey=7f035d3ceba44ce3a7b6b256f19a9bf7";

  
app.use(morgan("dev"));

const corsMiddleware = (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
};

app.get("/", corsMiddleware, async (req, res) => {
  const resp = await fetch(urlFetch);
  const json = await resp.json();
  res.send(json);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
