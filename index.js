function takeANumber(arr, name) {
  arr.push(name);
  var pos = arr.indexOf(name) + 1;
  console.log(pos);
  return `Welcome, ${name}. You are number ` + pos + " in line.";
}

function nowServing(arr) {
  if (arr.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    var pers = arr.shift();
    return "Currently serving " + pers + ".";
  }
}

function currentLine(arr) {
  if (arr.length === 0) {
    return "The line is currently empty.";
  } else {
    var output = "The line is currently: ";
    for (var i = 0; i < arr.length; i++) {
      output += (i + 1) + ". " + arr[i] + (i === arr.length - 1 ? "" : ", ");
    }
    return output;
  }
}