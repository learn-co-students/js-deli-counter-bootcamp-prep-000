var katzDeli = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return(`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`);
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length > 0){
    var firstCustomer = katzDeliLine.shift();
    return (`Currently serving ${firstCustomer}.`)
  } else {
    return ('There is nobody waiting to be served!')
}
}

function currentLine(katzDeliLine){
  var s = [];
  if (katzDeliLine.length > 0){
    for (let i = 0; i < katzDeliLine.length; i++){
      s.push(` ${i + 1}` + '. ' + `${katzDeliLine[i]}`);
    }
    return 'The line is currently:' + s
  } else {
    return (`The line is currently empty.`)
  }
}
 
