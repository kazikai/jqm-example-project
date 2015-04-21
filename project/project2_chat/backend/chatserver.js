var express = require('express'),
    app = express(),
    http = require('http'),
    server = http.createServer(app),
    io = require('socket.io').listen(server),
    port = 8080;

server.listen(port);
console.log('listening '+port+' port...');

var Rooms = [];
var nUser = 0;
var nRoom = 0;

var findRoom = function() {
    var i;
    // 한명만 있는 방을 찾는다.
    for(i in Rooms) {
        if (Rooms[i].people===1) {
            console.log('found room :', Rooms[i]);
            return Rooms[i];
        }
    }

    // 없을 경우, 빈방을 찾는다.
    for(i in Rooms) {
        if (Rooms[i].people===0) {
            console.log('found room :', Rooms[i]);
            return Rooms[i];
        }
    }

    // 그 외의 경우, 새 방을 만든다.
    var room = {
        name: 'room'+nRoom,
        people:0
    };
    Rooms.push(room);
    nRoom+=1;

    console.log('created room :', room);
    return room;
};

var joinRoom = function(room) {
    // 방이 꽉 찼을 경우에는 실패.
    if (room.people>=2) {
        console.log(room.name+' is full.');
        return false;
    };

    room.people += 1;
    return true;
};

var quitRoom = function(room) {
    room.people -= 1;
};

io.sockets.on('connection', function (socket) {
    socket.on('adduser', function() {
        nUser += 1;
        socket.username = 'User'+nUser;
        console.log(socket.username+' is added.');
    });

    socket.on('sendchat', function (data) {
	console.log( '['+socket.room+'] '+socket.username+' : '+data );
            io.sockets.in(socket.room).emit('updatechat', socket.username, data);
    });

    socket.on('joinRoom', function() {
        var oRoom = findRoom();

        if ( joinRoom( oRoom ) ) {
            socket.join( oRoom.name );

            socket.oRoom = oRoom;
            socket.room = oRoom.name;

            socket.emit('updatechat', 'Server', 'You entered '+oRoom.name);
            socket.broadcast.to(oRoom.name).emit('updatechat', 'Server', socket.username+' joins '+oRoom.name+'.');
        } else {
            console.log("fail to join "+oRoom.name);
            socket.broadcast.to(oRoom.name).emit('updatechat', 'Server', 'fail to join '+oRoom.name+'.');
        }
    });

    socket.on('quitRoom', function() {
        if (!socket.oRoom || !socket.room) {
            return;
        }
        var name = socket.oRoom.name;

        socket.leave(socket.room);
        quitRoom(socket.oRoom);
    });
});
