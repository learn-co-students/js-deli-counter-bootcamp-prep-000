var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
katzDeliLine.push(name)
var counter = 1
for (var i = 0; i < katzDeliLine.length; i++) {
  if (katzDeliLine[i] !== name){counter++}
}
return 'Welcome, ' + name + '. You are number ' + counter + ' in line.'
}

function nowServing(katzDeliLine){
if (katzDeliLine.length > 0 ) {
  var nowserving =  katzDeliLine[0]
  katzDeliLine.shift()
  return 'Currently serving ' + nowserving + '.'
}
else {
  return 'There is nobody waiting to be served!'
}
}



function currentLine(katzDeliLine) {
  var currentline = []
  if (katzDeliLine.length > 0) {
    for (var i = 0; i < katzDeliLine.length; i++) {
    var counter = i + 1
    currentline.push(" " + counter + ". " + katzDeliLine[i])
  }
}
  else {
    return 'The line is currently empty.'
  }
  return 'The line is currently:' + currentline
  }



/*
  var counter = 1
  for (var i = 0; i < katzDeliLine.length; i++) {
    if (katzDeliLine !== name){counter++}
  }
 return 'Welcome, ' + name + '. You are number ' + counter + ' in line.'
}
*/
