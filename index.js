var katzDeli = [];

function takeANumber(katzDeliLine,name){

  katzDeliLine.push(name)
  katzDeli.push(name)

  var counter = katzDeliLine.length
  return "Welcome, " + name + ". You are number " + counter + " in line."

  return katzDeliLine
  return katzDeli
}

function nowServing(katzDeliLine){

  if (katzDeliLine.length == 0) {
    return "There is nobody waiting to be served!"
    }
  else {
    var string = "Currently serving " + katzDeliLine[0] + "."
    katzDeliLine.shift()
    katzDeli.shift()
    return string
    return katzDeliLine
    return katzDeli

  }



}

function currentLine(line){
  if (line.length == 0){
    return "The line is currently empty."
  }
  else {
    var string = "" //= "The line is currently: "
    for (let i = 0; i < line.length; i++){
      var counter = i + 1
      if (i == line.length - 1) {
        string += counter + ". " + line[i]
      }
      else {
        string += counter + ". " + line[i] + ", "
      }
    }
    return "The line is currently: " + string
  }
}
