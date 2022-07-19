import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import path from 'path';
const __dirname = path.resolve();

const app = express();
const httpServer = http.Server(app);
const io = new Server(httpServer);
app.use(express.static(__dirname));

let screen=[0,0,0];
let user1=[0,0,0,0];
let user2=[0,0,0,0];
let user3=[0,0,0,0];
let user4=[0,0,0,0];
//let id=[screen,user1,user2,user3,user4]; 
//連線
io.on('connection', function (socket) {
    let b=1;
    if (screen[0]==0){
        screen[0]="screen";
    }
    else if (user1[0]==0){
        user1[0]=socket.id;
        user1[1]=0;
    }
    else if (user2[0]==0){
        user2[0]=socket.id;
        user2[1]=0;
    }
    else if (user3[0]==0){
        user3[0]=socket.id;
        user3[1]=0;
    }
    else if (user4[0]==0){
        user4[0]=socket.id;
        user4[1]=0;
    }
    else{

    }
    console.log('a client connected:' + socket.id);
    
    //socket.broadcast.emit('directive', socket.id);

    socket.on('Start',function(){
        socket.broadcast.emit('User1Start',b);
        socket.broadcast.emit('User2Start',b);
        socket.broadcast.emit('User3Start',b);
        socket.broadcast.emit('User4Start',b);
    })

    socket.on('directive1', function (message) {
        //在Server上印出來
        user1[2]=message;
        
        user1[1]=user1[1]+1;
        socket.broadcast.emit('Screen1', user1);
    })

    socket.on('directive2', function (message) {
            user2[2]=message;
            
            user2[1]=user2[1]+1;
            socket.broadcast.emit('Screen2', user2);
    })

    socket.on('directive3', function (message) {
            user3[2]=message;
            
            user3[1]=user3[1]+1;
            socket.broadcast.emit('Screen3', user3);
    })

    socket.on('directive4', function (message) {
            user4[2]=message;
            
            user4[1]=user4[1]+1;
            socket.broadcast.emit('Screen4', user4);
    })
    socket.on("user1answer",function(){
        socket.broadcast.emit('user1screen');
    })
    socket.on("user2answer",function(){
        socket.broadcast.emit("user2screen");
    })
    socket.on("user3answer",function(){
        socket.broadcast.emit("user3screen");
    })
    socket.on("user4answer",function(){
        socket.broadcast.emit("user4screen");
    })
        //console.log(id);
        //將收到的message廣播到其它client，這樣另一個負責畫布的頁面才能收到此訊息
        // socket.broadcast.emit('Screen', id,socket.id);//s改大寫
});


httpServer.listen(3000, function () {
    console.log('listening on *:3000');
});