
function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  var position = (katzDeliLine.indexOf(name) + 1);
  return `Welcome, ${name}. You are number ${position} in line.`;
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length === 0){
    return 'There is nobody waiting to be served!';
  }else if(katzDeliLine.length > 0){
    var served = katzDeliLine[0];
    katzDeliLine.shift();
    return `Currently serving ${served}.`;
  }
}

function currentLine(katzDeliLine){
  if(katzDeliLine.length === 0){
    return 'The line is currently empty.';
  }
  else{
    var sentence = 'The line is currently: ';
    for(var i = 0; i < (katzDeliLine.length - 1); i ++){
      sentence += (i+1) + '. ' + katzDeliLine[i] + ', ';
    }
    return sentence + (katzDeliLine.length + '. ' + katzDeliLine[katzDeliLine.length - 1]);
  }
}
