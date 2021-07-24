function setup(){
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
}
function take(){
    save("Photoed-frame-cool-JPG.png");
}
function draw(){
    line(60, 60, 500, 60);
    line(550, 60, 550, 430);
    line(550, 430, 60, 430);
    line(60, 430, 60, 60); 
    image(video, 60, 60, 490, 370);
    let c = color("green");
    fill(c);
    noStroke();
    circle(60, 60, 100);
    c = color("red");
    fill(c);
    noStroke();
    rect(500, 20, 100, 100);
    c = color("blue");
    fill(c);
    noStroke();
    circle(550, 430, 100);
    c = color("yellow");
    fill(c);
    noStroke();
    rect(30, 370, 100, 100);
}