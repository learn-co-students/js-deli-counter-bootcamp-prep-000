var katzDeliLine = [];  

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var firstInLine = katzDeliLine.shift();
      return `Currently serving ${firstInLine}.`;
  } else {
    return "There is nobody waiting to be served!";
  }
}

function  currentLine(katzDeliLine) {
  var listofname = [];
  for (var i = 0; i < katzDeliLine.length; i++) {
    listofname.push(`${i+1}. ${katzDeliLine[i]}`);
  }
  
  if (katzDeliLine.length > 0) {
      var str = listofname.join(`, `);
      return "The line is currently: " + str;
  } else {
    return "The line is currently empty.";
  }
}