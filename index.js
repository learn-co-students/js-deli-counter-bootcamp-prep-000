function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return(`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`);
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    let first = katzDeliLine[0];
    katzDeliLine.shift();
    return(`Currently serving ${first}.`);
  } else {
    return("There is nobody waiting to be served!");
  }

}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    let line = "The line is currently: ";
    for (let i = 0; i < katzDeliLine.length; i++) {
      let pos = i + 1 + ". ";
      line += pos + katzDeliLine[i];
      if (i < katzDeliLine.length - 1) {
        line += ", ";
      }
    }

    return(line);

  } else {
    return("The line is currently empty.");
  }
}
