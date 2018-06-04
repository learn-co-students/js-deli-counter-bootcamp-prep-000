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
}

function currentLine(line){
  if (line.length > 0) {
    var curLine = new String("The line is currently:");
    var str1 = ""
    for (var i = 0; i < line.length; i++ ){
      if (i != line.length - 1) {
        str1 = `${i+1}. ${line[i]},`
      } else {
        str1 = `${i+1}. ${line[i]}`
      }
      curLine = `${curLine} ${str1}`
  }
    return curLine;
  } else {
    return ("The line is currently empty.")
  }
}
