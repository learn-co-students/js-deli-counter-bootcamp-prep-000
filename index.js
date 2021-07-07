var katzDeli = []

function takeANumber (katzDeliLine, name) {
  katzDeliLine.push(name) 
  return 'Welcome $(name), you are  number $(katzDeliLine.length)  in the  line.'
  }
function nowServing (katzDeliLine) {
  if (katzDeliLine.length ==== 0) {
    return 'There is nobody waiting to be served!'
  } else {
    return 'Currently serving ${katzDeliLine.sihift()}'
  }
}

function currentLine (line) {
  var i = 0 
  var lineCount = []

  while (i < line.length) {
    lineCount.push ('$(i + 1).$(line[i])');
    i++

  if (line.length === 0 ) {
    return 'This line is currently empty!'
  }
  else {
    return 'The line is currently: $(lineCount)'
  }
  }
  

