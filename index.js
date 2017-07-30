var katzDeli = [];

function takeANumber(array, name) {
  array.push(name);
  // return ('Welcome, '+ name +". You are number "+ array.length + " in line.")
  return `Welcome, ${name}. You are number ${array.length} in line.`
}

function nowServing(array) {
  if (array.length === 0) {
    return "There is nobody waiting to be served!"
  }
  else {
    var head = array.shift();
    return `Currently serving ${head}.`
  }
}

function currentLine(line) {
  var whoinline = "The line is currently: ";
  if (line.length === 0) {
    return "The line is currently empty."
  }
  else {
    for (let i=0; i<line.length; i++) {
      if(i === line.length -1) {
        // whoinline = whoinline + (i+1) +". "+ line[i];
        whoinline = whoinline + `${i+1}. ${line[i]}`
      } else {
        // whoinline = whoinline + (i+1) +". " + line[i] + ", ";
        whoinline = whoinline + `${i+1}. ${line[i]}, `
      }
    }
    return whoinline;
  }
}
