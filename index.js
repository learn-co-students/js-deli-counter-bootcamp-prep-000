const katzDeliLine = [];

function takeANumber(katzDeliLine, people){
  katzDeliLine.push(people)
  return `Welcome, ${people}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length > 0){
    return `Currently serving ${katzDeliLine.shift()}.`
    } else {
    return `There is nobody waiting to be served!`
  }
}

function currentLine(katzDeliLine){
  var line = []
  if(katzDeliLine.length > 0){
    for(let i = 0; i < katzDeliLine.length; i++){
      line.push(` ${i+1}. ${katzDeliLine[i]}`)
    }return `The line is currently:${line}`
  }else{ 
    return `The line is currently empty.`
  }
}


//function currentLine(katzDeliLine){
//  if(katzDeliLine.length > 0){
//    var line = []
//    for(let l = 1; katzDeliLine.lenght > 0; l = l +1){
//      line.push(l)
//    }
//    return `The line is currently:${line}`
//  }else{
//     return `The line is currently empty.`
//   }
//}