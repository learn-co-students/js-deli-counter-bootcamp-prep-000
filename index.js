
var katzDeliLine = [];
function takeANumber(katzDeliLine, name) {
  for (var i = 0; i <= katzDeliLine.length; i++) {
    if (katzDeliLine !== 0) {
      katzDeliLine.push(name);
      var welcomed = name;
      var lineLength = (katzDeliLine.length);
      return "Welcome, "+ `${welcomed}`+". You are number " + `${lineLength}` + " in line.";
    } else {
      katzDeliLine.push(name);
      return "Welcome, "+ `${welcomed}`+". You are number " + `${lineLength}` + " in line.";
    }
  }
}

var katzDeliLine = [];
function nowServing(katzDeliLine) {
  for (var i = 0; i <= katzDeliLine.length; i++) {
    if (katzDeliLine.length === 0) {
      return "There is nobody waiting to be served\!";
    } else {
      var called = katzDeliLine.shift();
      return "Currently serving " + `${called}` + ".";
    }
  }
}

function currentLine(line) {
  var array = [];
    if (line.length !== 0 ) {
      for (var i = 0; i < line.length; i++) {
        array.push(" "+`${i + 1}`+". " + `${line[i]}`+"");
      }
    } else {
     return "The line is currently empty.";
    }
    return "The line is currently:" + `${array}`;
}
