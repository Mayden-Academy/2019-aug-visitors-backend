const express = require('express');
const bodyParser = require('body-parser');
const Controller = require('./Controllers/index');
const cors = require('cors');
const jsonParser = bodyParser.json();
const app = express();
const port = 3001;
app.use(cors());

app.post('/visitors', jsonParser, Controller.signInVisitor);
app.get('/visitors', jsonParser, Controller.getCurrentVisitors);

app.listen(port);