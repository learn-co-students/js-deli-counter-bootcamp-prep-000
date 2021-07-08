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
  var line_message = "The line is currently";
  line_message += katzDeliLine.length === 0 ? " empty." : ":";
  
  for (let i = 0; i < katzDeliLine.length; i++) {
      line_message += `${i === 0 ? '' : ','} ${i+1}. ${katzDeliLine[i]}`;
  }
  return line_message;
};