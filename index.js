var katzDeli = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.indexOf(name) + 1} in line.`
}

function nowServing(katzDeliLine){

  if (katzDeliLine.length == 0) {
    return "There is nobody waiting to be served!";
  } else {
      var serving = katzDeliLine.shift()
      return `Currently serving ${serving}.`;
  }
}

function currentLine(katzDeliLine){
  if (katzDeliLine.length == 0) {
    return "The line is currently empty."
  } else {
    var lineStatement = "The line is currently:";
    for (var i = 0; i < katzDeliLine.length; i++ ){
      if (i == 0){
        lineStatement += (` ${i + 1}. ${katzDeliLine[i]}`)
      } else {
        lineStatement += (`, ${i + 1}. ${katzDeliLine[i]}`)
      }
    }
    return lineStatement;
  }
}
