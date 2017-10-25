
function takeANumber(line,name){
  line.push(name)
  var lineNumber = line.length
  return "Welcome, " + name + ". You are number " + lineNumber + " in line."
}


function nowServing(line,name){

  if(line.length === 0){
    var queue = "There is nobody waiting to be served!"
  }else{
    queue = "Currently serving " + line.shift() + "."
  }
  return queue
}


function currentLine(line){

  if(line.length ===0){

    return "The line is currently empty."

  }else{
    var middleItems = ""
    var lastItem = (line.length) + ". "  + line[line.length-1]

    for (var i = 0; i<line.length-1; i++){

      var lineString = (i+1) + ". " + line[i] + ", "
      // creates a string from the lineName and linePlace variables
      middleItems += lineString
      //adds the newest string from the present [i] to the existing string

    }
    return "The line is currently: " + middleItems + lastItem
  }
}
