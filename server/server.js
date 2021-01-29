const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
var cors = require('cors');

require('dotenv').load();

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get('/api/v1/somador/:primeiro/:segundo', (req, res) => {
  const total = Number(req.params.primeiro) + Number(req.params.segundo);
  res.json(total);
});

app.listen(port, () => console.log(`Listening on port ${port}`));