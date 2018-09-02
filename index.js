function takeANumber(line, newName) {
  line.push(newName);
  return "Welcome, "+newName+". You are number "+(line.length)+" in line.";
}

function nowServing(line) {
  var num=line.length;
  var result;
  if (num===0) {
    result="There is nobody waiting to be served!";
  } else if (num>0) {
    var name=line.shift();
    result = "Currently serving "+name+".";
  }
  return result;
}

function currentLine(line) {
  var result = "The line is currently: ";
  if (line <= 0) {
    result="The line is currently empty.";
  } else {
    for (var i=0; i<line.length; i++) {
      result = result + (i+1) +". "+line[i]+", ";
    }
    result = result.substring(0, result.length-2);
  }
  return result;
}