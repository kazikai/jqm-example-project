var events = "beforecreate create beforechange beforetransition beforeshow show transition change beforehide hide beforeload load";
$.each( events.split(" "), function( i,v ) {
    $(document).on( "pagecontainer"+v, function(event, ui ) {
        console.log( event.type, ui );
    });
});