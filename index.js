var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(`${name}`);
  return (`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`);
}

function nowServing(katzDeli) {
  var i = 0;
  while (i < katzDeli.length) {
    i++;
  }
  if (i === 0) {
    return "There is nobody waiting to be served!"
  } else {
    return (`Currently serving ${katzDeli.shift()}.`);
  }
}



function currentLine(line){
  var lineArray = [];
  if(line.length === 0){
    return 'The line is currently empty.';
  } else {
    for (var i = 0; i < line.length; i++){
      lineArray.push(`${i + 1}. ${line[i]}`);
    }
  }
  return `The line is currently: ${lineArray.join(', ')}`;
}
