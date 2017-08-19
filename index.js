var katzDeliLine = [];

var takeANumber = function(katzDeliLine,name){
  katzDeliLine.push(name);
  var position = katzDeliLine.length;
  return "Welcome, "+ name+". You are number " +position+ " in line."
}

var nowServing = function(katzDeliLine){
  var line = katzDeliLine;
  if(line.length <= 0){
    return "There is nobody waiting to be served!";
  } else {
    return "Currently serving " + line.shift()+ ".";
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var line = [];
    for (var i = 0; i < katzDeliLine.length; i++) {
      line.push(" "+(i+1) + ". " + katzDeliLine[i]);
    }
    return "The line is currently:" + line
    } else {
    return "The line is currently empty."
  }
}
