const express = require("express");

const routes = require("./routes/routes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", routes);

// const middleware = (req, res, next) => {
//   const { name, email } = req.body;
//   req.app.locals.nameNew = name;
//   req.app.locals.emailNew = email;
//   next();
// };

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname + "/index.html"));
// });

// app.post("/", middleware, (req, res) => {
//   const { name, email } = req.body;
//   res.send("Home Route");
// });

// app.get("/company", (req, res) => {
//   res.sendFile(path.join(__dirname + "/company.html"));
//   console.log(req.app.locals.nameNew);
//   console.log(req.app.locals.emailNew);
// });

// app.post("/company", (req, res) => {
//   console.log(req.app.locals.nameNew);
//   console.log(req.app.locals.emailNew);
//   res.send("Company Route");
// });

//Server running
app.listen(4001, () => {
  console.log(`Server Started `);
});
