var express = require('express');
var fs = require('fs');
var app = express();


//utility
function getPagename(orUrl) {
    var page = orUrl;
    if (page == '/Home')
        return 'index';
    else
        return page.substr(1);
}

function isRes(pn) {
    var resNames = ['style', 'script', 'images', 'resources'];
    for (var i in resNames)
        if (pn.indexOf(resNames[i]) != -1)
            return true;
    return false;
}

function redirectToEdit(pn, res) {
    console.log('page does not exists');
    res.send('Dovrebbe redirigere alla pagina di edit con il percorso della pagina non esistente<br>'+pn);
}


//setting responses to requests
app.get('/*', function (req, res) {
    var pagename = getPagename(req.originalUrl);
    if (pagename == ""){
        res.redirect('/Home');
        return ;
    }
    
    //if page is a generic resource and if exists, it is sent as a file
    if (isRes(pagename)) {
        if (!fs.existsSync(pagename)) {
            console.log('ALERT: request for page ' + pagename + " that doesn't exists");
            res.send('');
        }
        else
            res.sendFile(pagename, {'root': './'});
    } else {
        //else the page is a page of content, and if exists is in the folder jades/pages/
        console.log('request of ' + pagename);
        if (fs.existsSync('jade/pages/' + pagename + '.jade'))
            res.render(pagename);
        else
            //else redirect to the edit page with the path of the page
            redirectToEdit(pagename, res);
    }
});



//starting server
app.set('views', './jade/pages');
app.set('view engine', 'jade');

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Server listening at http://%s:%s', host, port);
});