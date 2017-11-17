function takeANumber (katzDeliLine, name){
  katzDeliLine.push(name);
  var newNumber = katzDeliLine.length;
  return "Welcome, " + name + ". You are number "
          + newNumber + " in line."
}

function nowServing(katzDeliLine){
  var removeServing = katzDeliLine.shift();
  if (katzDeliLine.length > 0){
    return "Currently serving " + removeServing + ".";
  }
  else{
    return "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeliLine){
  var newLine = [];
    if (katzDeliLine.length > 0){
    for (var i = 0; i < katzDeliLine.length; i++){
      var addNumber =  " " + (i + 1) + ". " + katzDeliLine[i];
      newLine.push(addNumber);
    }
      return  "The line is currently:" + newLine.toString(",");
  }
    else {
      return "The line is currently empty."
    }
  }
