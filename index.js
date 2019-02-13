var katzDeliLine = [];

function takeANumber(line, name) {
  let number = line.push(name);
  return `Welcome, ${name}. You are number ${number} in line.`
}


var counter = 1;

function takeANumberAlt(line){
  line.push(++counter);
  return counter;
}


function nowServing(line){
  let next = line.shift();
  if (next) {
    return `Currently serving ${next}.`;
  }
  return 'There is nobody waiting to be served!';
}



function currentLine(line) {
  let list = [];
  for (let i = 0; i < line.length; i++) {
    list.push(`${i + 1}. ${line[i]}`);
  }
  if (list.length === 0) {
    return 'The line is currently empty.'

  }
  return `The line is currently: ${list.join(', ')}`;
}
