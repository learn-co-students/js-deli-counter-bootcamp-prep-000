var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push((name));
  return("Welcome, " + name + ". You are number " + (katzDeliLine.indexOf(name) + 1) + " in line.");
}

function currentLine(katzDeliLine, name){
  if (katzDeliLine.length >= 1) {
    let result = "The line is currently: ";
    for (var i = 0; i < katzDeliLine.length; i++) {
      result += i+1 + ". " + katzDeliLine[i] + " ";
    }
      return(result.slice(0, -1))
} else {
    return("The line is currently empty.");
  }
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length >= 1) {
    return("Currently serving: " +  katzDeliLine.shift());
     
  } else {
    return("The line is currently empty.")
  }
}