require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')

const app = express();
const PORT = process.env.PORT || 5000;


mongoose.connect('mongodb://127.0.0.1:27017/bankmanagement', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to database');
}).catch((err) => {
  console.error('Error connecting to database:', err);
});

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(express.static('public'))

app.use(require('./router/routes'))

app.set("view engine", "ejs")


app.listen(PORT, ()=> {
    console.log(`Server is running on http://localhost:${PORT}`);
})

