function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0)
  return `Currently serving ${katzDeliLine.shift()}.`; else return 'There is nobody waiting to be served!'
} 

function currentLine(katz) {
  var string = 'The line is currently: '
  if (katz.length === 0){ 
  var newKatz = []; 
 for (var i = 0; i < katz.length; i++);{
  newKatz.push(i++ + '. ' + katz[i]);}
 return string + newKatz.join(', ');
} else {return 'The line is currently empty.';}
}
