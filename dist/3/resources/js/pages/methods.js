$( document ).ready( function(){
var html =
  "<div><button class='ui-btn'>Appended Button</button>"+
  "<div data-role='collapsible'><h3>Appended Collapsible</h3><p>Contents</p></div></div>";

  $("#button1").on("click", function() {
    $(html).appendTo("#content").enhanceWithin();
  });

  $("#button2").on("click", function() {
    $(html).appendTo("#content");
  });

});

$(document).on("pageshow", function(){
  $("input").jqmEnhanceable().css("background","blue");
});