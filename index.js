function takeANumber(katzDeli, name) {
  katzDeli.push(name);
  return `Welcome, ${name}. You are number ${katzDeli.length} in line.`
}

function nowServing(deliLine) {
  if(deliLine.length > 0) {
    const name = deliLine[0];
    deliLine.shift();
    return `Currently serving ${name}.`
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(line) {
  var result = "The line is currently:";
  
  if (line.length == 0) {
    return "The line is currently empty."
  } else {
      for(let i = 0; i < line.length; i++) {
        result += ` ${i+1}. ${line[i]},`
      }
      result = result.substring(0, result.length - 1)
  }

  return result
}