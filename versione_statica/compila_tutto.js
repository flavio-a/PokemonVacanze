var jade = require('jade');
var fs   = require('fs');

exploreFolder('./jade', compile);

function exploreFolder(folder, work){
	fs.readdir(folder, function (err, list){
		for (var path in list){
			var fullPath = folder + '/' + list[path];
			if (list[path].indexOf('.') == -1)
				exploreFolder(fullPath, work);
			else
				work(fullPath);
		}
	});
}

//è il compito da eseguire su ogni file: controlla se è una pagina jade da compilare
//e la compila salvandola nel percorso giusto
function compile(path){
	if (isPage(path))
		compileJade(path, getSavePath(path));
}

function isPage(path){
	if (path.indexOf('templates') === -1)
		if (path.indexOf('.jade') === (path.length - '.jade'.length))
		return true;
	return false;
}

function getSavePath(path){
	var savePath = path;
	savePath = '.' + savePath.substring('./jade'.length);
	savePath = savePath.substring(0, savePath.length - '.jade'.length) + '.html';
	return savePath;
}

//compile the jade file in 'readPath' and save it in 'savePath'
function compileJade(readPath, savePath){
	console.log('compiling' + readPath + '...');
	//compile the template to a string
	var html = jade.renderFile(readPath, {doctype: 'html'});

	//save the compiled file
	fs.writeFileSync(savePath, html);
}