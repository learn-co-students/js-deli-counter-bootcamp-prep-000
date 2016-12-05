

function takeANumber(line, name) {
  line.push(name);
  for (var i = 0; i < line.length; i++) {
    if (name == line[i]) {
      var position = i + 1
    }
  }
  // var position = line.indexOf(name) + 1;
  return `Welcome, ${name}. You are number ${position} in line.`
}

function nowServing(line) {
  if (line.length == 0) {
    return ("There is nobody waiting to be served!")
  } else {
    var currentLine = line.shift();
    return ('Currently serving ' + currentLine + '.' )
  }
}

function currentLine(line){
  if (line.length == 0) {
    return ("The line is currently empty.")
  } else {
    var ret = 'The line is currently: '
    // var people = []
    // for (var i = 0; i < line.length; i++) {
    //   people.push(`${i+1}. ${line[i]}`)
    // }
    // return ret + people.join(', ');
    for (var i = 0; i < line.length; i++) {
      var position = i + 1
      var name = line[i]
      ret += `${position}. ${name}, `
    }
    return ret.substring(0, ret.length - 2);
  }
}
