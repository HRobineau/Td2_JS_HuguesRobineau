var console = require('./console');
var scraper = require('./scraper');
var contenu = require('./bdd').afficheHtml();
var express = require('express');
var app = express();
/* On utilise les cookies, les sessions et les formulaires */
app.use(express.cookieParser())
.use(express.session({secret: 'todotopsecret'}))
.use(express.bodyParser())
/* S'il n'y a pas de variable 'links' dans la session,
on en créé une vide sous forme d'array avant la suite */
.use(function(req, res, next){
    if (typeof(req.session.links) == 'undefined') {
        req.session.links = [];
    }
    next();
})


.get('/scraper', function(req, res) { 
    res.render('accueil.ejs', {links: req.session.links}); // on utilise le template ejs et en lui envoi la variable de session links
})


.post('/scraper/search/', function(req, res) {
    if (req.body.newtodo != '') {
	scraper.get_page(req.body.newtodo);//on lance le scraping avec en paramètre l'url entrée dans le formulaire
	
    }
  	
    res.redirect('/scraper');
})


//affichage des liens
.post('/scraper/affiche/', function(req, res) {
	req.session.links=[];
	for(var i=0;i<contenu.length;i++){
		req.session.links.push(contenu[i]);
		console.log("lien :"+contenu[i]);
	}   	

    res.redirect('/scraper');
})

/* On redirige vers la links si la page demandée n'est pas trouvée */
.use(function(req, res, next){
    res.redirect('/scraper');
})

console.server('Running ...');
app.listen(8080);
