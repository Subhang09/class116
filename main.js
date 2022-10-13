var noseX=0;
var noseY=0;


function preload(){
    clownNose = loadImage("https://i.postimg.cc/fL3L3c5K/istockphoto-1192834521-612x612-removebg-preview.png");
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}
function modelLoaded(){
    console.log("poseNet is Initialized");
}

 function gotPoses(results){
    if (results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x-13;
        noseY = results[0].pose.nose.y-10;
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
    }
 }


function draw(){
    image(video, 0, 0, 300, 300);
    image(clownNose, noseX, noseY, 30, 30);
}

function take_snapshot(){
    save('myFilterImage.png');
}
