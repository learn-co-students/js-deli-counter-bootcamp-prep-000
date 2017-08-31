var katzDeli=[];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  for(let i=0;i<katzDeliLine.length;i++) {
    if (name === katzDeliLine[i]) {
      return `Welcome, ${katzDeliLine[i]}. You are number ${i+1} in line.`
    }
  }
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length ==0) {
    return 'There is nobody waiting to be served!';
  } else {
    let name = katzDeliLine.shift();
    return `Currently serving ${name}.`;
  }
}

function currentLine(line) {
  if (line.length==0) {
    return 'The line is currently empty.'
  } else {
    let message = 'The line is currently: ';
    for (let i=0;i<line.length-1;i++) {
      message += `${i+1}. ${line[i]}, `;
    }
    message+=`${line.length}. ${line[line.length-1]}`
    return message;
  }
}
