song1 = ""
song2 = ""
leftWristX = 0;
leftWristy = 0;
rightWristX = 0;
rightWristY = 0;
scoreLeftWrist = 0;
song1_status = ""
song2_status = ""

function preload() {
    song1 = loadSound("Undertale OST - Fallen Down.mp3")
    song2 = loadSound("Rick Astley - Never Gonna Give You Up.mp3")
}

function setup() {
    canvas = createCanvas(600, 500)
    canvas.center()

    video = createCapture(VIDEO)
    video.hide()

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log("PoseNet is Set Up")
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results)
        scoreLeftWrist = results[0].pose.keypoints[9].score;


        leftWristX = results[0].pose.leftWrist.x
        leftWristY = results[0].pose.leftWrist.y
        console.log("leftWristX = " + leftWristX + ", leftWristY = " + leftWristY);
        rightWristX = results[0].pose.rightWrist.x
        rightWristY = results[0].pose.rightWrist.y
        console.log("rightWristX = " + rightWristX + ", rightWristY = " + rightWristY);
    }
}

function draw() {
    image(video, 0, 0, 600, 500)
    fill('ff0000');
    stroke('ff0000');

    song1_status = song1_status.isPlaying()
    song2_status = song2_status.isPlaying()

    if (scoreLeftWrist > 0.2) {
        circle(leftWristX, leftWristY, 20)
        song2_status.stop()

        if (song1_status == false) {
            song1_status.isPlaying()
            document.getElementById("heading").innerHTML = "Song: = " + song1
        }
    }
}