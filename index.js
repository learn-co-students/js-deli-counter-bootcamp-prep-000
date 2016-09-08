function takeANumber(line, name){
  line.push(name)
  var i = line.indexOf(name) + 1
  return 'Welcome, ' + name + '. You are number '+ i + ' in line.'
}

function nowServing(line1){
  if (line1.length == 0) {
    return "There is nobody waiting to be served!"
  }
  else {
    var next = line1[0]
    //console.log('Currently serving '+ next )
    line1.shift()
    //return line1
    return ('Currently serving ' + next + '.')
  }
}

function currentLine(line){
  if (line.length == 0) {
    return 'The line is currently empty.'
  }
  else {
    var intro = 'The line is currently: '
    for (var i = 0; i < line.length; i++) {
      var num = i + 1
      var name =line[i]
      var combo = (num + '. '+ name + ', ')
      intro = intro + combo
    }
    intro = intro.substring(0,intro.length -2)
    return intro
  }
}
