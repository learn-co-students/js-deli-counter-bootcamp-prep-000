var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);

  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  for (let i = 0; i <= katzDeliLine.length; i++) {

    if (katzDeliLine.length !== 0) {

      return `Currently serving ${katzDeliLine.shift(katzDeliLine[i])}.`;

    } else {
      return 'There is nobody waiting to be served!';
    }

  }

}

//
function currentLine(katzDeliLine){
  for(let i = 0; i <= katzDeliLine.length; i++){
    if (katzDeliLine.length === 0){
      return 'The line is currently empty.';

    }else{
      return `The line is currently: 1. ${katzDeliLine[i]}, 2. ${katzDeliLine[i+1]}, 3. ${katzDeliLine[i+2]}`;
    }

  }


}
