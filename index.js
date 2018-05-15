var katzDeli = [];

function takeANumber(katzDeli, name){
 katzDeli.push(`${name}`)
 return (`Welcome, ${name}. You are number ${katzDeli.length} in line.`)
}

function nowServing(n){
  if (n.length === 0){
    return "There is nobody waiting to be served!"
  } else {
    var name = n[0];
    n.splice(0, 1)
    return (`Currently serving ${name}.`)
  }
}

function currentLine(katzDeliLine) {
  var newLine = [];
  if (katzDeliLine.length === 0){
    return "The line is currently empty."
    }
  for (var i = 0; i < katzDeliLine.length; i++) {
     newLine.push(` ${i+1}. ${katzDeliLine[i]}`);
  }
  return "The line is currently:" + newLine;
}