var katzDeliLine = [];

function takeANumber (line, name) {
  line.push(name);
  return "Welcome, " +name+ ". You are number " +(line.indexOf(name) + 1)+ " in line.";
}

function nowServing (line) {
  if(line.length == 0) {
    return "There is nobody waiting to be served!"
  } else {
    var firstPerson = line.shift();
    return "Currently serving " +firstPerson+ ".";
  }
}

function currentLine (line) {
  if(line.length == 0) {
    return "The line is currently empty."
  } else {
    var peepsInLine = "";
    for(var i = 0; i<line.length; i++) {
      if(i<(line.length - 1)){
        peepsInLine += (i+1) + ". " +line[i]+ ", " ;
      } else {
        peepsInLine += (i+1) + ". " +line[i];
      }
    }
    return "The line is currently: " + peepsInLine;
  }
}
