const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.status(200).send({
      message: 'OK',
    })
})
  
app.post('/', (req, res) => {
    res.status(200).send({
        message: 'OK with POST',
    })
})

app.listen(8080, () => {
    console.log(`Server is running on port 8080`)
})

module.exports = app