function takeANumber (currentLine, name){
  currentLine.push(name);
  var number = currentLine.length;
  return ("Welcome, " + name + ". You are number " + number + " in line.");
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length > 0){
    name = katzDeliLine.shift();
    return ("Currently serving " + name + ".");
  } else {
    return ("There is nobody waiting to be served!");
  }
}

function currentLine (line){
  if (line.length > 0){
    var string = "The line is currently: "; 
    for (var i = 0; i < line.length-1; i++){
        string += (i+1) + ". " + line[i] + ", ";
    } 
    string += (line.length) + ". " + (line[line.length-1]);
    return string;
  } else {
    return ("The line is currently empty.");
  }
}