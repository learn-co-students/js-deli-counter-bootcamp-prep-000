var katzDeliLine = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  var position = katzDeliLine.indexOf(name)+1;
  return "Welcome, " + name + ". You are number " + (katzDeliLine.indexOf(name)+1) + " in line.";
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length>0){
    var current = katzDeliLine[0];
    katzDeliLine.shift();
    return `Currently serving ${current}.`;
} else {
  return "There is nobody waiting to be served!";
}
}

function currentLine(katzDeliLine){
  if (katzDeliLine.length>0){
  var i;
  var list = [];
    for (i=0; i<katzDeliLine.length; i++){
      list.push(` ${i+1}. ${katzDeliLine[i]}`);
    }
    return `The line is currently:${list.toString()}`;
  } else {
    return "The line is currently empty.";
  }
  }
