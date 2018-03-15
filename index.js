let takeANumber = (katzDeliLine, name) => {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

let nowServing = (katzDeliLine) => {
  return katzDeliLine.length === 0 ?
    "There is nobody waiting to be served!" :
    `Currently serving ${katzDeliLine.shift()}.`
}

let currentLine = (katzDeliLine) => {

  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  }

  let list = "The line is currently: "
  katzDeliLine.forEach( (item, index) => {
    list += `${index + 1}. ${item}, `;
  });

  return list.slice(0, -2);
}
