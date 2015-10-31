$('#showPreview').click(function(){
    console.log('anteprima');
    //var rq = new XMLHttpRequest();
    //rq.open("GET", "editor", false);
    //rq.send();
    //$('#preview').html(rq.responseText);
    $('#preview').html('<big><big><big>Anteprima</big></big></big>');
});

$('#save').click(function(){
    console.log('salva');
    var a = $('#preview').html();
    if (a.indexOf('VINO!')===-1)
        $('#preview').html('<big><big>VINO!</big></big>');
    else
        $('#preview').html('<big>'+a+'</big>');
});