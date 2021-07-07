//Number in line
function takeANumber(number, name) {
  number.push(name);

  return (`Welcome, ${name}. You are number ${number.length} in line.`);
}
//Who's being served
function nowServing(person){
 
  if ( person.length == [] )
    return ("There is nobody waiting to be served!");

    return (`Currently serving ${person.shift()}.`);
  
}
//Line length, who's waiting
function currentLine(line) {
    var lineCount = []
    if (line.length === 0) {
      return "The line is currently empty."
    } else {
      for(var i = 0; i < line.length; i++) {
        lineCount  += (i + 1) + ". " + line[i] + ", "
      }
      lineCount  = lineCount.slice(0, lineCount.length-2)
      return "The line is currently: " + lineCount 
    }
}

  


