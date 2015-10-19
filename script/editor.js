//console.log('editor.js');

//funzione che legge il contenuto di un file html
$.get("../pseudo-pages/Pokemon/Alakazam.phtml", function(data) {
    //console.log(data);
    $('#pageCode').html(data.replace('<', '&lt;').replace('>', '&gt;'));
}, 'text');


//script to execute a function when the button is pressed
$("#save").click(function(e) {
    e.preventDefault();

    var blob = new Blob([$('#pageCode').html()..replace('&lt;', '<').replace('&gt;', '>')], {type: "text/plain;charset=utf-8"});
    saveAs(blob, "Alakazam.phtml");
});