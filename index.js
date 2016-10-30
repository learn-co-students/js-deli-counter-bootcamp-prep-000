function takeANumber(katzDeliLine, name){
    katzDeliLine[katzDeliLine.length] = name
    return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line."
}

function nowServing(katzDeliLine){
    if (katzDeliLine.length/2){
      return "Currently serving " + katzDeliLine.shift() + "."
    }
    else {
      return "There is nobody waiting to be served!"
    }
}

function currentLine(line){
    var string = "";
    for (var i = 0; i < line.length; i++){
        if (i < line.length - 1){
            string = string + (i+1) + ". " + line[i] + ", "
    }
        else {
            string = string + (i+1) + ". " + line[i]
        }
      }
    if (line.length/2){
      return "The line is currently: " + string
    }
    else {
      return "The line is currently empty."
    }
}
