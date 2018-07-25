var katzDeliLine = [];

function takeANumber(deliLine, newName){
  deliLine.push(newName);
  return "Welcome, " + newName + ". You are number " + deliLine.length + " in line.";
}

function nowServing(names){
  var next = "There is nobody waiting to be served!"
  if (names.length > 0){
    next = "Currently serving " + names[0] + ".";
    names.shift();
  }
  return next;
}

function currentLine(names){
  var lineReport = ""
  if (names.length === 0){
    lineReport = "The line is currently empty."
  }else{
    lineReport = "The line is currently: "
    for (var i = 0; i < names.length; i++){
      if (i > 0){lineReport += ", "}
      lineReport += (i + 1) + ". " + names[i]
    }
  }
  return lineReport;
}