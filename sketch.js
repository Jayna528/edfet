var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var roof1;
var rope1, rope2, rope3, rope4, rope5;
var bobDiameter = 51

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

   
engine = Engine.create();
world = engine.world;


function setup(){
    
    createCanvas(1000,1000)

    roofObject = new roof(500, 250, 512, 50);

    bobObject1 = new bob(102, 700, 51);

    bobObject2 = new bob(204, 700, 51);

    bobObject3 = new bob(306, 700, 51);

    bobObject4 = new bob(408, 700, 51);

    bobObject5 = new bob(510, 700, 51);

    rope1 = new rope(bobObject1.body,roofObject.body, -80,0);

    rope2 = new rope(bobObject2.body, roofObject.body -40,0);

    rope3 = new rope(bobObject3.body,roofObject.body, 0,0);

    rope4 = new rope(bobObject1.body,roofObject.body, 40,0);

    rope5 = new rope(bobObject5.body, roofObject.body, 80,0);

}


function draw(){
    roofObject.display();
    bobObject1.display();
    bobObject2.display();
    bobObject3.display();
    bobObject4.display();
    bobObject5.display();
    rope1.display();
    rope2.display();
    rope3.display();
    rope4.display(); 
    rope5.display();
}