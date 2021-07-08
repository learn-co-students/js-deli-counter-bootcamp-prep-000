var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  var serving = katzDeliLine[0];
  
  if (serving === '' || serving === null || serving === undefined) {
    return "There is nobody waiting to be served!";
  } else {
    katzDeliLine.shift();
    return `Currently serving ${serving}.`;
  }
}

function currentLine(katzDeliLine) {
  var line = [];
  if (katzDeliLine.length !== 0) {
    for(var i = 0; i < katzDeliLine.length; i++) {
      line.push(` ${i+1}. ${katzDeliLine[i]}`);
    }
    return `The line is currently:${line}`;
  } else {
    return "The line is currently empty.";
  }
  return line;
}

katzDeli = ["Steven", "Blake", "Avi", "Grace"];

console.log(currentLine(katzDeli));