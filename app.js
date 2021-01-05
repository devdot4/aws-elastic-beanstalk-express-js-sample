const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello World, I am devdot4!. I just built my new app!!!!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
