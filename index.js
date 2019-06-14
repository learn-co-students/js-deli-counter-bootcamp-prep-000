function takeANumber(katzDeliLine,Ada) {
  katzDeliLine.push(Ada)
  return `Welcome, ${Ada}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length===0) {
    return 'There is nobody waiting to be served!';
  } else {
    return `Currently serving ${katzDeliLine.shift()}.`
  }
}

  function currentLine(line) {
    var line2='The line is currently:'
    var last='.';
    for (let i=0;i<line.length;i++) {
      if(line.length===0){
        return'The line is currently empty.'
      } else {
      line2+=` ${i+1}. ${line[i]},`
       }
    }
    return line2
  }
  //The line is currently: 1. Bill, 2. Jane, 3. Ann