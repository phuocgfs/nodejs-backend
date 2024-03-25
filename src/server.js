const express = require('express')
const app = express()
const path = require('path')
require('dotenv').config();


const port = process.env.PORT
const hostname = process.env.HOST_NAME



// config template engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')


app.get('/', (req, res) => {
    res.send('AWS access Signature Authentication Error Verification Token')
})
app.get('/bc', (req, res) => {
    // res.send('Check')
    res.render('sample.ejs')
})

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})