var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return (`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`);
}


function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return ("There is nobody waiting to be served!");
  }
  var name = katzDeliLine.shift();
  return (`Currently serving ${name}.`);
}


function currentLine(katzDeliLine){
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  }
  var indexName = [];
  for (let i = 0; i < katzDeliLine.length; i++) {
    var name = katzDeliLine[i];
    var index = i + 1;
    indexName.push(`${index}. ${name}`)
  }
  var final = indexName.join(', ');
  return (`The line is currently: ${final}`)
}
