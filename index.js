function takeANumber(line, name) {
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`;
}

function nowServing(line) {
  if(line.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    return `Currently serving ${line.shift()}.`;
  }
}

function currentLine(line) {
  var response = `The line is currently`;
  if(line.length === 0) {
    return response + ` empty.`;
  } else {
    response += `: `;
    for(var i = 0; i < line.length; i++) {
      response += `${i+1}. ${line[i]}, `;
    }
    return response.slice(0, response.length-2);
  }
}