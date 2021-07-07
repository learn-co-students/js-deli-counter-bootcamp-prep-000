var katzDeli = [];

function takeANumber(katzDeli, person) {
  katzDeli.push(person);
  return (`Welcome, ${person}. You are number ${katzDeli.length} in line.`)
}

function nowServing(katzDeli) {
  if (katzDeli.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    var name = katzDeli[0];
    katzDeli.splice(0,1);
    return "Currently serving " + name + ".";

  }

}

function currentLine(katzDeli) {
  var line = [];
  if (katzDeli.length === 0) {
    return "The line is currently empty.";
  } else {
    for (var n = 0; n < katzDeli.length; n++) {
      line += (n+1) + ". " + katzDeli[n] + ", "
    }
  }
  line = line.slice(0, line.length-2)
  return "The line is currently: " + line;
}
