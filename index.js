function takeANumber(katzDeli, name) {
  katzDeli.push(name);
    return `Welcome, ${name}. You are number ${katzDeli.length} in line.`;
}

function nowServing(katzDeli) {
  var person = katzDeli.shift();
  if (katzDeli.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    person;
    return `Currently serving ${person}.`
  }
}

function currentLine(katzDeli) {
  var i = 0
  var list = []
  if (katzDeli.length === 0) {
    return "The line is currently empty."
  } else {
      while (i < katzDeli.length) {
        list.push(`${i + 1}. ${katzDeli[i]}`);
        i++;
      }
        return "The line is currently: " + list.join(", ");
      }
}
