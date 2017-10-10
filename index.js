var katzDeliLine=[]
function takeANumber (katzDeliLine, customName){
  katzDeliLine.push(customName)
return `Welcome, ${customName}. You are number ${katzDeliLine.length} in line.`

}

function nowServing (katzDeliLine){
if (katzDeliLine.length>=1){
return `Currently serving ${katzDeliLine.shift()}.`
}
else{
return "There is nobody waiting to be served!"}
}

function currentLine(katzDeliLine){
  if(katzDeliLine.length==0){return"The line is currently empty."}
  else { var namesAndNumber=[]
    for (let i = 0 ; i < katzDeliLine.length; i++){
    var k = `${ i + 1 }\. ${katzDeliLine[i]}`
    namesAndNumber.push(k)
  } var a = namesAndNumber.join(', ')
    return `The line is currently: ${a}`
  }
}
