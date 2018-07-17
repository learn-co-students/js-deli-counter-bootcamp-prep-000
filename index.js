var katzDeli = [];

function takeANumber(KatzDeliLine, name){
  KatzDeliLine.push(name);
  return(`Welcome, ${name}. You are number ${KatzDeliLine.length} in line.`);
}

function nowServing(KatzDeliLine){
  if (KatzDeliLine.length > 0){
    var firstCustomer = KatzDeliLine.shift();
    return (`Currently serving ${firstCustomer}.`)
  } else {
    return ('There is nobody waiting to be served!')
}
}

function currentLine(KatzDeliLine){
  if (KatzDeliLine.length === 0){
    return ('The line is currently empty.')
  } else {
    return (`The line is currently: 1. ${KatzDeliLine [0]}, 2. ${KatzDeliLine [1]}, 3. ${KatzDeliLine [2]}`)
  }
}

