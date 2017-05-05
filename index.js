var katzDeli = [];
var katzDeliLine = [];

function takeANumber(array, number){
  array.push(number)
  return `Welcome, ${number}. You are number ${array.length} in line.`
}

function nowServing(array){
  if (array.length > 0){
    var person = array[0]
    array.shift()
    return `Currently serving ${person}.`
  }else{
    return 'There is nobody waiting to be served!'
  }
}

function currentLine(line){
  if (line.length > 0){
    var returnStr = "The line is currently: "
    for (var i = 0; i < line.length; i++) {
      if (i === 0){
        returnStr = returnStr + `${i + 1}. ${line[i]}`
      }else{
        returnStr = returnStr + `, ${i + 1}. ${line[i]}`
      }
    }
    return returnStr;
  }else{
    return "The line is currently empty."
  }
}
