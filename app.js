const express = require("express");
const morgan = require("morgan");

const app = express();

const { db } = require('./models');

console.log(db)

db.authenticate().
then(()=> {
  console.log('connected to the database')
})

app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => res.send("hello"));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`app listening in port ${PORT}`);
});
