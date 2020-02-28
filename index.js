
var katzDeliLine = []; 

function takeANumber (katzDeliLine, name) {
katzDeliLine.push(name); 
return (`Welcome, ` + name + `. You are number ` + katzDeliLine.length + ` in line.`)  }

function nowServing (katzDeliLine) {
  if (katzDeliLine.length > 0) {
   return (`Currently serving ` + katzDeliLine.shift() + `.`); 
  } else {
    return (`There is nobody waiting to be served!`) 
  }
  }
  
function currentLine(katzDeliLine) {
  if (katzDeliLine < 1) {
    return (`The line is currently empty.`)
  } else {
  var array = [];
  for (let i = 0; i < katzDeliLine.length; i++) {
      array.push(` ${i+1}. ${katzDeliLine[i]}`)
  }
  return (`The line is currently:${array}`)
  }
}

//ask someone online what the fuck is going on with these spaces. 
