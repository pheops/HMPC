let kick, snare, myPhrase, myPart;
let kickPattern = [1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0];
let snarePattern = [0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0];
let counterPattern = [1,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
var pos = -1 ;
var posQ = 0;

function preload() {
  kick = loadSound("sounds/KICK.wav");
  snare = loadSound("sounds/SNARE.wav");
}


function setup() {
  let cnv = createCanvas(345, 345);
  cnv.mousePressed(playMyPart);


  kickPhrase = new p5.Phrase('kick', kickPlay, kickPattern);
  snarePhrase = new p5.Phrase('snare', snarePlay, snarePattern);
  counterPhrase = new p5.Phrase('counter', counterAdv, counterPattern);

  myPart = new p5.Part();
  //myPart.onStep(counterAdv);
  myPart.addPhrase(counterPhrase);
  myPart.addPhrase(kickPhrase);
  myPart.addPhrase(snarePhrase);
  myPart.setBPM(80);

  button1 = createButton("");
  button1.mousePressed(kickPlay);
  button1.mousePressed(kickRecord);


  button2 = createButton("");
  button2.mousePressed(snarePlay);
  button2.mousePressed(snareRecord);

  button3 = createButton("");

  button4 = createButton("");
  button4.mousePressed(playMyPart);


  button5 = createButton("");
  button6 = createButton("");
  button7 = createButton("");
  button8 = createButton("");
  button9 = createButton("");
  button10 = createButton("");
  button11 = createButton("");
  button12 = createButton("");
  button13 = createButton("");
  button14 = createButton("");
  button15 = createButton("");
  button16 = createButton("");
}




function counterAdv(time){

pos = pos+1
if (pos > 15){ pos = 0}
 console.log(pos)
 
}

function kickRecord(){
  kick.play();
  kickPattern[pos] = 1;
  console.log(kickPattern)
}

function snareRecord(){
  snare.play();
  snarePattern[pos] = 1;
  //console.log(kickPattern)
}


function kickPlay(time, playbackRate) {
  kick.rate(playbackRate);
  kick.play(time);

}

function snarePlay(time, playbackRate) {
  snare.rate(playbackRate);
  snare.play(time);
}

function playMyPart() {
  userStartAudio();
  myPart.loop();

}

function draw() {
  background(0);

 
}
