function takeANumber(queue, name) {
  queue.push(name)
  let position = queue.indexOf(name) + 1
  return `Welcome, ${name}. You are number ${position} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    let nowServingName = katzDeliLine.shift();
    return `Currently serving ${nowServingName}.`
  } else {
    return `There is nobody waiting to be served!`
  }
}

function currentLine(queue) {
  let message = `The line is currently: `
  if (queue.length > 0) {
    for (let i = 0; i < queue.length; i++) {
      let name = queue[i];
      let position = i + 1;
      message += `${position}. ${name}, `
      
      if (i === queue.length-1) {
        message = message.substring(0, message.length-2)
      } 
    }
    return message;
  } else {
    return `The line is currently empty.`
  }  
}