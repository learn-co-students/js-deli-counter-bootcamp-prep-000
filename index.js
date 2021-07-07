function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name)//adds name to katzDeliLine
  console.log(katzDeliLine) //displays names to console
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line." //returns string
}

  function nowServing(deliLine){
    if(deliLine.length === 0){
      return("There is nobody waiting to be served!")
    } else{
      return `Currently serving ${deliLine.shift()}.`
    }
  }

  function currentLine(line){

    if(line.length === 0){
      return("The line is currently empty.")
    } else{
      return "The line is currently: 1. " + line[0] + ", 2. " + line[1] + ", 3. " + line[2]
    }
  }
