var katzDeliLine=[]

function takeANumber(katzDeliLine,name){
  katzDeliLine.push(name)

  var size = katzDeliLine.length
  return 'Welcome, ' + name + '. You are number ' + size + ' in line.'
}

function nowServing(katzDeliLine) {
  if(katzDeliLine.length===0){
    return 'There is nobody waiting to be served!'
  }
  else {
    var tmp = katzDeliLine[0]
    katzDeliLine.shift()
    return 'Currently serving ' + tmp + '.'
  }
}

function currentLine(line) {
  if(line.length===0) {
    return 'The line is currently empty.'
  }
  else {
    var temp = 'The line is currently: '
    for(var i=0; i<line.length; i++)
    {
      if(i>0)
      {
        temp += ', '
      }
      temp += (i+1)+'. '+line[i]
    }
    return temp
  }
}
