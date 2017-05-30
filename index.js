var GENERATED_RANDOM_NUMBER;
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
app.use(express.static(__dirname));
app.get('/', function(req, res){
    res.sendFile(__dirname + 'index.html');
});
//GENERATED_RANDOM_NUMBER constance init
GENERATED_RANDOM_NUMBER = 10;
//CHANGE THAT
io.on('connection', function(socket){
    console.log('nowy klient');
    socket.on('disconnect', function(){
        console.log('klient rip');
    });
});
io.on('connection', function(socket){
    socket.on('res', function(msg){
        if(msg!==""){
            if(msg<GENERATED_RANDOM_NUMBER){io.emit('res','low');}
            else if(msg>GENERATED_RANDOM_NUMBER){io.emit('res','high');}
            else{
                io.emit('res','good');
            }
        }
    });
});
io.on('connection', function(socket){
    socket.on('res', function(msg){
        console.log('number: ' + msg);
    });
});

http.listen(3000, function(){
    console.log('Serwer start na porcie 3000');
});