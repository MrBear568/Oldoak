const express = require('express');
const app = express();
app.set('view engine', 'pug');

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const bodyparser = require('body-parser');
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

const mongoose = require('mongoose');
mongoose.Promise = global.Promise
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    autoIndex: true,
    useUnifiedTopology: true
});

const db = mongoose.connection
db.on('error', error => console.log(error))
db.once('open', () => console.log('Connected to mongoose'))

//Routes
// FAQ 
const fagRoute = require('./routes/fagRoute');
const omMigRoute = require('./routes/omMigRoute')
app.use('/', fagRoute);
app.use('/', omMigRoute);

// booking
const bookingRoute = require('./routes/booking');

let server = app.listen(process.env.PORT || 8080, () => {
    let port = server.address().port;
    console.log(`server kører på port ${port}`);
})