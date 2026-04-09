require('dotenv').config();     


const express = require('express');
const path = require('path');
const teamRoutes = require('./src/routes/teamRoutes');
const playerRoutes = require('./src/routes/playerRoutes');


const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src', 'views'));

app.use(express.static(path.join(__dirname, '../public')));


app.use('/', teamRoutes);
app.use('/', playerRoutes);


app.listen(PORT, () => {
    console.log(`Server keyrir á http://localhost:${PORT}/`);
});