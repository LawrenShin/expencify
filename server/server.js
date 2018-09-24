const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

let publicPath = path.join(__dirname, '..', 'build');

app.use(express.static(publicPath));

app.get('/*', function (req, res) {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {console.log('IS UP');});