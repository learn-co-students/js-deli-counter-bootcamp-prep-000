var katzDeli = [ ]


function takeANumber(katzDeliLine, name) {
  
  
  katzDeliLine.push(name)
  var position = katzDeliLine.length
  
  return (`Welcome, ${name}. You are number ${position} in line.`)
  
}

function nowServing(line){
  if (line.length ===0){
    return ("There is nobody waiting to be served!")
  }
  else{
  var serving = line[0]
  line.shift()
  return (`Currently serving ${serving}.`)
 
  }
}  
  
function currentLine(line){
    var i = 0
    var positionline = []
    if (line.length ===0){
      return ("The line is currently empty.")
    }
    else{
      while (i < line.length){
         positionline[i] = " "+ (i+1) + ". " + line[i]
         i = i +1
      }
      
      return (`The line is currently:${positionline}`)
      
      
    }
  }
  