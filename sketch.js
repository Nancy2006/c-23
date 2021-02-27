const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var myEngine, myWorld;
var box1;
var box2;
var ground;

function setup(){
    var canvas = createCanvas(400,400);
    myEngine = Engine.create();
    myWorld = myEngine.world;

    box1 = new Box(200,300,50,50);
    box2 = new Box(230,100,50,80);

    ground = new Ground(200,350,400,20);
}

function draw(){
    background(0);
    Engine.update(myEngine);
    box1.display();
    ground.display();
    box2.display();
}
