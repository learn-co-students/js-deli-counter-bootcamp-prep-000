var katzDeli = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name)
  return "Welcome, " + name + "." + " You are number " + katzDeliLine.length + " in line."
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length > 0){
    return "Currently serving " + katzDeliLine.shift() + "."
  } else {
      return "There is nobody waiting to be served!"
    }
}

function currentLine(katzDeliLine){
  var lineString = "The line is currently:"
  if (katzDeliLine.length > 0){    
    var j = 1;
    for (var i = 0; i < katzDeliLine.length; i++){      
      if (katzDeliLine[j] === undefined){
        lineString += " " + j + ". " + katzDeliLine[i]
        console.log("Hit if conditional");
      } else {
        lineString += " " + j + ". " + katzDeliLine[i] + ","
        console.log(j);
      }
      j += 1 
    }
    return lineString
  } else {
      return "The line is currently empty."
    }
}