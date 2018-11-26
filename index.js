var takeANumber = function (line, name) {
  line.push(name);
  var place = line.length;
  var msg = `Welcome, ${name}. You are number ${place} in line.`;
  return msg;
}


var nowServing = function(line) {
  var firstP;
  var msg;
  if (line.length > 0) {
    firstP = line.shift();
    msg = `Currently serving ${firstP}.`;
  } else {
    msg = "There is nobody waiting to be served!";
  }
  return msg;
}

var currentLine = function(line) {
  var msg;
  if (line.length > 0) {
    msg = ["The line is currently:"];
    for (var i = 0; i < line.length; i++) {
      var place = i + 1;
      if (i === line.length - 1) {
        msg.push(` ${place}. ${line[i]}`);
      } else {
        msg.push(` ${place}. ${line[i]},`);
      }
    }
    msg = msg.join('');
  } else {
    msg = "The line is currently empty.";
  }
  return msg;
}
