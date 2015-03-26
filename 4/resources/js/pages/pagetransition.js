$(function() {
    $.mobile.transitionHandlers.suquential_slide = $.mobile.transitionHandlers.sequential;
    $.mobile.transitionFallbacks.suquential_slide = "fade";
});