function takeANumber(katzDeliLine, person) {
  katzDeliLine.push(person);
  let position = katzDeliLine.indexOf(person) + 1;
  let response = `Welcome, ${person}. You are number ${position} in line.`;
  return response;
}

function nowServing(katzDeliLine) {
  let personToServe = katzDeliLine.slice(0, 1);
  katzDeliLine.shift();

  if (katzDeliLine.length) {
    return `Currently serving ${personToServe}.`;
  } else {
    return 'There is nobody waiting to be served!';
  }
}

function currentLine(katzDeliLine) {
  let peopleWaitng = '';

  if (katzDeliLine.length) {
    for (let i = 0; i < katzDeliLine.length; i++) {
      peopleWaitng += `${i + 1}. ${katzDeliLine[i]}, `;
    }
  } else {
    return 'The line is currently empty.';
  }
  peopleWaitng = peopleWaitng.slice(0, peopleWaitng.lastIndexOf(','));
  console.log(peopleWaitng);
  return `The line is currently: ${peopleWaitng}`;
}
