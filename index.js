const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const jsonParser = bodyParser.json();
const app = express();
const port = 3000;
app.use(cors())


app.listen(port, () => console.log(`app listening on port ${port}`));