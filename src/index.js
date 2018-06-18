const express = require("express");
const path = require("path");

// model
const User = require("./models/user");

const server = express();
server.use(express.static(path.join(__dirname, "./views")));

server.get("/user", async (req, res) => {
  const { query } = req;

  if (typeof query.id === "string") {
    // query id from user table
    const result = await User.findById(query.id);

    if (result) {
      return res.json(result);
    } else {
      res.status(404).end();
    }
  } else {
      res.status(403).end()
  }
});

server.listen(3000, function() {
  console.log("server is online, go to http://localhost:3000");
});
