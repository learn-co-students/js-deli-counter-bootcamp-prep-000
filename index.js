function takeANumber(katzDeliLine, newCustomer) {
      katzDeliLine.push(newCustomer);
      var position = katzDeliLine.length;
      var sentence = ("Welcome, " + newCustomer + ". You are number " + position + " in line.");
      return sentence;
}
function nowServing(line) {
  if ( line.length === 0 ) {
      var noLine = ("There is nobody waiting to be served!");
      return noLine;
  } else {
      var nowUp = line.shift();
      var sentence = ("Currently serving " + nowUp + ".");
      return sentence;
  }
}
function currentLine(line) {
  if ( line.length === 0 ) {
    var sentence = ("The line is currently empty.");
    return sentence;
  } else {
    var lineNow =  ("The line is currently: ");
    for (var i = 0; i < line.length; i++) {
          if ( i < line.length - 1 ) {
          var t = i + 1;
          var numberName = ( t  + ". " + line[i] + ", ");
          var lineNow = lineNow.concat(numberName);
        } else {
          t = i + 1;
          numberName = ( t  + ". " + line[i]);
          lineNow = lineNow.concat(numberName);
        }
    }
    return lineNow;
  }
}
