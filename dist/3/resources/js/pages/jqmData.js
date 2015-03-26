$( document ).ready( function(){
    console.log( $("div#content").jqmData("role") );
    console.log( $("div[data-role=page]") );
    console.log( $("div:jqmData(role=page)") );
});