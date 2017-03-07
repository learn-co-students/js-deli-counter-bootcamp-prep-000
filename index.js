var katzDeli = []

function takeANumber(katzDeliLine, otherDeli){
  for(var i = 0; i < otherDeli.length; i=3){
    var string = `${i+1}` + " in line.";
  }
  return `Welcome, ${otherDeli}. You are number` + string;
}


function currentLine(katzDeliLine){
  if (katzDeliLine.length > 0) {
    for (var i = 0; i < katzDeliLine.length; i=3) {
      var string = `${i+1}. ` + katzDeliLine[i] + ", " + `${i+2}. ` + katzDeliLine[i+1] + ", " + `${i+3}. ` + katzDeliLine[i+2];
    }
    return "The line is currently: " + string;
    }
    else {
    return "The line is currently empty.";
  }
}
