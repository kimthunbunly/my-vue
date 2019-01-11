const http = require('http');
const express = require('express');
const path = require('path');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'dist')));

    app.get('/*', function (req, res) {
        res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
}


const port = process.env.PORT || 5000;

const server = http.createServer(app);

server.listen(port);