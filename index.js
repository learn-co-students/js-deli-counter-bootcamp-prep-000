var takeANumber = function(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
};

var nowServing = function(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    var first_person = katzDeliLine.shift();
    return `Currently serving ${first_person}.`;
  }
};

var currentLine = function(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    var line_message = "The line is currently:";
    for (let i = 0; i < katzDeliLine.length; i++) {
      line_message += `${i === 0 ? '' : ','} ${i}. ${katzDeliLine[i]}`;
    }
    return line_message;
  }
};