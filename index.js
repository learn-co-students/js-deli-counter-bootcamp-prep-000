var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  if (katzDeliLine.length == 1) {
    console.log(`Welcome, ${name}. You are number 1 in line.`)
  } else {
    var position = katzDeliLine.length + 1;
    console.log(`Welcome, ${name}. You are number ${position} in line.`)
  }
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length == 0) {
    console.log("There is nobody waiting to be served!");
  } else {
  console.log(katzDeliLine[0]);
  katzDeliLine = katzDeliLine.shift();

}}
