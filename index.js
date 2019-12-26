function takeANumber(deliLine, customerName) {
  deliLine.push(customerName);
  return `Welcome, ${customerName}. You are number ${deliLine.length} in line.`;
}

function nowServing(katzDeli) {
  for(let i=0;i<katzDeli.length;i++) {

  }
  if(katzDeli.length === 0) {
    return 'There is nobody waiting to be served!'
  } else {
    return `Currently serving ${katzDeli.shift()}.`
  }
}

let line = []
function currentLine(katzDeli) {

  for (let i = 0; i < katzDeli.length; i++) {
     line.push(` ${i +1}. ${katzDeli[i]}`)
  }
  return(`The line is currently: ${line}`);
}




