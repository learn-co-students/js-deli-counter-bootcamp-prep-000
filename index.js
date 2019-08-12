var katzDeli = [];
function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}
function nowServing (katzDeliLine) {
  if(katzDeliLine.length > 0) { return `Currently serving ${katzDeliLine.shift()}.`}
  else { return `There is nobody waiting to be served!`}
  }
  var nameOrder = [];
  function currentLine(katzDeliLine) {
    for( var i=0; i<katzDeliLine.length; i++){nameOrder.push(` ${i+1}. ${katzDeliLine[i]}`);
    }
    if (katzDeliLine.length ===0) {return "The line is currently empty."}
    else {return `The line is currently:${nameOrder}`}
  }