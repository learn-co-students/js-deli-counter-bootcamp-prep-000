function takeANumber(line,name) {
  line.push(name)
  var length = line.length
  var greeting = `Welcome, ${name}. You are number ${length} in line.`
  return greeting
}

function nowServing(line) {
  if (line.length === 0) {
    var noneInLine = "There is nobody waiting to be served!"
    return noneInLine
  } else {
  var served = `Currently serving ${line[0]}.`
  line.shift()
  return served
}//end if
}//end function

function currentLine(line) {
if (line.length === 0) {
  var lineEmpty = "The line is currently empty."
  return lineEmpty
} else {
  //create empty array
  var indexAndName = []
  for (var i = 0;i<line.length;++i) {
    var currName = line[i]
    var currPos = i + parseInt(1)
    indexAndName[i] = ` ${currPos}. ${currName}`
  }//end for
var currLine = `The line is currently:${indexAndName}`
return currLine
} //end if
}//end function
