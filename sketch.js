//Grace Granger Final Project for Creative Code

//define 3D model variable
let oilDrum;

async function setup(){
  createCanvas(800,800, WEBGL);
  //load the 3D
oilDrum = await loadModel('./Assets/OilDrum2.obj');
}

function draw(){
  background(255,245,235)

  ambientLight(150);
  directionalLight(255, 255, 255, 0, -.5, -1);

  noStroke()
  orbitControl();
  scale(5);
  model(oilDrum);
}