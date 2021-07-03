var katzDeliLine = [];
 
 function takeANumber(line, name){
  line.push(name)
 var message = `Welcome, ${name}. You are number ${line.length} in line.`
  
  return message
 }
 

function nowServing(katzDeliLine){
  // let person = katzDeliLine.shift()
  // console.log("test", person)
   if (katzDeliLine.length < 1){
     return "There is nobody waiting to be served!"
     }
else {
  return `Currently serving ${katzDeliLine.shift()}.`
  }
}

function currentLine(x) {
    var line = []
    if (x.length === 0) {
      return "The line is currently empty."
    } else {
      for(var i = 0; i < x.length; i++) {
        line += (i + 1) + ". " + x[i] + ", "
      }
      line = line.slice(0, line.length-2)
      return "The line is currently: " + line
    }
}