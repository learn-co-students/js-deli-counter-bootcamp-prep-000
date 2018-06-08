let katzDeli = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  let number = katzDeliLine.indexOf(name) + 1;
  return `Welcome, ${name}. You are number ${number} in line.`;
}

function nowServing(katzDeli) {
  let name = '';
  if(katzDeli.length === 0) {
    return "There is nobody waiting to be served!";
  }
  else {
    name = katzDeli.shift();
    return `Currently serving ${name}.`;
  }
}

function currentLine(line) {
  let current = 'The line is currently:';
  if(line.length === 0) {
    return "The line is currently empty.";
  }
  else {
    for(let i = 0; i < line.length; i++) {
      current += ` ${i + 1}. ${line[i]}`;
      if(i !== line.length - 1) {
        current+= `,`;
      }
    }
  }
  return current;
}