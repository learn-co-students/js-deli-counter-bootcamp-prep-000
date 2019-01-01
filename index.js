var katzDeliLine = []


function takeANumber(katzDeliLine, currentname) {
  var x = katzDeliLine.length;
  var y = (x + 1);
  
  if (x >= 0) {
    katzDeliLine.push(currentname)
  }
  
  return `Welcome, ${currentname}. You are number ${[y]} in line.`;
}



function nowServing(katzDeliLine) {
  var firstie = katzDeliLine[0]
  if (katzDeliLine.length> 0) {
    katzDeliLine.shift()
    return `Currently serving ${[firstie]}.`
  }
  
  else {
    return "There is nobody waiting to be served!";
  }
}


function currentLine(line) {
  var x = 0
  var y = line.length
  var newString = []
  
  if (y === 0) {
    return ("The line is currently empty.")
  }
  
  else {
    while (y > x) {
      newString.push(` ${[x + 1]}. ${[line[x]]}`)
      x++
    }
    return (`The line is currently:${[newString]}`)
    }
}

  

  
  ////return `The line is currently: ${[newString]}`
  
  ///else console.log("The line is currently empty.")
  




