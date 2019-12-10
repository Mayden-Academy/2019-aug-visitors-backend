const express = require('express');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const app = express();
const port = 3000;


app.listen(port, () => console.log(`app listening on port ${port}`));