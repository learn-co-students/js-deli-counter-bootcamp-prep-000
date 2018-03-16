var katzDeli = [];
function takeANumber(katzDeli , name){
  katzDeli.push(name);
  return (`Welcome, ${name}. You are number ${katzDeli.length} in line.`);
}
function nowServing(line){
  if (line.length === 0){
    return ('There is nobody waiting to be served!'); 
  } else {
    return (`Currently serving ${line.shift()}.`);
  }
}
function currentLine(katzDeliLine){
  var DeliLine = [];
  for (var i = 0; i < katzDeliLine.length; i++) {
      DeliLine.push(' ' + [i + 1] +'. ' + katzDeliLine[i]);
  }
  if (katzDeliLine.length === 0){
      return ('The line is currently empty.');
    } else {
      return ('The line is currently:' + DeliLine);
    }
}

