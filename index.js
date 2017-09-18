var katzDeliLine = [];

function takeANumber(lineArray, name){
  lineArray.push(name);
  return "Welcome, " + name +". You are number " + lineArray.length + " in line."
}

function nowServing(lineArray){
  if (lineArray.length) {
    return "Currently serving " + lineArray.shift() + ".";
  } else {
  return "There is nobody waiting to be served!";
  }
}

function currentLine(lineArray){
  var customerList = [];
  if (lineArray.length) {
    for(var i = 0; lineArray.length > i; i++){
      customerList.push((i + 1) + ". " + lineArray[i]);
    }
  } else {
    return "The line is currently empty.";
  }
  return "The line is currently: " + customerList.join(', ');
}
