var katzDeliLine = [];

function takeANumber(katzDeliLine,name){
  katzDeliLine[katzDeliLine.length] = name;
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line.";
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length>0){
    var name = katzDeliLine.shift();
    return "Currently serving " + name + ".";
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(katzDeliLine){
  var message = "The line is currently";
  if (katzDeliLine.length>0){
    message = message + ": ";
    for (let i=0; i<katzDeliLine.length; i++){
      if (i<katzDeliLine.length-1){
        message = message + `${i+1}. ${katzDeliLine[i]}, `;
      } else {
        message = message + `${i+1}. ${katzDeliLine[i]}`;
      }
    }
    return message;
  } else {
    return message + " empty.";
  }
}