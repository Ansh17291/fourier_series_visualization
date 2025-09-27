let time = 0;
let wave =[]
function setup(){
    createCanvas(600, 400);
    slider = createSlider(1,20,1);
}
function draw() {
    background(0);
    translate(200, 200);


    let x =0;
    let y =0;

    for(let i = 0; i< slider.value(); i++){
        let prevx = x;
        let prevy = y;
        let n = i * 2 + 1;
        let radius = 70*(4 / (n*PI)) ;
        x += radius* cos(n * time);
        y += radius* sin(n * time);
        stroke(255, 100);
        noFill();
        ellipse(prevx,prevy, radius*2)   

        
        fill(255);
        stroke(255);
        line(prevx,prevy,x,y);
        ellipse(x,y,5);


    }
    wave.unshift(y);
    translate(200,0);
    line(x-200,y,0,wave[0]);



    beginShape();
    noFill();
    stroke(0, 0, 255); // Pure blue color
    strokeWeight(4);
    for(let i= 0; i < wave.length; i++){
        curveVertex(i, wave[i]);
    }
    endShape();

    if (wave.length > 250){
        wave.pop();
    }



    time+=0.03;

}