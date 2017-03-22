var katzDeliLine = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0){
    return ('There is nobody waiting to be served!');
  } else {
    var current = katzDeliLine.shift();
    return (`Currently serving ${current}.`);
  }
}

function currentLine(katzDeliLine) {
  var current = 'The line is currently: '
  if (katzDeliLine.length > 0){
    for (var i = 0; i < katzDeliLine.length; i++){
      i < katzDeliLine.length - 1 ? current += ((i + 1) + '. ' + katzDeliLine[i] +', '): current += ((i + 1) + '. ' + katzDeliLine[i])
      }
      return current;
    } else {
    return ('The line is currently empty.');
    } 
  }
