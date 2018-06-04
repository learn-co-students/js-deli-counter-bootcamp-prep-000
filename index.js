function takeANumber(line,person) {
  line.push(person);
  return (`Welcome, ${person}. You are number ${line.length} in line.`)
}

function nowServing(line) {
  if (line.length) {
    return (`Currently serving ${line.shift()}.`)
  }
  return ("There is nobody waiting to be served!")

}

function currentLine(line){
  if (line.length) {
    var curLine = [];
    for (var i = 0; i < line.length; i++ ){
      curLine.push(`${i+1}. ${line[i]}`);
    }
    return (`The line is currently: ${curLine.join(', ')}`);
  } else {
    return ("The line is currently empty.")
  }
}
