const express = require('express')
const app = express() 
app.get('/', (req, res) => {
  res.send('Node Server Ok!');
})

app.listen(9000, () => console.log('Server running on port 3000'))

