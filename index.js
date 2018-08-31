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

function currentLine(line){
  if(line.length < 1){
    return "The line is currently empty."
  }
  else { 
    let text = "The line is currently" 
    // return line
    for (let i = 0; i < line.length ; i++) {
      text = i + i
      console.log("--", text + " " + (i+1) + "." + line[i])
    }
    // let animals = [dog, cat, bird, frog]
    // animals[0]
  }
}
  