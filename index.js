var katzDeli = [];

function takeANumber(line, name){
  line.push(name)
  return "Welcome, " + name + ". You are number " + parseInt(line.indexOf(name) + 1) + " in line."
}
takeANumber(katzDeli, "Steven")
takeANumber(katzDeli, "Blake")
takeANumber(katzDeli, "Avi")

function nowServing(line){
  if (line.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    return "Currently serving " + line.shift() + "."
  }
}

nowServing(katzDeli)
function currentLine(line){
  if (line.length === 0) {
    return "The line is currently empty."
  }
  var lineOrder = [];
  for (var i = 0; i < line.length; i++){
      lineOrder.push(" " + [i+1] + ". " + line[i])
  }
  return "The line is currently:" + lineOrder
}

currentLine(katzDeli)
