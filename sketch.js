man, man_runing,thunder,thunder_runing

function preload(){
    man_runing=loadImage(walking_1.png,walking_2.png,walking_3.png,walking_4.png,walking_5.png,walking_6.png,walking_7.png,walking_8.png)
    thunder_runing=loadImage(a.png,b.png,c.png,d.png)
}

function setup(){
    createCanvas(1000,1000)
   man=createSprite(500,500,20,20);
   man.addImage("../images/man_runing")
}

function draw(){
    
}   

