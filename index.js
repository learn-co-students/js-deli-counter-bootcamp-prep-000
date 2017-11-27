var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}
  

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var firstInLine = katzDeliLine[0];
    katzDeliLine.shift();
    return `Currently serving ${firstInLine}.`;
  }
  else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(line) {
  var lineList = [];
  for(let i = 0; i < line.length; i++) {
      lineList.push(` `+[i+1]+`. ` + line[i]);
  }
      if (line.length === 0) {
        return "The line is currently empty.";
      }
      else {
    return `The line is currently:` + lineList;
    
    }
  
}