const express = require('express');
const app = express();
const path = require('path');


app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', function(req, res) {  
    res.render('LandingPage'); 
});

app.get('/home',function(req,res){
    res.render('Home');
})
app.get('/vision',function(req,res){
    res.render('Vision');
})
app.get('/mission',function(req,res){
    res.render('Mission');
})
app.get('/sectorsMobile',function(req,res){
    res.render('SectorsMobile');
})
app.get('/sectors',function(req,res){
    res.render('Sectors');
})
app.get('/contacts',function(req,res){
    res.render('Contact');
})

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
