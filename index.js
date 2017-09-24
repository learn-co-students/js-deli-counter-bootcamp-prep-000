var katzDeliLine = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  var placeLine = katzDeliLine.indexOf(name)+1;
  return `Welcome, ${name}. You are number ${placeLine} in line.`
}



function nowServing(katzDeliLine){
  if(katzDeliLine.length === 0){
    return "There is nobody waiting to be served!"
  }

  else {
    var current = katzDeliLine[0];
    katzDeliLine.shift();
    return `Currently serving ${current}.`
  }
}

function currentLine(katzDeliLine){
  var line = {};

  if (katzDeliLine.length === 0){
    return "The line is currently empty."
  }
  else {

  var line = [];

  for (let i = 0; i < katzDeliLine.length; ++i){

    line.push(i+1 + ". "+ katzDeliLine[i]);

  }
}
    return "The line is currently: " + line.join(', ');

  }
