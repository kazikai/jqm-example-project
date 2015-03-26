$.widget( "test.blue", /*[base widget] ,*/ {
    options: {
      /* ... */
    },
    _create: function() {
        this.element.removeAttr( "class" ).addClass( "blue" );
    }
});
$.widget( "test.red", /*[base widget] ,*/ {
    options: {
      /* ... */
    },
    _create: function() {
        this.element.removeAttr( "class" ).addClass( "red" );
    }
});
$.widget( "test.green", /*[base widget] ,*/ {
    options: {
      /* ... */
    },
    _create: function() {
        this.element.removeAttr( "class" ).addClass( "green" );
    }
});

$( document ).ready( function () {
    $( "#blue" ).on( "click", function(){
        $( "#widget1" ).blue();
    });
    $( "#red" ).on( "click", function(){
        $( "#widget1" ).red();
    });
    $( "#green" ).on( "click", function(){
        $( "#widget1" ).green();
    });
});
