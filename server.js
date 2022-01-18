const express = require("express");
const app = express();
const port = process.env.PORT || 5280;

// middleware
app.use(express.json());

const routers = require("./routes/cdRouter.js");

app.use("/cds", routers);

const elcdrouter = require("./routes/elCdRouter");
app.use("/elcds", elcdrouter);

app.get("/", (req, res) => {
  res.send("Welcome Talent Path");
});



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
