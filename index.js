var katzDeli = [""];


function takeANumber(katzDeliLine,name) {
  katzDeliLine.push(name);
  var placeInLine = katzDeliLine.length; 
  
  var statement = `Welcome, ${name}. You are number ${placeInLine} in line.`
  return statement
  
}


function nowServing(theLine) {
  if (theLine.length>=1) {
    var x = theLine.shift()        // x now equals the first person in line
    return "Currently serving " + x + ".";
  } else if (theLine.length===0) {
    return "There is nobody waiting to be served!"
  } else {
    console.log('error')
  }
  
}


function currentLine(line) {
  var currLineStatement = "The line is currently: "
  if (line.length===0) {
    return "The line is currently empty."
  } else {
    for (var i=0;i<line.length;i++) {
      currLineStatement = currLineStatement + (i+1) + ". " + line[i]
        if(i !== line.length-1) { 
          currLineStatement = currLineStatement + ", "
        }
      
      }
    return currLineStatement
  }
}