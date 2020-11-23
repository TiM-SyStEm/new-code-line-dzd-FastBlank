//Generate range
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function speak() {
    let text = randomInt(1,9999999999999);
    speechSynthesis.speak(new SpeechSynthesisUtterance(text));
}
speak();
