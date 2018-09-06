function takeANumber(line, name) {
 var x
 line.push(name)
  for (var i = 0; i < line.length; i++) {
    if(line[i] == name){
      x = i+1;
    }
  }
  return (`Welcome, ` + name + `. You are number ` + x + ` in line.`)
}

function nowServing(line) {
  if (line.length === 0) {
    return ("There is nobody waiting to be served!")
  }
  else{
    var bloop = line.shift()
    return ("Currently serving " + bloop + ".")
  }
}

function currentLine(line) {
  if (line.length === 0) {
    return ("The line is currently empty.")
  }
  else {
    var x = "";
    for (var i = 0; i < line.length; i++) {
      if(i == line.length-1){
        x = x + (i+1) + ". " + line[i]
      }
      else{
      x = x + (i+1) + ". " + line[i] + ", "
      }
    }
    return ("The line is currently: " + x)
  }
}