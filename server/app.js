const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 5000;

if (process.env.NODE_ENV === "production") {
  app.use(express.static());
}

//Connection to client side
if (process.env.NODE_ENV === "production") {
  // Exprees will serve up production assets
  app.use(express.static(__dirname, "client", "build"));
  // Express serve up index.html file if it doesn't recognize routeget
  const path = require("path");
  app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(port, (err) => {
  if (err) return console.log(err);
  console.log("Server running on port: ", port);
});
