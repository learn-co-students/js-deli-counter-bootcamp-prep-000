var katzDeliLine = []
var i = 0

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ` + katzDeliLine.length + ` in line.`
}


function nowServing(katzDeliLine){
    if (katzDeliLine.length){
      return `Currently serving ${katzDeliLine.shift()}.`
    }
    else {
      return `There is nobody waiting to be served!`
    }
  }

// function currentLine(line){
//   let numbers = []
//   for(var i = 0; i < line.length; i++){
//     //create a string with number and person's name
//     var nums = `${i + 1}. ${line}`
//     //put name into our numbers array 
//     numbers.push(nums)
//     if (line.length > 0){
//       return `The line is currently: ${numbers}.`
//     }
//     else {
//       return `The line is currently empty.`
//     }
//   }
//   return numbers
// }

function currentLine(line){
  let numbers = []
  if (line.length === 0){
    return `The line is currently empty.`
  }
  for(var i = 0, l= line.length; i < l; i++){
    var nums = `${i + 1}. ${line[i]}`
    numbers.push(nums)
    }
  return `The line is currently: ${numbers.join(', ')}`
}


// function currentLine(line){
//     if (line.length > 0){
//       return `The line is currently: ${line}.`
//     }
//     else {
//       return `The line is currently empty.`
//     }
//   }