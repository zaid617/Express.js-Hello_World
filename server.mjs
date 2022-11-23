import express from 'express';


const app = express()
const port = process.env.port || 3000

app.get('/', (req, res) => {
  res.send('response from zaid laptop', req.ip)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})