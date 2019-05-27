let deli = [];

function takeANumber(deli, name) {
  deli.push(name)
  return `Welcome, ${name}. You are number ${deli.length} in line.`;
}

function currentLine(deli) {
  if (deli.length == 0) {
    return "The line is currently empty."  
  }
  else {
    let line = [];
    for (var i = 0; i < deli.length; i++) {
      line.push((i +1) + ". "+deli[i]);
    }
    return "The line is currently: " + line.join(", ")
  }
}

    
  

  function nowServing(deli) {
    if (deli.length === 0) {
      return 'There is nobody waiting to be served!'
    }
    else {
      return `Currently serving ${deli.shift()}.`
    }
  }



