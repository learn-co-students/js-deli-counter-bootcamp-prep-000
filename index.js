
function takeANumber(katzDeli, name) {
  katzDeli.push(name)
  var place = katzDeli.length
    //var msg = ("Welcome, $[name].  You are number $[place] in line.")
    var msg = ("Welcome, " + name + ". You are number " + place + " in line.")
   return msg
    //return {"Welcome, " + name + ". You are number " + place + "in line."}
}

function nowServing(katzDeliLine) {
if (!katzDeliLine.length) {
  console.log("There is nobody waiting to be served!")
  return "There is nobody waiting to be served!"
} else {
//  console.log("Currently serving $[name]")
  return "Currently serving " + katzDeliLine.shift() + "."
}
}

function currentLine(katzDeliLine) {
  var inline = []

  if (!katzDeliLine.length) {
    return "The line is currently empty"
  }

  for (let i = 0; i = katzDeliLine.length; i++){
  inline.push(i + 1, katzDeliLine[i]);
}
return 'The line is currently: ' + inline.join(',');

}
