function takeANumber(line, name) {
 line.push(name);

 return `Welcome, ${name}. You are number ${line.length} in line.` ;
}
 
function nowServing(katzDeliLine) {
 if (katzDeliLine.length === 0) {
     return "There is nobody waiting to be served!"
 } else {
   return "Currently serving " + katzDeliLine.shift() + "."
 }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  } else {
  var list = []
  var i = 0
  var customer = 1 
  while (i < katzDeliLine.length) {
     var results = ` ${customer}. ${katzDeliLine[i]}`;
     list.push(results);
     i += 1
     customer += 1
   } 
   return `The line is currently:${list}`
  }
}
