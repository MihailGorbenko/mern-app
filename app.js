const express = require('express');
const config = require('config');
const mongoose = require('mongoose');
const path = require('path');

const bodyParser = require('body-parser');



const server = express();
const PORT = config.get('port') || 5000;


server.use('/api/auth',require('./routes/auth.routes'))
server.use(express.static(__dirname))
server.get('/', function(req,res) {
    res.sendFile(path.join(__dirname,'/client/index.html'));
})


async function start() {
    try {
        await mongoose.connect(config.get('mongoUri'), {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        server.listen(PORT, () => console.log(`App started at port ${PORT}...`));
    } catch (e) {
        console.log('Server error', e.message);
        process.exit(1);

    }
}

start()


