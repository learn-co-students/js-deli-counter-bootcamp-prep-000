var katzDeli = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeli, name){
  if (katzDeli.length == 0){
    return "There is nobody waiting to be served!";
  }
  else {
    for (var i=0; i < katzDeli.length; i++){
      return "Currently serving " + katzDeli.shift() + ".";
      }
      var hope = katzDeli.shift()
      return(katzDeli);
  }
}

function currentLine(katzDeliLine) {
   if (katzDeliLine.length === 0) {
     return 'The line is currently empty.'
   } else {
    var line = 'The line is currently:'
    for (var i = 0; i < katzDeliLine.length; i++) {
      if (i === katzDeliLine.length - 1) {
        line = line + ` ${i + 1}. ${katzDeliLine[i]}`
      } else {
        line = line + ` ${i + 1}. ${katzDeliLine[i]},`
      }
    }
    return line
  }
} 