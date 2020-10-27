const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

//container variables
var ground,d1,d2,d3,d4,d5,d6,d7;

// plinkos
var p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20;
var p21,p22,p23,p24,p25,p26,p27,p28,p29,p30,p31,p32,p33,p34,p35,p36,p37;

//particle array
var particles=[]


 
function setup(){
    var canvas = createCanvas(480,800);
    engine = Engine.create();
    world = engine.world;

    //making containers
    ground=new Ground(240,790,480,10);
   d1=new Division(2,690,5,200);
   d2=new  Division(82,690,5,200);
   d3=new  Division(162,690,5,200);
   d4=new Division(242,690,5,200);
   d5=new Division(322,690,5,200);
   d6=new Division(402,690,5,200);
   d7=new Division(482,690,5,200);
    
   // makng plinkos
   //layer 1
p1=new Plinko(40,100,5);
p2=new Plinko(80,100,5);
p3=new Plinko(120,100,5);
p4=new Plinko(160,100,5);
p5=new Plinko(200,100,5);
p6=new Plinko(240,100,5);
p7=new Plinko(280,100,5);
p8=new Plinko(320,100,5);
p9=new Plinko(360,100,5);

//layer 2
p10=new Plinko(20,200,5);
p11=new Plinko(60,200,5);
p12=new Plinko(100,200,5);
p13=new Plinko(140,200,5);
p14=new Plinko(180,200,5);
p15=new Plinko(220,200,5);
p16=new Plinko(260,200,5);
p17=new Plinko(300,200,5);
p18=new Plinko(340,200,5);
p19=new Plinko(380,200,5);
p20=new Plinko(420,200,5);

   //layer 3
   p21=new Plinko(40,300,5);
   p22=new Plinko(80,300,5);
   p23=new Plinko(120,300,5);
   p24=new Plinko(160,300,5);
   p25=new Plinko(200,300,5);
   p26=new Plinko(240,300,5);
   p27=new Plinko(280,300,5);
   p28=new Plinko(320,300,5);
   p29=new Plinko(360,300,5);
   
   //layer 4
   p30=new Plinko(20,400,5);
   p31=new Plinko(60,400,5);
   p32=new Plinko(100,400,5);
   p33=new Plinko(140,400,5);
   p34=new Plinko(180,400,5);
   p35=new Plinko(220,400,5);
   p36=new Plinko(260,400,5);
   p37=new Plinko(300,400,5);
   p38=new Plinko(340,400,5);
   p39=new Plinko(380,400,5);
   p40=new Plinko(420,400,5);

   particle=new Particle(240,50,5)
}

function draw(){
    background('black');
    Engine.update(engine);



    //displaying objects

    //displaying containers
    ground.display();
    d1.display();
    d2.display();
    d3.display();
    d4.display();
    d5.display();
    d6.display();
    d7.display();

//displaying plinkos
//layer 1
p1.display();
p2.display();
p3.display();
p4.display();
p5.display();
p6.display();
p7.display();
p8.display();
p9.display();

//layer 2
p11.display();
p12.display();
p13.display();
p14.display();
p15.display();
p16.display();
p17.display();
p18.display();
p19.display();
p20.display();

//layer 3
p21.display();
p22.display();
p23.display();
p24.display();
p25.display();
p26.display();
p27.display();
p28.display();
p29.display();

//layer 4

p31.display();
p32.display();
p33.display();
p34.display();
p35.display();
p36.display();
p37.display();
p38.display();
p39.display();
p40.display();

//particle.display();

if(frameCount%60===0){
   particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
 
 }

 for (var j = 0; j < particles.length; j++) {
   
   particles[j].display();
 }
 

    
       
}

