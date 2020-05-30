const express = require('express');
const connectDB = require('./config/db');
const path = require('path')

const app = express();

connectDB();

app.use(express.json());

// app.get('/', (req, res) => res.send('API Running'));



app.use('/api/users', require('./routes/api/users'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/posts', require('./routes/api/posts'));

if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}


module.exports = app;
