var katzDeliLine = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine[katzDeliLine.length] = name;
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine){
 if (katzDeliLine.length != 0) {
   var name = katzDeliLine[0];
   katzDeliLine.shift();
   return `Currently serving ${name}.`
 }else {
   return 'There is nobody waiting to be served!'
 }
}

function currentLine(katzDeliLine){
  var line = "The line is currently: ";
  if (katzDeliLine != 0) {
    for (var i = 0; i < katzDeliLine.length; i++) {
      var comma;

      line = line + (i + 1 )+ ". " + katzDeliLine[i] + (i != katzDeliLine.length - 1 ?  comma = ", " : comma = "");
    }
  } else {
    return "The line is currently empty.";
  }
  return line;
}
