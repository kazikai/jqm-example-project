$( document ).ready( function(){
    $('#navButton').click( function(){
        $.mobile.navigate( "path.html", { transition : "slide", info: "info about the #bar hash" });
    });

    $('#cpButton').click( function(){
        $.mobile.navigate( "#second", { transition : "slide", info: "info about the #bar hash" });
    });

    $( window ).on( "navigate", function( event, data ) {
        console.log( data );
    });

});