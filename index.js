function takeANumber(line,name) {
  line.push(name);
  return "Welcome, " + name + ". You are number " + line.length + " in line."
}
function nowServing(array) {
  if (array.length === 0) {
    return "There is nobody waiting to be served!"
  }
  else {
    let first = array.shift();
    return "Currently serving " + first +".";
  }
}
function currentLine(array) {
    if (array.length === 0) {
    return "The line is currently empty."
  }
  else {
    let list = "The line is currently: ";
    for(let i = 0; i < array.length; i++) {
      list += (i+1) + ". " + array[i];
      if (i < array.length-1) {
        list+= ", "
      }
    }
    return list;
  }
}