const express = require('express');
const app = express();

const port = 3000;

app.use(express.static('src'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/src/pages/index/index.html');
});

app.get('/create', (req, res) => {
    res.sendFile(__dirname + '/src/pages/create/create.html');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})