const express = require('express');

const app = express();
const port = 9111;

app.use(express.static(__dirname + '/examples'));

app.listen(port, (err, res) => {
    console.log(`listening port ${port}!`);
});