const katzDeli = [];

function takeANumber(katzDeli, newPerson) {
    //Welcome message for each new person added to the array
  katzDeli.push(newPerson);
  return `Welcome, ${newPerson}. You are number ${katzDeli.length} in line.`;
}

function nowServing(deliLine) {
  let lastCustomer = deliLine[0]
  if (deliLine.length > 0) {
    deliLine.shift(lastCustomer)
    return `Currently serving ${lastCustomer}.`
  } else {
      return `There is nobody waiting to be served!`
  }
}

function currentLine(deliLine){
  if (deliLine.length > 0){
    //let orderedCustomers = deliLine.toString
    let signIntro = `The line is currently: `
    deliLine.forEach(function(item, index, array){
    let orderedLine = `${index+1}. ${item}`;
    let signShow = signIntro + orderedLine;
    return signShow
    })
  } else {
    return `The line is currently empty.`
  }
}
