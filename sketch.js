const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var divisions = [];
var particles = [];
var plinkos = [];

var divisionHeight = 300;

function setup() {

    createCanvas(480, 750);

    engine = Engine.create();
    world = engine.world;


    ground = new Ground(240, 748, 480, 15);
    

    for (var i = 0; i <= 480; i = i + 80) {
        divisions.push(new Division(i, 750 - 300 / 2, 10, 300));
    }
    for (var k = 40; k <= 470; k = k + 50) {
        plinkos.push(new Plinko(k, 75));
    }
    for (var k = 80; k <= 460; k = k + 50) {
        plinkos.push(new Plinko(k, 175));
    }
    for (var k = 40; k <= 480; k = k + 50) {
        plinkos.push(new Plinko(k, 275));
    }
    for (var k = 80; k <= 400; k = k + 50) {
        plinkos.push(new Plinko(k, 375));
    }

}

function draw() {
    background(0);
    Engine.update(engine);
    ground.display();
    


    if (frameCount % 60 === 0) {
        particles.push(new Particle(random(width / 2 - 50, width / 2 + 50), 0, 11));
    }
    for (var a = 0; a < particles.length; a++) {
        particles[a].display();
    }

    for (var b = 0; b < divisions.length; b++) {

        divisions[b].display();
    }
    for (var c = 0; c < plinkos.length; c++) {
        plinkos[c].display();
    }
}