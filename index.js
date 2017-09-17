function takeANumber(currentLine, person) {

    currentLine.push(person)

    var personIndex = currentLine.indexOf(person)+1

    return `Welcome, ${person}. You are number ${personIndex} in line.`
  }

function nowServing(currentLine) {

  if(currentLine.length == 0) {

    return 'There is nobody waiting to be served!'
  }
  else {
    {
      var beingServed = currentLine.shift()

      return `Currently serving ${beingServed}.`
    }
  }
}


function currentLine(katzDeliLine) {

  if(katzDeliLine.length>0) {

    var final = 'The line is currently: '

    var foundMembers

    for(var i =0 ; i<katzDeliLine.length; i++) {

      final+=`${i+1}. `+`${katzDeliLine[i]}, `
    }
      var finalStr = final.slice(0, -2)

      return finalStr
  }

  else {
    {
      return 'The line is currently empty.'
    }
  }
}
