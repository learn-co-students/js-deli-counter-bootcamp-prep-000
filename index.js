function takeANumber(lineArray, newName) {
  lineArray.push(newName);
  return `Welcome, ${newName}. You are number ${lineArray.length} in line.`
}

function nowServing(lineArray) {
  if(lineArray.length > 0) {
    return `Currently serving ${lineArray.splice(0, 1)}.` //could also use shift()
  } 
  else {
    return 'There is nobody waiting to be served!';
  }
}

function currentLine(lineArray) {
  if (lineArray.length > 0) {
    return `The line is currently: ${lineArray
                                            .map((currentVal,index) => `${index + 1}. ${currentVal}`)
                                            .join(", ")}`;
    // const newLine = [];
    // for (let i = 0; i < lineArray.length; i++) {
      // newLine.push(`${i + 1}. ${lineArray[i]}`)
    // }
    // return `The line is currently: ${newLine.join(", ")}`;
  } else {
    return 'The line is currently empty.';
  }
}