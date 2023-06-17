song1 = ""
song2 = ""

function preload() {
    song1 = loadSound("Undertale OST - Fallen Down.mp3")
    song2 = loadSound("Rick Astley - Never Gonna Give You Up.mp3")
}

function setup() {
    canvas = createCanvas(600, 500)
    canvas.center()

    video = createCapture(VIDEO)
    video.hide()
}

function draw() {
    image(video, 0, 0, 600, 500)
}