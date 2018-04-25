var katzDeliLine = [];

function takeANumber(katzDeliLine, name ){
  katzDeliLine.push(name);
  return (`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`);
}


function nowServing(katzDeliLine) {
 var x =  katzDeliLine.length
 
 if (x === 0)
   return  "There is nobody waiting to be served!"
 else {
    var y = katzDeliLine[0]
    katzDeliLine.shift()
    return `Currently serving ${y}.`
   }
}


function currentLine(katzDeliLine){
  var x =  katzDeliLine.length
  if (x === 0)
   return  "The line is currently empty."
  else {
   var arrLine = []
   for (var i=0; i< katzDeliLine.length; i++)
        arrLine.push(` ` + [i+1] + `. ` + katzDeliLine[i])
      } 
    return (`The line is currently:` + arrLine)
  }
