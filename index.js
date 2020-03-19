function takeANumber(currentLine, newPerson){
   //let currLi = currentLine.slice(0)
  currentLine.push(newPerson)
  return `Welcome, ${newPerson}. You are number ${currentLine.length} in line.`
}

function nowServing(arr){
  if (arr.length >0){

    return `Currently serving ${arr.shift()}.`
  }else {
    return 'There is nobody waiting to be served!'
  }
}

function currentLine(lineArr){
  let current = []
  if(lineArr.length > 0){
    for (let i = 0; i < lineArr.length; i++){
     current.push(' ' + (i+1) + '.' + " " + lineArr[i])
   }return 'The line is currently:' + [...current]
  }else{
    return "The line is currently empty."
  }
}
