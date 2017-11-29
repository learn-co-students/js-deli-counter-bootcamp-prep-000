function takeANumber (katzDeliLine, newPerson){
  katzDeliLine.push(newPerson);
  let positionInLine = katzDeliLine.length;

  return `Welcome, ${newPerson}. You are number ${positionInLine} in line.`
}

function nowServing (katzDeliLine) {
  if (katzDeliLine.length === 0){
    return "There is nobody waiting to be served!"
  }

  let firstPerson = katzDeliLine[0];
  katzDeliLine.shift()

  return `Currently serving ${firstPerson}.`
}

function currentLine (katzDeliLine){
  if (katzDeliLine.length === 0){
    return "The line is currently empty."
  }

  var sentence = "The line is currently:" // This is the sentence we want to return
  for (var i = 0 ; i < katzDeliLine.length; i++){ // condition that tells the loop to run

    var currentPersonInLine = katzDeliLine[i]; //Current person in line is the first person in line
    var positionInLine = i + 1; // what number they are in line

    var newText = ` ${positionInLine}. ${currentPersonInLine}` // building out the number in line and the person's name
    sentence += newText // use += to take sentence add new text to it

    if (i !== katzDeliLine.length - 1) { // checking if the current index is equal to the last index of the katzDeliline array. 
      sentence += ","
    }

  }
  return sentence;
}
