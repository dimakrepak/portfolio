const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 5000;
const router = require("./routes/routes.js");

//Middleware
app.use(express.json());
app.use("/api", router);
// Serve static files from the React app
app.use(express.static("client/build"));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname + "../client/build/index.html"));
});

app.listen(port, () => {
  console.log("Server started " + port);
});
