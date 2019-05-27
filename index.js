var katzDeli = [];

function takeANumber(katzDeliLine, name){
     katzDeliLine.push(name);
     var pos = katzDeliLine.indexOf(name);

  return "Welcome, " + name + ". You are number " + (pos + 1) + " in line."
}

function nowServing(katzDeliLine){
  while ( katzDeliLine.length != 0) {
      "Currently serving " + katzDeliLine[0] + "."
      return "Currently serving " + katzDeliLine.shift() + "."
  }
  return "There is nobody waiting to be served!";
}


function currentLine(katzDeliLine) {
  var currentLine = [];
  var i = 0
  var pos = katzDeliLine.indexOf(i);

  if (katzDeliLine.length === 0) {
    return 'The line is currently empty.'
  } else {
    //for(var i = 0; i < katzDeliLine.length; i++){
      do {

      currentLine.push((katzDeliLine.indexOf(i) + 1) + ". " + katzDeliLine[i]);
              i++
    } while (currentLine.length != katzDeliLine.length)
    }
    //return "The line is currently: " + (pos + 1) + ". " + katzDeliLine[i] + ", "
    return currentLine
  }

//}
