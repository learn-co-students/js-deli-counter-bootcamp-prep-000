var katzDeliLine = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name)
  console.log("Welcome, " + name + ". You are number "+ katzDeliLine.length + " in line.")
  return("Welcome, " + name + ". You are number "+ katzDeliLine.length + " in line.")
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0){
    console.log("There is nobody waiting to be served!")
    return("There is nobody waiting to be served!")
  } else{
    return ("Currently serving "+ katzDeliLine.shift()+".")
  }
}

function currentLine(katzDeliLine){
  if(katzDeliLine.length === 0){
    return"The line is currently empty."
  }
  var namesNums = [];
  for (var i = 0; i < katzDeliLine.length; i++){
    namesNums.push (i + 1 + ". "+ katzDeliLine[i])
  }
  console.log("The  is currently: " + namesNums)
  return("The line is currently: " + namesNums.join(", "))
}
