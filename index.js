function takeANumber(deli, name) {
    deli.push(name);
    var num = deli.indexOf(name) + 1; //or deli.length
    return `Welcome, ${name}. You are number ${num} in line.`;
}

function nowServing(deli) {
  if (deli.length > 0) {
    var customer = deli.shift();
    return `Currently serving ${customer}.`
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(deli) {
  var line = [];
  if (deli.length > 0) {
    for (let i = 0; i < deli.length; i++) {
      if (i === 0) {
        line.push(`${i+1}. ${deli[i]}`);
      } else {
        line.push(` ${i+1}. ${deli[i]}`);
      }
    }
    return `The line is currently: ${line}`
  } else {
    return 'The line is currently empty.'
  }
}