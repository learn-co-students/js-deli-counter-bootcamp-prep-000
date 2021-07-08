function takeANumber(katzDeliLine, custName){

  katzDeliLine.push(custName)

  return `Welcome, ${custName}. You are number ${katzDeliLine.length} in line.`

}


function nowServing(lineArr){

  if(lineArr.length===0){
    return "There is nobody waiting to be served!"
  }else{
    var cust = lineArr[0]
    lineArr.shift()
    console.log(`Currently serving ${cust}.`)
    return `Currently serving ${cust}.`
  }

}

function currentLine(lineArr){

  var str = ""

  if(lineArr.length===0){
    return `The line is currently empty.`
  }else{
    for(var i=0; i<lineArr.length; i++){
      if(i===lineArr.length-1){
          str+= `${i+1}. ${lineArr[i]}`
      }else{
        str+= `${i+1}. ${lineArr[i]}, `
      }
    }
    return `The line is currently: ${str}`
  }
}
