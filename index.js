var katzDeli = []
function takeANumber(katzDeli, people) {

  katzDeli.push(people)

  return `Welcome, ${people}. You are number ${katzDeli.length} in line.`
}

function nowServing(line) { if
  (!line.length) {
 return "There is nobody waiting to be served!"
} else {
  return `Currently serving ${line.shift([0])}.`
}

}
function currentLine(line) {
if (!line.length) {
  return "The line is currently empty."
}
var array = []
for (let i=0, l=line.length; i < l; i++) {
   array.push(`${i + 1}. ${line[i]}`)
}
return `The line is currently: ${array.join(", ")}`
}
