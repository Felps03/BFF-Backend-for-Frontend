const express = require('express')

const app = express()

const userAgentMiddleware = (req, res, next) => {
  req.userAgent = req.get('User-Agent')
  next()
}

app.use(userAgentMiddleware)

app.get('/api/data', (req, res) => {
  if (req.userAgent.includes('Mobile')) {
    res.send({ message: 'Mobile device detected' })
  } else if (req.userAgent.includes('Chrome')) {
    res.send({ message: 'Web browser detected' })
  } else {
    res.send({ message: 'Other device detected' })
  }
})

app.listen(3000, () => {
  console.log('Server started on port 3000')
})
