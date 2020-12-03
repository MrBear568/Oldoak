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
const sprog = {
    dansk: 'dansk',
    engelsk: 'engelsk',
}
app.use(session(sprog));

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
const kontaktRoute = require('./routes/kontakt');
app.use('/', kontaktRoute);

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
// const controller = require('./controllers/pakkeløsning')
// controller.opretPakkeløsning('Ceremoni og portrætter', '- 2 timer', '- 5.000,- DKK', '- 2500,- DKK pr. time', '- Den bedste pakke at vælge hvis du ønsker billeder til din forlovelse, rådhus vielse, eller hvis du kun vil have det helt vigtige med fra brylluppet - jeres vielse plus jeres billede af jeres nye kærlighed.')
// controller.opretPakkeløsning('Halv dag', '- 5 timer', '- 10.000,- DKK', '- 2000,- DKK pr. time', '- Denne pakke blive som regel valgt af par som ønsker at jeg skal være en del af bryllupsceremonien, receptionen og selvfølgelig også få nogle smukke bryllups portrætter. Når det er sagt, vælger i selvfølgelig hvad der skal sættes fokus på, og hvad der skal fotograferes.')
// controller.opretPakkeløsning('Hel dag', '- 10 timer', '- 16.000,- DKK', '- 1600,- DKK pr. time', '- I denne pakker kommer jeg som regel til ceremonien og smutter om natten efter den første dans. I løbet af dagen fanger jeg alle smil, kram og glade øjeblikke. Måske vil i dog have at jeg kommer tidligt i stedet for, og ser én, eller begge af jer blive klar om morgenen Eller måske vil i have noget midt i mellem, det kan tilpasses efter jeres behov.')
// controller.opretPakkeløsning('Forlænget dag', '- 13 timer', '- 18.000,- DKK', '- ca. 1384,- DKK pr. time', '- Den helt store pakke. Jeg følger jer i alle øjeblikke, og sikrer mig at jeg ikke misser noget. Fra tidlig morgen til midnat, fra middag til sen nat, eller noget tredje midt i mellem, i vælger tidspunktet jeg begynder, og slutter, inden for tidsrammen.')



let server = app.listen(process.env.PORT || 8080, () => {
    let port = server.address().port;
    console.log(`server kører på port ${port}`);
})