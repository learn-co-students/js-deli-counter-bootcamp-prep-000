// var katzDeli = ["jackson", "jeremy", "ada"]

var takeANumber = function(currentLine, newName){
  var num = currentLine.length
  currentLine.push(newName)
  // console.log(currentLine)
  return `Welcome, ${newName}. You are number ${num + 1} in line.`
}

// console.log(takeANumber(["ada", "zach", "corey"], "lesly"))
// console.log(takeANumber(katzDeli, 'Ada'));
// console.log(takeANumber(katzDeli, 'Grace'));
// console.log(takeANumber(katzDeli, 'Kent'));

var nowServing = function(katzDeliLine){
  if(katzDeliLine.length > 0){
  const firstPerson = katzDeliLine[0]
  katzDeliLine.shift()
  return `Currently serving ${firstPerson}.`
  } else {
    return "There is nobody waiting to be served!"
  }
}

// console.log(nowServing(["jackson", "jason"]))

var currentLine = function(currentLine){
  if (currentLine.length > 0){
    var message = `The line is currently: `
    for(let i = 0; i < currentLine.length -1; i++){
      message = message + [i+1] + ". " + currentLine[i] + ", "
    }
    return message + [currentLine.length] + ". " + currentLine[currentLine.length-1]
  } else {
    return "The line is currently empty."
  }
}

// console.log(currentLine(["jada", "jason", "jayla"]))