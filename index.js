katzDeliLine = []
function takeANumber(katzDeliLine,name){
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine){
  return (katzDeliLine.length>0 ? `Currently serving ${katzDeliLine.shift()}.`:"There is nobody waiting to be served!")
}

function currentLine(katzDeliLine){
let newArray=[]
if(katzDeliLine.length>0){
  let a = ""
  let i
  let b = ""
    for (i=0;i<katzDeliLine.length;i++){
      a = ` ${i+1}. ${katzDeliLine[i]}`
      newArray.push(a)
      }
    b = "The line is currently:" + newArray
    return b
  }
  else{
    return "The line is currently empty."
    }
}
