var jade = require('jade');
var fs   = require('fs');

//console.log(fs.readdirSync('./jade'));

compileJade('./jade/pages/Pokedex_strategico.jade', './pages/Pokedex_strategico.html');
compileJade('./jade/index.jade', './index.html');
compileJade('./jade/pages/Pokemon/Alakazam.jade', './pages/Pokemon/Alakazam.html');
compileJade('./jade/pages/Pokemon/Dragonite.jade', './pages/Pokemon/Dragonite.html');

//compile the jade file in 'readPath' and save it in 'savePath'
function compileJade(readPath, savePath){
	console.log('compiling' + readPath + '...');
	//compile the template to a string
	var html = jade.renderFile(readPath, {doctype: 'html'});

	//save the compiled file
	fs.writeFileSync(savePath, html);
}