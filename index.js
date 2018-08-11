function takeANumber(line, name){
  line.push(name)

  return `Welcome, ${name}. You are number ${line.length} in line.`
};

function nowServing (line){
  while (line.length > 0) {
    return `Currently serving ${line.shift()}.`
  }
  return "There is nobody waiting to be served!"
};

function currentLine(line){
  if (line.length == 0) {
    return "The line is currently empty."
  }
    var newline =[];
    for (var i = 0, l = line.length; i < l; i++) {
      newline.push(`${i + 1}. ${line[i]}`)
    }
    return `The line is currently: ${newline.join(', ')}`

};
