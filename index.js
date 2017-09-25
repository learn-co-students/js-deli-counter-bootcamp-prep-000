function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  var placeLine = katzDeliLine.length
  return `Welcome, ${name}. You are number ${placeLine} in line.`
}

function nowServing (katzDeliLine) {
  if (katzDeliLine.length == 0) {
    return `There is nobody waiting to be served!`
  }else{
    return `Currently serving ${katzDeliLine.shift()}.`;
  }
}

function currentLine (katzDeliLine) {
    if (katzDeliLine.length == 0) {
        return `The line is currently empty.`
      }else{
        var y = [];
        for (let x = 0; x < katzDeliLine.length; x++) {
          var v = x + 1;
          y.push(` ${v}.${katzDeliLine[x]}`)}
        }
        return `The line is currently: ${y}`
      }
