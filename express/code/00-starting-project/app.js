const express = require('express')
const path = require('path')

const app = express()

app.get('/', function(req, res) {
    res.send('<h1>testing app</h1>')
})

app.get('/restaurants', function(req, res) {
    const htmlFilePath = path.join(__dirname, 'views', 'restaurants.html')
    res.sendFile(htmlFilePath)
})

app.get('/recommend', function(req, res) {
    const htmlFilePath = path.join(__dirname, 'views', 'recommend.html')
    res.sendFile(htmlFilePath)
})

app.get('/index', function(req, res) {
    const htmlFilePath = path.join(__dirname, 'views', 'index.html')
    res.sendFile(htmlFilePath)
})

app.get('/confirm', function(req, res) {
    const htmlFilePath = path.join(__dirname, 'views', 'confirm.html')
    res.sendFile(htmlFilePath)
})

app.get('/about', function(req, res) {
    const htmlFilePath = path.join(__dirname, 'views', 'about.html')
    res.sendFile(htmlFilePath)
})



app.listen(3000)

