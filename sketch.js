var gameState=0;
var voterCount;
var database;
var form,voter,game;
var allvoterinfo;
function setup(){
 createCanvas(displayWidth,displayHeight);
 database=firebase.database();
 game= new Game();
 game.getState();
 game.start(); 
 
}
function draw(){
    if(voterCount===4){
        game.update(1)
    }
    if(gameState==1 ){
      clear();
        game.play();
    }
}
