var cp = require('colorplus');

var oldLog=console.log;
var date = new Date();
var afficheDate='Time: '+date.toString();
console.log = function(/* args */){
        
        //Translate arguments to an array        
        var args = Array.prototype.slice.call(arguments);
        //Set a new style to log, colors, and the current time
        args.unshift(cp.green,date.toString(),cp.red);
        args.push(cp.r);
        //rappel l'ancienne fonction, plus les arguments que l'on a définis
        oldLog.apply(console,args);
        
};


console.info = function(){
   //Translate arguments to an array        
        var args = Array.prototype.slice.call(arguments);
        //Set a new style to log, colors, and the current time
        args.unshift(cp.green,date.toString(),cp.blue);
        args.push(cp.r);
        //rappel l'ancienne fonction, plus les arguments que l'on a définis
        oldLog.apply(console,args);
        

};

//console pour les informations du serveur
console.server = function(){

	var date = new Date();
	var hour = date.getHours();
	var minu  = date.getMinutes();
   //Translate arguments to an array        
        var args = Array.prototype.slice.call(arguments);
        //Set a new style to log, colors, and the current time
        args.unshift(cp.green,hour+':'+minu,cp.cyan);
        args.push(cp.r);
        //rappel l'ancienne fonction, plus les arguments que l'on a définis
        oldLog.apply(console,args);
        

};

module.exports = console;
