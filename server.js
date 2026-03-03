require('dotenv').config();     
const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src', 'views'));
app.use(express.static(path.join(__dirname, 'public')));



app.get('/', (req, res) => {
    res.render('index', { title: 'Home' });
});





app.use((req, res, next) => {
    res.status(404).render('404', { title: 'Site Not Found' });
});


app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Oopsie');
});

app.listen(PORT, () => {
    console.log(`Server keyrir á http://localhost:${PORT}/`);
});