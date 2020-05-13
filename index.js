function takeANumber(line, name) {
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line) {
  var next = '';
  if (line.length > 0){
    next = line[0];
    line.shift();
    return `Currently serving ${next}.`;
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(line) {
  let update = [];
  if (line.length > 0) {
    for (var i = 0; i < line.length; i++) {
      let result = `${i+1}. ${line[i]}`;
      update.push(result);
    }
    let final = update.join(', ');
    return `The line is currently: ${final}`;
  } else {
    return "The line is currently empty.";
  }
}
