const express = require("express");
const morgan = require("morgan");


const app = express();
app.use('/wiki', require('./routes/wiki'));
app.use("/user", require("./routes/user"));



const { Page,User,db } = require('./models/index');

console.log(db)

db.authenticate().
then(()=> {
  console.log('connected to the database')
})

app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => res.send("hello"));



const connect = async () => {
  await db.sync();
  console.log("sweet, we are connected");

const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`app listening in port ${PORT}`);
  });
};

connect();

