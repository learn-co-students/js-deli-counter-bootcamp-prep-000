function takeANumber(currentline, name) {
  currentline.push(name);
  var position  = currentline.length;
  return `Welcome, ${name}. You are number ${position} in line.`;
}

function nowServing(currentline) {
  if (currentline.length > 0){
    while (currentline.length > 0) {
      var nameServed = currentline[0];
      currentline.shift();
      return nameServed;
    }
  } else {
    return "There is nobody waiting to be served!";
  }
  
}