const express = require('express');
const helmet = require('helmet');
const app = express();

app.set('views', 'views');
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use('/material', express.static('node_modules/angular-material'));


app.get('*', (req, res) => {
  res.render('index');
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listing at port ${port}`);
})