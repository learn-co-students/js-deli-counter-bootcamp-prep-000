function takeANumber(katzDeliLine, name){

  katzDeliLine.push(name);

  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`

}

function nowServing(katzDeliLine){

  if (katzDeliLine.length !== 0){

    let currentCustomer = katzDeliLine[0];

    katzDeliLine.shift();

    return `Currently serving ${currentCustomer}.`

  } else {

    return "There is nobody waiting to be served!"

  }
}


function currentLine(katzDeliLine) {

  if (katzDeliLine.length !== 0) {

    let lineList = "The line is currently: ";

    for (let i = 0; i < katzDeliLine.length; i++) {
      if (i === katzDeliLine.length - 1) {

        lineList += `${i + 1}. ${katzDeliLine[i]}`;

      } else {

        lineList += `${i + 1}. ${katzDeliLine[i]}, `;

      }
    }

    return lineList;

  } else {

    return "The line is currently empty.";

  }
}
