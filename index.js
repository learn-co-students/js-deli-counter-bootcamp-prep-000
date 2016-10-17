function takeANumber(katzDeliLine,name) {
  katzDeliLine.push(name)
  return (`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`) }
//above function takeANumber adds person to line, then returns their number in line.

function nowServing(katzDeliLine){
  while (katzDeliLine.length > 0) {
    var slice = katzDeliLine.shift()
  return `Currently serving ${slice}.`
}
    return "There is nobody waiting to be served!"
}


function currentLine(line){
  var newArray = []
  i = 0
  if (line.length === 0) {
    return "The line is currently empty."}

  else if (line.length > 0){
    for (var i; i < line.length; i++){
      newArray.push([i+1] + ". " + line[i]) //+ `${[i+1]}. ${line[i].join(,)}`

    }

  return "The line is currently: " + newArray.join(", ")
   //return (`The line is currently: 1. ${line[0]}, 2. ${line[1]}, 3. ${line[2]}`)
   //basically cheating. How the fuck do I get this to work iteratively?
}
}
