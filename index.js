var katzDeli=[]
var i=0
var returnString = ""
function takeANumber(katzDeliLine,name) {
  // console.log(katzDeliLine) 
  returnString = `Welcome, ${name}. You are number ${katzDeliLine.length+1} in line.`
  console.log(returnString)
  katzDeliLine.push(name)
  return returnString//,katzDeli
}


function nowServing(katzDeliLine){
  if (katzDeliLine.length>0) {
  var removedName=  katzDeliLine[0]
  katzDeliLine.shift()
  return `Currently serving ${removedName}.`

  }
  else {
  return "There is nobody waiting to be served!"  
  }
  
}

function currentLine(lineLength){
  var printString=""
  if (lineLength.length===0){
    return "The line is currently empty."
  }
  else {
    printString = 'The line is currently: '
    for (i=0; i<lineLength.length; i++){
      var tempString=`${i+1}. ${lineLength[i]}, `
      printString=printString.concat(tempString)
    }
    var trimmed =printString.substr(0, printString.length-2)
    return trimmed //
    //`The line is currently: 1. Bill, 2. Jane, 3. Ann`
  }
}