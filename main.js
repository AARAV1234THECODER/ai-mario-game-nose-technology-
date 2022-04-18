function preload() {
	world_start = loadSound("world_start.wav");
	mario_coin = loadSound("coin.wav")
	mario_jump = loadSound("jump.wav")
	mario_kick = loadSound("kick.wav")
	mario_gameover = loadSound("gameover.wav")
	mario_die = loadSound("mariodie.wav")
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	instializeInSetup(mario);
	canvas.parent("canvas")
	video=createCapture(VIDEO)
	video.size(800,400)
	video.parent("gameconsole")
	posenet=ml5.poseNet(video,modelloaded)
posenet.on("pose",gotPoses)
}

function draw() {
	game()
}
function modelloaded(){
	console.log("m0dEl iS l0aDeD")
}
function gotPoses(result){
if(result.length>0){
console.log(result)
noseX=result[0].pose.nose.x
noseY=result[0].pose.nose.y
console.log(noseY)


}
}






