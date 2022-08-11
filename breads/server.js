const express = require('express');

// configuration
require('dotenv').config();
const PORT = process.env.PORT;
const app = express();

//middleware
app.set('views', `${__dirname}/views`);
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views'));


//routes
app.get('/', (req,res) => {
    res.send('Welcome to an awesome app about breads!');
});


//breads
const breadsController = require('./controllers/breads-controller');
app.use('/breads', breadsController);


//Listen
app.listen(PORT, () => {
    console.log(`Listening on PORT: ${PORT}`)
})