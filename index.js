var katzDeli = [];
function takeANumber(katzDeliLine, name) {
  katzDeli = katzDeliLine.length
  katzDeli++;
  katzDeliLine.push(name)
  
  return (`Welcome, ${name}. You are number ${katzDeli} in line.`)
  
}

function nowServing(katzDeliLine){
  
  
if (katzDeliLine.length > 0) {
    return (`Currently serving ${katzDeliLine.shift()}.`)
    
}
  else { return "There is nobody waiting to be served!" 
  }
}

function currentLine(line) {
  var katz = []

  var sent = "The line is currently:";
  var len = line.length;
    if (line.length > 0) { 
  	  for (var i = 0; i < len; i++) {
          katz.push((` ${i+1}. ${line[i]}`))
      }
      return sent + katz
      
    } 
    else { 
      return "The line is currently empty.";
    }
}

