function takeANumber(array, name){
  array.push(name);
  var position = array.indexOf(name) + 1;
  return 'Welcome, '+ name +". You are number " + position +" in line."
}

function nowServing(array){
  if (array.length == 0){
    return 'There is nobody waiting to be served!'
  }
  else {
    return "Currently serving "  + array.shift() + "."
  }
}

function currentLine(line){
  if (line.length == 0){
    return 'The line is currently empty.'
  }
  else {
    var counter = [1]
    var newArray = []
    for (let i=0; i < line.length; i++){
      newArray.push(" " + counter + '. ' + line[i])
      counter ++
    }
    return 'The line is currently:' + newArray
  }
}
