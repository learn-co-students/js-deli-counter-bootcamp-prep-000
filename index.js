function takeANumber(lineArr, newPerson){
  lineArr.push(newPerson);
  var spot = lineArr.indexOf(newPerson) + 1;
  return "Welcome, " + newPerson + ". You are number " + spot + " in line.";
}

function nowServing(lineArr){
  if (lineArr.length > 0){
    var customer = "Currently serving " + lineArr[0] +".";
    lineArr.shift();
    return customer;
  }
  else {
    return "There is nobody waiting to be served!"
  }

}

function currentLine(lineArr){
  var line = [];
  if (lineArr.length > 0){
    for(var i = 0; i < lineArr.length; i++){
      line.push(` ${i + 1}. ${lineArr[i]}`);
    }
  return "The line is currently:" + line.toString(", ");
  }
  else {
    return "The line is currently empty."
  }
}
