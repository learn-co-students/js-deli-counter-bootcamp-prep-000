function takeANumber(katzDeliLine, name){

  var line = 'Welcome, ' + name + '. You are number ' + (katzDeliLine.length+1) + ' in line.'

  katzDeliLine.push(name)

  return line

}

function nowServing(katzDeliLine){

if (katzDeliLine.length>0) {


  var name = katzDeliLine[0]

  katzDeliLine.shift()

  return "Currently serving " + name + "."
}else {
  return 'There is nobody waiting to be served!'
}

}

// Build a function nowServing. This function should return the first person in line and then remove that individual from
// the line. If there is nobody in line, it should return "There is nobody waiting to be served!"

function currentLine(katzDeliLine){

var array = []
  if (katzDeliLine.length>0) {
    for (var i = 0; i < katzDeliLine.length; i++) {
      var count = i+1
      if (i===0) {
        array.push(count + '. ' + katzDeliLine[i])
      }else {
        array.push(' ' + count + '. ' + katzDeliLine[i])
      }
    }
      return "The line is currently: " + array
    }
    else {
      return 'The line is currently empty.'
    }

  }
