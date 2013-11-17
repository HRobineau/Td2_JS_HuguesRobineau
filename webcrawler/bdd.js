
var console	    = require('./console');
var mongoose	    = require('mongoose');


//Connexion à la base de donnée
mongoose.connect('mongodb://localhost/scraper',function(err){
			if(err){throw err;}
		});


	//on créé un schema
	var linkSchema = new mongoose.Schema({
		link : String,
		date :{ type : Date, default : Date.now}
		
	});
	//puis un model
	var linkModel = mongoose.model('link',linkSchema);

	//fonction pour enregistrer un lien dans la bdd
	exports.sauvegarderLien = function sauvegarderLien(lien){

		var link = new linkModel({link : lien});
	
		link.save(function (err){
			if(err){throw err;}
		});
		return null;
	}

	//fonction retournant un tableau contenant les entrées du model linkModel
	exports.afficheHtml = function afficheHtml(){
			var links= new Array();

			var query = linkModel.find(null);

			query.limit(100);

			query.exec(function (err, comms) {
			  if (err) { throw err; }
			  // On va parcourir le resultat et les afficher joliment
			  var comm;
			  for (var i = 0, l = comms.length; i < l; i++) {
			    comm = comms[i];
			    links.push(comm.link);
			    //console.log('Lien : ' +links[i]);
			  }
			});
		return links;


	}

	//fonction permettant de vider le model linkModel
	exports.drop = function drop(){

		
		linkModel.find(null, function (err,docs){
			docs.forEach(function(lien,index){

				lien.remove();
	
			});
		});

	}


