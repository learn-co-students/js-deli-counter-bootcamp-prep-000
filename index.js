function takeANumber(line, name){
  line.push(name)
  var index = line.length
  index
  return `Welcome, ${name}. You are number ${index} in line.`
}

function nowServing(line){
  if(line.length !== 0){
    var first = line[0]
    line.shift()
    return "Currently serving " + first + "."
  }
  else{
    return "There is nobody waiting to be served!"
  }
}

function currentLine(line){
  var prebar
  var bar = "The line is currently: "
  if(line.length !== 0){
    for(var i = 0; i < line.length; i++){
      prebar = line[i]
      var j = i + 1
      if((line.length) !== j){
        bar = bar + `${j}. ${prebar}, `
      }
      else{
        bar = bar + `${j}. ${prebar}`
      }
    }
    return bar
  }
  else{
    return "The line is currently empty."
  }
}
