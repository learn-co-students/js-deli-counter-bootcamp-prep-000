
function takeANumber(line,name){
    return "Welcome, " + name + ". You are number " + line.push(name) + " in line."
}



function nowServing(line){
  if (line.length === 0){
      return "There is nobody waiting to be served!"
  }

    return "Currently serving " + line.shift() + "."

}

function currentLine(line){
    if (line.length === 0 ){
        return "The line is currently empty."
    }
    var string = "The line is currently: ";

      for (let i = 0; i < line.length; i++){
          if (i > 0) {
              string += ", "
          }
           string += (i+1)+". " + line[i]
      }

      return string
}
