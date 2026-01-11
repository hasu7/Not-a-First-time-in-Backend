const express = require('express')
const app = express()
const port = 9000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitch', (req, res) => {
  res.send('Hasu/twitch.com')
})
// app.get('/login', (req, res) => {
//   res.send('Hey user, Welcome to my twitch channel')
// })
// app.get('/youtube', (req, res) => {
//   res.send('No cares about Youtube bro')
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
