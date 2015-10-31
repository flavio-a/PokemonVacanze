var express = require('express');
var fs = require('fs');
var app = express();


//utility
function isRes(pn) {
    var resNames = ['style', 'script', 'images', 'resources'];
    for (var i in resNames)
        if (pn.indexOf(resNames[i]) != -1)
            return true;
    return false;
}

function redirectToEdit(pn, res) {
    console.log('page ' + pn + ' does not exists');
    res.redirect('edit_page' + '?pageName='+pn+'&newPage=true');
}

function isEditable(pn) {
    var editable = [undefined, '', 'edit_page'];
    for (var i in editable)
        if (pn === editable[i])
            return false;
    return true;
}


//setting responses to requests
app.get('/*', function (req, res) {
    var pagename = req.params['0'];
    if (pagename == ""){
        res.redirect('/Home');
        return ;
    }
    if (pagename == 'Home')
        pagename = 'index';
    
    //if page is a generic resource and if exists, it is sent as a file
    if (isRes(pagename)) {
        if (!fs.existsSync(pagename)) {
            console.log('ALERT: request for ' + pagename + " that doesn't exists");
            res.send('');
        }
        else
            res.sendFile(pagename, {'root': './'});
    } else if (pagename == "edit_page") {
        //if the page is edit_page the server should render it with parameters
        if (isEditable(req.query.pageName))
            res.render('edit_page', {'tp': pagename, 'pn': req.query.pageName, 'newPage': req.query.newPage });
        else
            //cose da fare se si cerca di editare una pagina non editabile
            res.render('edit_page', {'tp': pagename, 'pn': 'ERROR', 'newPage': false });
    } else {
        //else the page is a page of content, and if exists is in the folder jades/pages/
        console.log('request of ' + pagename);
        if (fs.existsSync('jade/pages/' + pagename + '.jade'))
            res.render(pagename, {'tp': pagename});
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