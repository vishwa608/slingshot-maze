const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var  target1, target3;
var backgroundImg,platform;
var ammo, gun;


function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Targets(700,320,70,70);
    box2 = new Targets(920,320,70,70);
    pig1 = new Targets(810, 350);
    log1 = new Targets(810,260,300, PI/2);

    box3 = new Targets(700,240,70,70);
    box4 = new Targets(920,240,70,70);
    pig3 = new Targets(810, 220);

    log3 =  new Targets(810,180,300, PI/2);

    box5 = new Targets(810,160,70,70);
    log4 = new Targets(760,120,150, PI/7);
    log5 = new Targets(870,120,150, -PI/7);

    bird = new Ammo(200,50);

    //log6 = new Log(230,180,80, PI/2);
    Gun = new Gun(bird.body,{x:200, y:50});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    //strokeWeight(4);
    ground.display();
    target1.display();
    target2.display();
    target3.display();
    target4.display();
    target5.display();
    target6.display();
    target7.display();
    target8.display();
    target9.display();
    target.display();

    ammo.display();
    platform.display();
    //log6.display();
    Gun.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    Gun.fly();
}

function keyPressed(){
    if(keyCode === 32){
        Gun.attach(bird.body);
    }
}