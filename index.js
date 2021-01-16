const express = require('express')
const app = express()
const port = process.env.PORT || 5000

app.post('/', (req, res) => {
  console.log(req)
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})