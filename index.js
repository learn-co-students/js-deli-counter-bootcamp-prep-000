function takeANumber(katzDeliLine, name){
//  console.log(katzDeliLine);
  katzDeliLine.push(name)
//  console.log(katzDeliLine);
  var position = katzDeliLine.indexOf(name)
//  console.log(position);
  return ('Welcome, '+name+'. You are number '+parseInt(position+1)+' in line.')
}

function nowServing(line){
  var person = line.shift()
  if (person === undefined) {         //use this comparison or ----- if(!person){same statement}
    return 'There is nobody waiting to be served!'
  } else {
      return ('Currently serving '+person+'.')
  }
}

function currentLine(katzDeliLine){
//  console.log(katzDeliLine);
//  console.log(katzDeliLine.length);
  if (katzDeliLine.length === 0) {
    return 'The line is currently empty.'
  } else {
    var line = null
    for (var i = 0; i < katzDeliLine.length; i++) {
      line = line + parseInt(i+1) + '. ' + katzDeliLine[i] //+ ', '
      if (i < katzDeliLine.length - 1) {
        line = line + ', '
      }
      console.log(line);
    }
    return 'The line is currently: '+ line
  }
}
