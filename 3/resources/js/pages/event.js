
$( window ).on( "hashchange", function( e ){
  //hash 가 변경될때의 이벤트
  console.log( e.type );
});
$( function(){
  $( "#event-clear" ).on( "click", function(){
    $( "#event" ).empty().listview( "refresh" );
    console.log("test");
  });
});
$( window ).on( "orientationchange", function( e ) {
  // 단말의 landscape/portrait
  console.log( e.type );
  printEvent( e.type );
});

// Bind to the navigate event
$( window ).on( "navigate", function( e, data ) {
  //console.log( data.state );
  console.log( e.type );
  printEvent( e.type );

});

$( window ).on( "pagebeforechange", function(){
  //deprecated 1.4.3
});
$( window ).on( "pagebeforehide", function(){
  //deprecated 1.4.0
});
$( window ).on( "pagebeforeload", function(){
  //deprecated 1.4.0
});
$( window ).on( "pagebeforeshow", function(){
  //deprecated 1.4.0
});
$( window ).on( "pagechange", function(){
  //deprecated 1.4.3
});
$( window ).on( "pagechangefailed", function(){
  //deprecated 1.4.3
});
$( window ).on( "pagehide", function(){
  //deprecated 1.4.0
});
$( document ).on( "pageinit", function(){
  //deprecated 1.4
});
$( window ).on( "pagemove", function(){
  //deprecated 1.4.3
});
$( window ).on( "pageshow", function(){
  //deprecated 1.4.0
});


$( window ).on( "pagecreate", function( e ){
  console.log( e.type );
  printEvent( e.type );
});


$( window ).on( "scrollstart", function( e ){
  console.log( e.type );
  printEvent( e.type );
});
$( window ).on( "scrollstop", function( e ){
  console.log( e.type );
  printEvent( e.type );
});

$( window ).on( "swipe", function( e ){
  console.log( e.type );
  printEvent( e.type );
});
$( window ).on( "swipeleft", function( e ){
  console.log( e.type );
  printEvent( e.type );
});
$( window ).on( "swiperight", function( e ){
  console.log( e.type );
  printEvent( e.type );
});

$( function(){
  $( "#touch" ).on( "tap", function( e ){
    $( e.target ).css( "background", "#0000FF" );
  });
  $( "#touch" ).on( "taphold", function( e ){
    $( e.target ).css( "background", "#FFFFFF" );
  });
});


$( window ).on( "throttledresize", function( e ){
  console.log( e.type );
  printEvent( e.type );
});

$( window ).on( "updatelayout", function( e ){
  console.log( e.type );
});

$( document ).on( "vclick", function( e ){
  console.log( e.type );
  printEvent( e.type );
});
$( document ).on( "vmousedown", function( e ){
  console.log( e.type );
  printEvent( e.type );
});
$( document ).on( "vmousemove", function( e ){
  console.log( e.type );
});
$( document ).on( "vmouseout", function( e ){
  console.log( e.type );
});
$( document ).on( "vmouseover", function( e ){
  console.log( e.type );
});
$( document ).on( "vmouseup", function( e ){
  console.log( e.type );
  printEvent( e.type );
});