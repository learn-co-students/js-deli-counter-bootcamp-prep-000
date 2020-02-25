
function takeANumber(katzDeli, name) {
  katzDeli.push(name)
   return 'Welcome, ' + name + '. You are number ' + katzDeli.length + ' in line.';

}

function nowServing(katzDeli) {
  if (katzDeli.length === 0) {
    return  "There is nobody waiting to be served!"
  }
  else {
    return`Currently serving ` + katzDeli.shift() + `.`;
  }
  
}
function currentLine(line) {
  var b = []
  var c = 1
  if (line.length <  1) {
  return `The line is currently empty.`;
  }
  else {
    for (var a = 0; a < line.length; a++) {
      b.push(` ` + c + `. ` + line[a] )
      c++
    }
    return `The line is currently:` + b
  }
  
}