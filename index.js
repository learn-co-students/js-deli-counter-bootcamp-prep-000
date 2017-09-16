// Deli Counter Lab

var katzDeli = []

function takeANumber(katzDeliLine, name){

  katzDeliLine.push(name)

    return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
} // end takeANumber

function nowServing(katzDeliLine){
    var newArray = []
    var i = 0
    var string

    if (katzDeliLine.length < 1) {
      return "There is nobody waiting to be served!"
    } // end if

    else if (katzDeliLine.length > 1) {

    string = katzDeliLine.shift()
    newArray = [...newArray, katzDeliLine.slice(1)]

      return (`Currently serving ${string}.`)
    }// end else if

} // end nowServing

function currentLine(array){

  if (array.length < 1) {
    return "The line is currently empty."
  } //end if statement

  else if(array.length > 1) {

    return `The line is currently: 1. ${array[0]}, 2. ${array[1]}, 3. ${array[2]}`
  } //end

} // end currentLine
