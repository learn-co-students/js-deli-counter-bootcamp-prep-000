var katzDeli = [];
function takeANumber(katzDeli, name) {
  katzDeli.push(name);
  return (`Welcome, ${name}. You are number ${katzDeli.length} in line.`);
}
function nowServing(katzDeli){
  if (katzDeli.length === 0){
    return "There is nobody waiting to be served!";
  } else {
    var tempName = katzDeli.shift()
    return (`Currently serving ${tempName}.`);
  }
}
function currentLine(katzDeli){
  if (katzDeli.length === 0){
    return "The line is currently empty.";
  } else {
    var buitString = "The line is currently:"
    for (var i=0; i<katzDeli.length; i++) {
      buitString += ` ${i+1}. ${katzDeli[i]}`;
      if (i < katzDeli.length-1) {
        buitString += ",";
      }
    }
    return buitString;
  }
}
