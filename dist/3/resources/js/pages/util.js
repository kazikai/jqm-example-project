(function ( $, window, document, undefined ) {
  var count = 0;
  var printEvent = function( name ){
    var $li = $( "<li></li>" ).text( ++count + " : "  + name ),
        isEventOn = $( "[name='event-on']" ).prop( "checked" );
    if ( isEventOn ) {
        $( "#event" ).append( $li ).listview( "refresh" );
    }
  };
  window.printEvent = printEvent
})( jQuery, window, document );