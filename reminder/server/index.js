const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const route = require("../server/route/Route.js");
app.use(bodyParser.json());



require ("./database/Db.js");
const port = 8000;

require("./model/User.js");

app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());


app.get('/', (req, res) => {
  res.send('Hello World!');
});


app.use('/api',route);

app.listen(port, () => {
  console.log(`Server is listening at port ${port}`);
});
