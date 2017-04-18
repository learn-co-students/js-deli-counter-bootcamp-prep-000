var takeANumber = function(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
 }



function nowServing(katzDeliLine){
  if (katzDeliLine.length > 0){
    var myString = ('Currently serving ' + katzDeliLine[0] + '.')
    katzDeliLine.shift()
    return myString
  }else{
    return 'There is nobody waiting to be served!'
  }

}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var line = `The line is currently: `
    var numbersAndNames = []
    for (var i = 0; i < katzDeliLine.length; i++) {
      numbersAndNames.push(`${i + 1}. ${katzDeliLine[i]}`)
    }
    return line + numbersAndNames.join(', ')
  } else {
    return "The line is currently empty.";
  }
}
