var katzDeli = [];


var takeANumber = (line, name) => {
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`;
};

var nowServing = (line) => {
  if (line.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    var name = line[0];
    line.splice(0,1);
    return `Currently serving ${name}.`
  }
}

var currentLine = (line) => {
  var lineStr = [];
  for (var i = 0; i < line.length; i++) {
    lineStr.push(' ' + [i + 1] + '. ' +  line[i])
  }
  if (line.length === 0) {
    return "The line is currently empty.";
  } else {
    return "The line is currently:" + lineStr;
  }

}


takeANumber(katzDeli, "Ada");
takeANumber(katzDeli, "Grace");
takeANumber(katzDeli, "Kent");


currentLine(katzDeli);

nowServing(katzDeli);

currentLine(katzDeli);

takeANumber(katzDeli, "Matz")

currentLine(katzDeli);

nowServing(katzDeli);
currentLine(katzDeli);
