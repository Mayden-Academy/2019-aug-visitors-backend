const express = require('express');
const bodyParser = require('body-parser');
const DbConnector = require('./Services/DbService'); // require db service
const cors = require('cors');
const jsonParser = bodyParser.json();
const app = express();
const port = 3000;
app.use(cors())

app.get('/', async function() {
    let db = await DbConnector() // connect to db
    let collection = db.collection('visitors')
    let data = await collection.find().toArray()
    console.log(data)
})



app.listen(port, () => console.log(`app listening on port ${port}`));