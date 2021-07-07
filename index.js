
let deliLine = [];

//takeANumber(deliLine, customer)

function takeANumber(deliLine, customer) {
  deliLine.push(customer);
    return `Welcome, ${customer}. You are number ${deliLine.length} in line.`
}



//nowServing(deliLine)

function nowServing(deliLine) {

  if(!deliLine.length) {
    return 'There is nobody waiting to be served!';
  }
  else {
    return `Currently serving ${deliLine.shift()}.`;
  }
}


//currentLine(line)


function currentLine(line) {
let newLine = [];

  for(let i = 0; i < line.length; i++) {
    newLine.push(`${i+1}. ${line[i]}`);
  }

    if(line.length > 0) {
      return `The line is currently: ${newLine.join(', ')}`
    }
    else {
      return 'The line is currently empty.';
    }
}
