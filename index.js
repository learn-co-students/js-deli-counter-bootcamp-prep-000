var katzDeli = [];
function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
    for (let i = 0; i < katzDeliLine.length; i++)

    if(katzDeliLine.length > 0) {
    return `Currently serving ${katzDeliLine.shift()}.`

      } else { (katzDeliLine.length < 1 )

      }
    return "There is nobody waiting to be served!"
  }

function currentLine(katzDeliLine) {
  //  let i = 0
    if(katzDeliLine.length < 1 )
      //    block of code to be executed if the condition is true
    return "The line is currently empty."
    }
    /*
    var placePlusName = []

    for( i < katzDeliLine.length; i++) {
    //return a string which gives their place in line Plus their Name
    //put the first two person in line and then remove them fr the line.
    //make sure to use exact string as the instructions
    }
    return `The line is currently: ${i + 1} ${i + 2} ()}`
  } */
