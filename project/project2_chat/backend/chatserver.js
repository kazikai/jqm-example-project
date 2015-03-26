var express = require('express')
  , app = express()
  , http = require('http')
  , server = http.createServer(app)
  , io = require('socket.io').listen(server);

//log level : debug(3)
io.set('log level', 3);

server.listen(8080);
console.log('listening 8080 port...');

//
var Rooms = [];
var nUser = 0;
var nRoom = 0;

var findRoom = function() {
 var i;
 // find waiting room (1 people)
 for(i in Rooms) {
  if (Rooms[i].people==1) {
   return Rooms[i];
  }
 }

 // find empty room (0 people)
 for(i in Rooms) {
  if (Rooms[i].people==0) {
   return Rooms[i];
  }
 }

 // create a new room
 var room = {
  name: 'room'+nRoom,
  people:0
 };
 Rooms.push(room);
 nRoom+=1;

 return room;
};

var joinRoom = function(room) {
 // if full
 if (room.people>=2) {
  console.log(room.name+' is full.');
  return false;
 }

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
	});

        // when the client emits 'sendchat', this listens and executes
        socket.on('sendchat', function (data) {
		console.log( '['+socket.room+'] '+socket.username+' : '+data );
                io.sockets.in(socket.room).emit('updatechat', socket.username, data);
        });

	// if no empty room, create a room.
	socket.on('joinRoom', function() {
		var oRoom = findRoom();
		joinRoom( oRoom );

		socket.join( oRoom.name );

		socket.oRoom = oRoom;
		socket.room = oRoom.name;
       	socket.emit('updatechat', 'Server', 'You entered '+oRoom.name+'.');
        socket.broadcast.to(oRoom.name).emit('updatechat', 'Server', socket.username+' joins '+oRoom.name+'.');
		oRoom.nPeople+=1;
	});

	socket.on('quitRoom', function() {
		if (!socket.oRoom) {
			return;
		}
		var name = socket.oRoom.name;

		if (!socket.room || !socket.oRoom) {
			return;
		}
		socket.leave(socket.room);
		quitRoom(socket.oRoom);

		socket.broadcast.to(socket.room).emit('updatechat', 'User', socket.username+' leaved '+socket.oRoom.name+'.');
	});

        // when the user disconnects.. perform this
        socket.on('disconnect', function(){
		if (socket.room) {
               socket.broadcast.to(socket.room).emit('updatechat', 'Server', socket.username+' try to quit.');
		}
               socket.leave(socket.room);
        });
});
