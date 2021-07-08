function takeANumber (katzDeli, name){
  katzDeli.push (name)
  return "Welcome, " + name + ". You are number " + katzDeli.length + " in line."
}

function nowServing(deliLine){
  while (deliLine.length > 0){
    return "Currently serving " + deliLine.shift() + "."
  }
  return "There is nobody waiting to be served!"
}

function currentLine (line){
  var newarray = []
for (var i = 0; i < line.length; i++ )  {
 newarray.push (" " + (i+1) + ". " + line[i])
  }
  if (line.length > 0){
  return "The line is currently:" + newarray
} else {
  return "The line is currently empty."
}
}
