require('dotenv').config()
const express = require('express')
const http = require('http')

const app = express()
const connectToDatabase = require('./db')
const Note = require('./Note')

app.get('/', async (req, res) => {
    // console.log(req.params);

    await connectToDatabase()
    const notes = await Note.find()
    // console.log(notes);
    res.send({ v: 2, notes })
})

http.createServer(app).listen(process.env.PORT || 8000)
