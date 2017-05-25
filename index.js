var katzDeli = []

function takeANumber(katzDeliLine,name){
  var position = katzDeliLine.length+1
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${position} in line.`
}

function nowServing(katzDeliLine){

  if (katzDeliLine.length===0){
    return "There is nobody waiting to be served!"
  } else {
    var next = katzDeliLine[0]
    katzDeliLine.shift()
    return `Currently serving ${next}.`
  }
}

function currentLine(katzDeliLine){
  var lineList = []
  if (katzDeliLine.length===0){
    return "The line is currently empty."
  }
  else { // use .join()
    for( var i = 0; i < katzDeliLine.length; i++){
      var currentPerson = ` ${i+1}. ${katzDeliLine[i]}`
      lineList.push(currentPerson)
    }
    var lineStr = lineList.join(",")
    return `The line is currently:${lineStr}`
  }
}



/*
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var energy = fruits.join();

function currentLine(katzDeliLine){
  var lineList = ""
  if (katzDeliLine.length===0){
    return "The line is currently empty."
  }
  else {
    for( var i = 0; i < katzDeliLine.length; i++){
      var str = ` ${i+1}. ${katzDeliLine[i]}`
      if(i>0){
        lineList = lineList + ","
      }
      lineList = lineList + str
    }
    return `The line is currently:${lineList}`
  }
}

*/
