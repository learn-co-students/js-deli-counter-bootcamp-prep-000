var katzDeli = [];

var takeANumber = function (katzDeliLine, name) {

  "use strict";

  var pos = katzDeliLine.push(name);

  return "Welcome, " + name + ". You are number " + pos + " in line.";
};

var nowServing = function (katzDeliLine) {

  "use strict";

  var next = katzDeliLine.shift();

  return (next === undefined)
    ? "There is nobody waiting to be served!"
    : "Currently serving " + next + ".";
};

var currentLine = function (katzDeliLine) {

  "use strict";

  var line = katzDeliLine.reduce(function (pos, name, idx) {

    if (pos !== "") {
      pos += ", ";
    }

    return pos + String(idx + 1) + ". " + name;
  }, "");

  return (line === "")
    ? "The line is currently empty."
    : "The line is currently: " + line;
};
