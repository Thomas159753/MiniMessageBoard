const express = require("express");
const routes = require("./Routes/routes.js");
const path = require("path");

const app = express();
const port = 3000;

app.set("views", path.join(__dirname, "Views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.use("/", routes);

app.listen(port, () => {console.log(`Server is running on port ${port}`)})