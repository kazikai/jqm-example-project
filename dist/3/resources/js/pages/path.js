$( document ).ready( function(){

    var i, inputList = [
        'http://foo.com/a/file.html',
        '//foo.com/a/file.html',
        '/a/file.html',
        'file.html',
        '?a=1&b=2',
        '#foo'
    ];

    for(i in inputList) {
        console.log( '$.mobile.path.get("' + inputList[i] + '") ==> ' + $.mobile.path.get(inputList[i]) );
        console.log( '$.mobile.path.isAbsoluteUrl("' + inputList[i] + '") ==> ' + $.mobile.path.isAbsoluteUrl(inputList[i]) );
        console.log( '$.mobile.path.isRelativeUrl("' + inputList[i] + '") ==> ' + $.mobile.path.isRelativeUrl(inputList[i]) );
        console.log( '$.mobile.path.makeUrlAbsolute("' + inputList[i] + '") ==> ' + $.mobile.path.makeUrlAbsolute(inputList[i],'http://foo.com/a/b/c/test.html') );
    }

    var url = "http://jblas:password@mycompany.com:8080/mail/inbox?msg=1234&type=unread#msg-content"
    console.log( '$.mobile.path.parseUrl():', $.mobile.path.parseUrl(url) );

});