$( document ).on( "mobileinit", function( e ) {
  //jquery mobile 이 인클루되기전에 preevent
  console.log( "mobileinit" );
  printEvent( e.type );
});