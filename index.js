function takeANumber(katzDeliLine, name) {
  
  var position = katzDeliLine.length + 1;
  katzDeliLine.push(name);
  
    return "Welcome, " + name + ". You are number " + position + " in line.";
}

function nowServing (katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var announcement = `Currently serving ${katzDeliLine[0]}.`;
    
    katzDeliLine.shift();
  
    return announcement;
    
  } else {
    
      return "There is nobody waiting to be served!";

  }
}

function currentLine (katzDeliLine) {
  
  var line = [];

  if (katzDeliLine.length > 0) {

    for (var i = 0; i < katzDeliLine.length; i++) {
      line.push(`${i + 1}. ${katzDeliLine[i]}`);
    }

    return 'The line is currently: ' + line.join(", ");
    
  } else {
    
    return "The line is currently empty.";
  }
}