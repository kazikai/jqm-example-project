( function( $, window, document, undefined ){
  //addBackBtn 을 true로 하면 back 버튼을 별도의 마크업 없이 활성화 할수있다.
  $.mobile.toolbar.prototype.options.addBackBtn = true;
  //여러개로 변경 할수있다.
  $.mobile.toolbar.prototype.options.backBtnText = "뒤로가기";
  $.mobile.toolbar.prototype.options.backBtnTheme = "b"
})( jQuery, window, document );

