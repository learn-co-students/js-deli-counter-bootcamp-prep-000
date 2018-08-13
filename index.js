function takeANumber(number, name) {
  number.push(name);
  return `Welcome, ${name}. You are number ${number.length} in line.`;
}

function nowServing(array) {
  if (array.length < 1) {
    return "There is nobody waiting to be served!"
  } else {
    let current = array[0];
    array.shift();
    return `Currently serving ${current}.`;
  }
}

function currentLine(array) {
  if (array.length < 1) {
    return "The line is currently empty."
  } else {
    let result = "The line is currently: ";
    for (let i = 0; i < array.length; i++) {
      result += `${i+1}. ${array[i]}, `
    }
    return result.substring(0, result.length - 2);
  }
}