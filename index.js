function takeANumber(deliLine, newPerson) {
  // console.log(`deliLine: ${deliLine}`)
  deliLine.push(newPerson);
  // console.log(`deliLine: ${deliLine}`)
	// console.log(`deliLine.slice(-1): ${deliLine.slice(-1)}`);
	// console.log(`deliLine.length: ${deliLine.length}`);
  return `Welcome, ${deliLine.slice(-1)}. You are number ${deliLine.length} in line.`;
};
takeANumber();

function nowServing(servingLine) {
  // console.log(`servingLine: ${servingLine})`;
  if (servingLine.length === 0) {
		return `There is nobody waiting to be served!`;
	} else {
    let personNowServed = servingLine.shift();
    // console.log(`servingLine: ${servingLine}`);
    return `Currently serving ${personNowServed}.`;
  };
};
nowServing();

function currentLine(line) {
  if (line.length === 0) {
    return `The line is currently empty.`;
  } else {
    let lineCounter = [];
    let lineNumber = 0;
    for (let i = 0; i < line.length; ++i) {
      lineCounter[i] = ` ${lineNumber = lineNumber + 1}. ${line[i]}`;
    };
    return `The line is currently:${lineCounter}`;
  };
};
currentLine();
