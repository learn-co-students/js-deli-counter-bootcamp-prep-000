// var katzDeliLine=[]
// var persons=[]
function takeANumber(katzDeliLine,persons){
     katzDeliLine.push(persons)
    //  katzDeliLine=[...katzDeliLine,persons]
    return `Welcome, ${katzDeliLine[katzDeliLine.length-1]}. You are number ${katzDeliLine.length} in line.`
}

// var katzDeliLine=[]
function nowServing(katzDeliLine){
  if(katzDeliLine.length==0){
    return "There is nobody waiting to be served!"
  } else{
     return `Currently serving ${katzDeliLine.shift()}.`
    // console.log( katzDeliLine)
    // katzDeliLine.shift()
    // katzDeliLine=katzDeliLine.slice(1,katzDeliLine.length)
    // console.log(`katzDeliLine=[${katzDeliLine}]`)
  }
 }

function currentLine(katzDeliLine){
  if (katzDeliLine.length==0){
    return "The line is currently empty."
  } else{
    for (var i=0;i<katzDeliLine.length;i++){
      katzDeliLine[i]=` ${i+1}. ${katzDeliLine[i]}`
    }
    return `The line is currently:${katzDeliLine}`
  }
}
