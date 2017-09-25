var katzDeliLine = [];

function takeANumber (katzDeliLine, name) {
  katzDeliLine.push(name)
  var position = parseInt(katzDeliLine.length)
  return (`Welcome, ${name}. You are number ${position} in line.`)
}
/* Initial way I thought about doing part 2, but it wasn't giving me the desired results
function nowServing (katzDeliLine) {
  if (katzDeliLine.length != 0) {
    return `Currently serving ${katzDeliLine[0]}.`
    katzDeliLine.shift()
  } else {
    return "There is nobody waiting to be served!"
  }
}
*/
function nowServing (katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    return `Currently serving ${katzDeliLine.shift()}.`
  }
}

function currentLine (katzDeliLine) {
  var position = 0
  var lineList = "The line is currently: "
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  } else {
    for (var i=0; i<katzDeliLine.length; i++) {
      position = i + 1
      if (i<(katzDeliLine.length-1)) {
        lineList = `${lineList}${position}. ${katzDeliLine[i]}, `
      } else {
        lineList = `${lineList}${position}. ${katzDeliLine[i]}`
      }
    }
  }
  return lineList
}

/* The initial way I tried to do part 3
function currentLine (katzDeliLine) {
  var position = 0
  var lineIntro = "The line is currently: "
  var lineList = new Object();
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  } else {
    for (var i=0; i<katzDeliLine.length; i++) {
      position = i + 1
      lineList[position]=katzDeliLine[i]
      // console.log(lineList)
    }
    return(`${lineIntro} ${lineList}`)
  }
}
*/
