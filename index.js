var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var announcement = `Currently serving ${katzDeliLine[0]}.`;
    katzDeliLine.shift();
    return announcement;
  }
  else {
    return 'There is nobody waiting to be served!';
  }
}

function currentLine(line) {
  if(line.length == 0) {
    return "The line is currently empty.";
  }
  else {
    var i=0;
    var response = 'The line is currently: ';
    while (i < line.length) {
      if (i == line.length - 1) {
        response = response + `${[i+1]}. ${line[i]}`;
      }
      else {
        response = response + `${[i+1]}. ${line[i]}, `;
      }
      i++;
    }
    return response;
  }
}