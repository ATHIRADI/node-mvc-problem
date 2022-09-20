const express = require("express");
const app = express();

const middleware = (req, res, next) => {
  const { name, email } = req.body;

  app.locals.nameNew = name;
  app.locals.emailNew = email;

  let app1 = app.locals.nameNew;
  let app2 = app.locals.emailNew;

  console.log(app1);
  console.log(app2);
  next();
};

module.exports = middleware;
