const express = require('express'); 
const app = express(); 
const PORT = 3000; 
app.get('/', (req, res) =>
      res.send("7376221CS291 - SANJAY R"))
app.listen(PORT, () => console.log(`Example app listening at http://localhost:${PORT}`))