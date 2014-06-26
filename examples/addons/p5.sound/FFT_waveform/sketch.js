/**
 * DEMO: Draw the waveform of a sound as it plays using FFT.processWaveform()
 */

var soundFile;
var fft;
var fftSize = 1024;

// Array of amplitude values (0-255) over time. Length will be 1/2 fftSize.
var waveform = [];

function setup() {
  createCanvas(fftSize, 256);
  fill(255, 40, 255);


  // instantiate using a .wav, with .mp3 fallback if .wav isn't supported
  soundFile = new SoundFile('beat.wav', 'beat.mp3');

  // loop the sound file
  soundFile.loop();

  // Create an FFT object. Give it smoothing and fftSize
  fft = new FFT(.99, fftSize);

  h1 = createH1('press any key to pause');
}

function draw() {
  background(250);

  /** 
   * Analyze the sound as a waveform (amplitude over time)
   */
  waveform = fft.waveform();

  // Draw snapshot of the waveform
  beginShape();
  for (var i = 0; i< waveform.length; i++){
    stroke(5);
    strokeWeight(5);
    vertex(i*2, waveform[i]);
  }
  endShape();
}

function keyPressed() {
  soundFile.pause();
}
