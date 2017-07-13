var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
};

function nowServing(katzDeli) {
  if (katzDeli.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    return `Currently serving ${katzDeli.shift()}.`;
  }
};

function currentLine(katzDeli) {
  if (katzDeli.length === 0) {
    return "The line is currently empty.";
  } else {
    var line = "The line is currently: ";
    var length = katzDeli.length;
    for (let i = 0; i < length-1; i++) {
      line = line+`${i+1}. ${katzDeli[i]}, `
    }
    return line + `${length}. ${katzDeli[length-1]}`;
  }
};
