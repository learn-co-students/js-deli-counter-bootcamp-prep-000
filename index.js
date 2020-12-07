var deliLine = ['Grace', 'Toby', 'Rick']
var emptyArr =[]

//adds a new person to the line and returns a welcome message with their position in line.

function takeANumber(lineArr, name) {
  lineArr.push(name)
  let linePosition = lineArr.length
  var welcomeMessage = (`Welcome, ${name}. You are number ${linePosition} in line.`)
  return welcomeMessage
}

//returns the name of the person next in line and removes them from the line
function nowServing(lineArr) {
  var nextInLine = lineArr.shift()
  if (typeof(nextInLine) === 'string') {
    return `Currently serving ${nextInLine}.`
  } else {
    return "There is nobody waiting to be served!"
  }
}

 //missing commas in between
 //prints the name and place of each person in line
 //message is stuck as the line is currenty:
function currentLine (lineArr) {
  if (typeof(lineArr[0]) !== 'string') {
     return "The line is currently empty."
} else {
    let message = "The line is currently: "
    lineArr.forEach(function(item, index) {
      if (index === (lineArr.length - 1)) {
        message += (index + 1 + ". " + item)
    } else {
        message += (index + 1 + ". " + item + ", ")
      }
    })
    return message
  }
}

//console.log(takeANumber(deliLine, "Bob"))
//console.log(deliLine)
//.log(nowServing(deliLine))

//console.log(currentLine(deliLine))
