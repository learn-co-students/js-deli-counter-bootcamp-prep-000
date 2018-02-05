var katzDeli = []
var katzDeliLine = []

function takeANumber (line,name) {
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
  katzDeliLine = line
}

function nowServing(line) {
  if (line.length > 0) {
    var result = `Currently serving ${line[0]}.`
    line.shift()
    katzDeliLine = line
    return result
  }
  else return "There is nobody waiting to be served!"
}
var line = []
function currentLine(katzDeli) {
   for (let i = 0; i < katzDeli.length; i++) {
     line.push(` `+[i+1]+`. `  + katzDeli[i])
  }
   if (katzDeli.length === 0) {
     return "The line is currently empty.";
   } else
   return(`The line is currently:` + line);
 }
