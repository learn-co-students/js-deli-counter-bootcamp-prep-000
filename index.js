function takeANumber(katzDeliLine,name) {
katzDeliLine.push(name);
return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(line) {
  if (line.length > 0) {
  var name =  line.shift()
    return  `Currently serving ${name}.`
  }
  else {
    return `There is nobody waiting to be served!`;
  }
}

function currentLine (katzDeli){
  if (!katzDeli.length) {
    return `The line is currently empty.`

  }
  else {
    var array =[]
    for (let i = 0; i < katzDeli.length; i++) {
    array.push(`${i + 1}. ${katzDeli[i]}`)
      }
    }
      return `The line is currently: ${array.join(', ')}`
  }
