const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 5000;
const router = require("./server/routes/routes");

//Middleware
app.use(express.json());
app.use("/api", router);
// Serve static files from the React app
app.use(express.static(path.join(__dirname, "client/build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/public/index.html"));
});

app.listen(port, () => {
  console.log("Server started " + port);
});
