function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return (`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`);
}
//this works b/c 1)
//you want to add a name to katzDeliLine array for every customer who takes a number
//which is why you add .push to katzDeliLine
//and 2)
//then you will print the message that you want w/ whatever name is given and the correct position in line using .length

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return ("There is nobody waiting to be served!")
  } else {
    var name = katzDeliLine[0]
    katzDeliLine.splice(0, 1)
    return (`Currently serving ${name}.`)
  }
}
//this works b/c first determines if their is anyone in line
//if there isn't, it returns there is nobody waiting to be served (one goal of the function)
//second it determines that if there is someone in line it will determine the name of 1st person in line
//then it will remove that person from the array using splice
//splice --> at index 0, we want to remove 1 element
//then it will announce who is currently being served

//"The line is currently: 1. Ada, 2. Grace"

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return ("The line is currently empty.")
  }
  let ret = 'The line is currently: ';
  let i = 0
  while (i < katzDeliLine.length) {
    ret += `${i+1}. ${katzDeliLine[i]}, `
    i++;
  }
  return ret.slice(0,ret.length-2)
}
