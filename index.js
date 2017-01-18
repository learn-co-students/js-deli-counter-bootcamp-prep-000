var katzDeliLine = [];

function takeANumber(katzDeliLine, name){
katzDeliLine.push(name);
return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length === 0){
   return "There is nobody waiting to be served!";
  }
  else {
    var removed = katzDeliLine.shift();
    return "Currently serving " + removed + ".";
  } 
  return katzDeliLine;
}


function currentLine(katzDeliLine){
var i = 0;
var line = [];
  while(i < katzDeliLine.length){
    line.push(" " + (i + 1) + ". " + katzDeliLine[i]);
  i++;
  }
  if(katzDeliLine.length === 0){
    return "The line is currently empty."
  } else{
    return "The line is currently:" + line;
  }
}





