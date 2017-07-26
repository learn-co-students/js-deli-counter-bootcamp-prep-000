var katzDeliLine = [];
function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return "Welcome, " + name + ". You are number " + (katzDeliLine.length) + " in line.";
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length > 0){
      var currentPerson = katzDeliLine.shift();
      return "Currently serving " + currentPerson + ".";
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(katzDeliLine){
  var array = [];
  for(var i = 0; i < katzDeliLine.length; i++){
    if(i !== (katzDeliLine.length - 1)){
      array.push((i + 1) + ". " + katzDeliLine[i] + ",");
    } else {
      array.push((i + 1) + ". " + katzDeliLine[i]);
    }
  }
  if(katzDeliLine.length > 0){
    return "The line is currently: " + array.join(" ");
  } else {
    return "The line is currently empty.";
  }
}
