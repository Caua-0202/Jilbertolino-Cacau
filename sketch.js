function setup() {
  createCanvas(600, 600); //area de trabalho
   background ("silver");
}
 
function draw() {
  
    stroke("darkblue") //borda
  fill("black")
  //console.log(mouseIsPressed)
  
  if(mouseIsPressed){
       // give all corners a radius of 20.
    rect(mouseX,mouseY,30, 20, 55, 50, 20);
  }
}

