var katzDeli = [];

var takeANumber = function(katzDeliLine, name){
  katzDeliLine.push(name);
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line.";
}

var nowServing = function(deliLine){
  var name;
  if(deliLine.length === 0){
    return 'There is nobody waiting to be served!';
  } else if(deliLine.length >= 1){
    name = deliLine[0];
    deliLine.shift()
  } else {
    return "The line is currently empty"
  }
  return "Currently serving " + name + "."
}

var currentLine = function(line){
  var currentLine = "The line is currently:"
  var num;
  if(line.length >= 1){
    for(num = 0; num < line.length; num++){
      currentLine += " " + (line.indexOf(line[num])+ 1) + "." + " " + line[num] + "," ;
    }
    return currentLine.slice(0, currentLine.length - 1);
  } else {
    return "The line is currently empty."
  }
}
