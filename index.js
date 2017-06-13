var katzDeliLine = [];

function takeANumber(katzDeliLine, name){
  var i = katzDeliLine.length +1;
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${i} in line.`
}



function nowServing(katzDeliLine){
  var deliLine = []
  var i = katzDeliLine.length;
  if (i === 0) {
    deliLine.push('There is nobody waiting to be served!')
  } else {
    deliLine.push(`Currently serving ${katzDeliLine[0]}.`);
    katzDeliLine.shift();
    }
    return deliLine;
}

function currentLine(line){
  var newDeliLine = []
  var i = line.length
if (i === 0) {
  newDeliLine.push("The line is currently empty.");
} else {
  for (let i = 0; i < line.length; i++) {
    newDeliLine.push(` ${parseInt([i]) + 1}. ${line[i]}`);
  }
 var newDeliLine = "The line is currently:" + newDeliLine
}
return newDeliLine.toString();
}
