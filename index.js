var katzDeliLine = [];

function takeANumber(deliLine, name) {
  deliLine.push(name);
  return "Welcome, "+ name + ". You are number " + (deliLine.indexOf(name)+1)  + " in line.";
}

function nowServing(deliLine) {
  if (deliLine.length > 0){
    return "Currently serving " + deliLine.shift() + ".";
    return deliLine;
  } else {
  return "There is nobody waiting to be served!";
  }
}

function currentLine(deliLine) {
  if (deliLine.length > 0){
    var newArray=[];
    var i=0;
    while (i < deliLine.length) {
      newArray.push(" " + (i+1) + ". " + deliLine[i]);
      i++;
    }
    return "The line is currently:" + newArray;

  } else {
    return "The line is currently empty.";
  }
}
