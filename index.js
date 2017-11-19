function takeANumber(katzDeliLine, name) {
    katzDeliLine.push(name)
      return ("Welcome, " + name + ". You are number " + katzDeliLine.length + " in line.")
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var katzDeliLine = katzDeliLine.shift()
    return "Currently serving "+ katzDeliLine+ ".";
  }
        else {
          return "There is nobody waiting to be served!"}
    }
var katzline = []
function currentLine (line) {
for (let i = 0; i < line.length; i++) {
  katzline.push(` `+[i+1]+`. `  + line[i])}
  if (line.length === 0) {
    return "The line is currently empty."
  }
  else {
      return (`The line is currently:`+ katzline)
  }
}
