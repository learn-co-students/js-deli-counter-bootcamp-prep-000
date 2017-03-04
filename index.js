function takeANumber(katzDeli, customer) {

  //katzDeli = [...katzDeli, customer];
  katzDeli.push(customer);
  console.log('line array', katzDeli);

  var positionInLine = katzDeli.length
  return `Welcome, ${customer}. You are number ${positionInLine} in line.`;
}

function nowServing(deliLine) {
  if (deliLine.length > 0) {
    var firstPerson = deliLine[0];
    deliLine.shift(firstPerson);
    return `Currently serving ${firstPerson}.`;
  }
  else {
    return "There is nobody waiting to be served!"
  }

}

function currentLine(katzDeliLine){
  var numberedLine = [ ]

  if (katzDeliLine.length > 0) {
    for (var i = 0; i < katzDeliLine.length; i++){
     numberedLine.push(` ${i + 1}. ${katzDeliLine[i]}`)
    }
  }
  else {
    return 'The line is currently empty.'
  }
  return `The line is currently:${numberedLine}`
}
