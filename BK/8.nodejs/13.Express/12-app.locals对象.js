const express = require('express');
const path = require('path');
const app = express();
const port = 3000

app.engine('art', require('express-art-template'));
app.set('views', path.join(__dirname, 'view'));
app.set('view engine', 'art');

app.locals.users = [
  {
    name: '张三'
  }
]

app.get('/', (req, res) => {
  res.render('index2')

});

app.listen(port, () => {
  console.log(`run at http://localhost:${port}`);
})