var katzDeliLine = [];

function takeANumber(line, name) {
  line.push(name);

  return `Welcome, ${name}. You are number ${line.length} in line.`;
}

function nowServing(line) {
  if(line.length > 0) {
    var customer = line.shift();
    return `Currently serving ${customer}.`;
  } else {
    return 'There is nobody waiting to be served!';
  }
}

function currentLine(line) {
  if(line.length > 0) {
    var message = 'The line is currently: ';
    for(var i = 0; i < line.length; i++) {
      message += `${i+1}. ${line[i]}, `;
    };
    message = message.replace(/,\s*$/, "");
    return message;
  } else {
    return 'The line is currently empty.';
  }
}
