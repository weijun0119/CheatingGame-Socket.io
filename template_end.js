
let bg;
let content;
let sprite;
let player1;
let star;
let sc;
let x = false;


function preload(){
    content = loadAnimation('public/assets/1內文和回覆.png');
    sprite = createSprite(960, 930);
    sprite.scale = 0.187;
    sprite.addAnimation('content', content);
    img = loadImage("public/assets/好的內文和回覆.png");
}

function setup() {
    bg = loadImage('public/assets/結局1.png');
    bg.width = bg.width*1.16;
    bg.height = bg.height*1.25;
    createCanvas(1920, 1080);
    sprite.setVelocity(0,-1);

}


function draw() {
    background(bg);
    drawSprites();


    if(sprite.position.y == 200 ){
        sprite.setVelocity(0,0);
    }

    if (x) {
        image(img,240,80,img.width/4,img.height/4);

    }
}




document.onkeydown=function(e){       
    var keyNum = window.event ? e.keyCode :e.which; 
    if(keyNum==32){  
        x = true ;
    }  
}

