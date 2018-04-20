var katzDeli = [];

function takeANumber(katzDeliLine, person) {
  katzDeliLine.push(name);

  console.log("Welcome," + `${name}` + ". You are number " + `${katzDeliLine.length}` +" in line.")
}

function nowServing() {
  if (katzDeli.length < 1) {
    console.log("There is nobody waiting to be served!");
  } else {
    console.log(katzDeli[0]);
    delete katzDeli[0];
  }
}

function currentLine() {
  if (katzDeli.length < 1) {
    console.log("The line is currently empty.");
  } else {
  console.log("The line is currently: " + katzDeli.join(", "));
  }
}