var katzDeli = [];

function takeANumber(katzDeliLine, name){
  var katzDeli = [];
  katzDeliLine.push(name);
  katzDeli.push(`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`);
  return katzDeli;
}

function nowServing(katzDeliLine){
  name = katzDeliLine[0];
  if (katzDeliLine.length > 0){
    katzDeliLine.shift(name);
    return(`Currently serving ${name}.`);
  }
  else{
    return("There is nobody waiting to be served!");
  }
}


function currentLine(katzDeliLine){
  if (katzDeliLine.length == 0) {
    return ("The line is currently empty.");
  } else {
    var newLine = [];
    for (let i = 0; i < katzDeliLine.length; i++) {
      newLine.push(` ${i+1}. ${katzDeliLine[i]}`);
    }
  return (`The line is currently:${newLine}`);
}
}


