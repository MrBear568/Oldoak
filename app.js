const express = require('express');
const app = express();
app.use("/static", express.static("public"))
app.set('view engine', 'pug');

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const bodyparser = require('body-parser');
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

const session = require('express-session');
const { transcode } = require('buffer');
app.use(session({ secret: 'F55A71BE-952A-4956-BBCF-F8CC8DE5D978' }));

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
const forsideRoute = require('./routes/forsideRoute')
app.use('/', fagRoute);
app.use('/', omMigRoute);
app.use('/', forsideRoute);

//galleri
const galleri = require('./routes/galleri')
app.use('/', galleri);

// booking
const contactRoute = require('./routes/contact');
app.use('/', contactRoute);

//api
const apiRoute = require('./routes/api');
app.use('/', apiRoute);

// pakkeløsning
const pakkeløsningRoute = require('./routes/pakkeløsning')
app.use('/', pakkeløsningRoute)

//login
const loginRoute = require('./routes/login')
app.use('/', loginRoute);

// oprettelse af login
//const controller = require('./controllers/login')
//controller.opretLogin('admin', 'nimda')

//oprettelse af pakkeløsning
//const controller = require('./controllers/pakkeløsning')
//controller.opretPakkeløsning('pakkenavn', 123, 'beskrivelse')

let server = app.listen(process.env.PORT || 8080, () => {
    let port = server.address().port;
    console.log(`server kører på port ${port}`);
})