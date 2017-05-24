// return person's position in line
// function takeANumber(line, name) {
//   for (var i = 0; i < line.length; i++) {
//     var str = "";
//     if (line[i] === name) {
//       str = "Welcome " + name + "You are number" + (i + 1) + " in line.";
//     } else {
//       str = "Person not found!";
//     }
//   }
//   return str;
// }

// return person's position in line
function takeANumber(line, name) {
  line.push(name);
  return "Welcome, " + name + ". You are number " + line.length + " in line.";
}

// return the first person in line and then remove that individual from the line
// returns the line is empty when no on is on line
function nowServing(line) {
  if (line.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    return "Currently serving " + line.shift() + ".";
  }
}

// returns the current line
function currentLine(line) {
  if (line.length === 0) {
    return "The line is currently empty.";
  } else {
    var str = "";
    var i = 0;
    while (i < line.length) {
      str = str + (i+1) + ". " + line[i] + ", ";
      i++;
    }
    var res = "The line is currently: " + str;
    return res.slice(0, (res.length - 2));
  }
}
