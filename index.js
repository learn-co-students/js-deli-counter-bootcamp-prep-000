var katzDeli = [];
var takeANumber = function(katzDeliLine, newPersonName) {
  katzDeliLine.push(newPersonName);
  var lineNumber = katzDeliLine.length;
  return "Welcome, " + newPersonName + ". You are number " + lineNumber + " in line.";
}

var nowServing = function(katzDeliLine) {
  if(katzDeliLine.length > 0){
    var serving = katzDeliLine[0];
    katzDeliLine.shift();
    return "Currently serving " + serving + ".";
  }else{
    return "There is nobody waiting to be served!";
  }
}

var currentLine = function(katzDeliLine) {
  var returnStatement = "The line is currently: ";
  var index = 1;
  if(katzDeliLine.length > 0){
    for(var i = 0; i < katzDeliLine.length; i++){
      returnStatement = returnStatement + index  + ". " + katzDeliLine[i] + ", ";
      index++;
    }
    returnStatement = returnStatement.slice(0,(returnStatement.length - 2));
    return returnStatement;
  }else {
    return "The line is currently empty.";
  }
}