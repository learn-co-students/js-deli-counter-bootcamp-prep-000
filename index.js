function takeANumber(peopleCount, newName) {
  peopleCount.push(newName);
  return `Welcome, ${newName}. You are number ${peopleCount.length} in line.`; 
}

function nowServing(peopleCount) {
  if (peopleCount.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    return `Currently serving ${peopleCount.shift()}.`;
  }
}

function currentLine(peopleCount) {
  if (peopleCount.length === 0) {
    return "The line is currently empty.";
  } else {
    var lineString = '';
    var lastIndex = peopleCount.length - 1;
    peopleCount.forEach(function(item, index) {
      if (lastIndex === index) {
        lineString += `${index+1}. ${item}`;
      } else {
        lineString += `${index+1}. ${item}, `;  
      }
    });  
    return `The line is currently: ${lineString}`;
  }
}
 