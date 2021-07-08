var katzDeliLine = [];

function takeANumber(katzDeliLine,person){
  katzDeliLine.push(person);
  var i = katzDeliLine.length;
  var name = "Welcome, "+katzDeliLine[i-1]+". You are number "+i+" in line.";
  return name
}

function nowServing(katzDeliLine){
  var name = katzDeliLine.shift();
  var nameComplete = "Currently serving "+name+".";
  if (katzDeliLine.length<1){
    return "There is nobody waiting to be served!"
  } else {
    return nameComplete
  }
}

function currentLine(katzDeliLine){
  var currentLine = "";
  for (var i=0; i<katzDeliLine.length;i++){
    currentLine = currentLine+(parseInt(i)+1)+". "+katzDeliLine[i];
    if ((i+1)<katzDeliLine.length){
      currentLine=currentLine+", ";
    }
  }
  if (katzDeliLine.length<1){
    return "The line is currently empty."
  }
  return "The line is currently: "+currentLine
}
