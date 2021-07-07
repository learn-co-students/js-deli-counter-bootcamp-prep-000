

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length > 0){
    
    return `Currently serving ${katzDeliLine.shift()}.`
  }else{
    return "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeliLine){
    
    if (katzDeliLine.length > 0){
      var newArray = [];
      for(var i = 0; i < katzDeliLine.length; i++){
        newArray.push(` ${i+1}. ${katzDeliLine[i]}`)
      }
      return `The line is currently:${newArray}`
    }else{
      return "The line is currently empty."
    }
}





//   6) deli currentLine(line) returns "The line is currently empty." if no one isin line:
//     ReferenceError: currentLine is not defined
//       at Context.it (test/index-test.js:46:7)

//   7) deli currentLine(line) says who is in line when there are people waiting:
//     ReferenceError: currentLine is not defined
//       at Context.it (test/index-test.js:50:7)