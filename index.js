var katzDeliLine = [];

function takeANumber(katzDeliLine, person) {
  katzDeliLine.push(name);
  
  var deliLinePosition = katzDeliLine.length + 1;
  console.log("Welcome," + `${name}` + ". You are number " + `${deliLinePosition}` +" in line.")
}

function nowServing() {
  if (katzDeliLine.length < 1) {
    console.log("There is nobody waiting to be served!");
  } else {
    console.log(katzDeliLine[0]);
    delete katzDeliLine[0];
  }
}