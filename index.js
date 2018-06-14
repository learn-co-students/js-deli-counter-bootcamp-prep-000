

function takeANumber(katzDeliLine, newPerson){
  katzDeliLine.push(newPerson); //add new person to line
  var position = katzDeliLine.length; //record new person's position

  //output welcome message for new person, with position info
  return `Welcome, ${newPerson}. You are number ${position} in line.`;

}

function nowServing(katzDeliLine){

  if (katzDeliLine.length === 0){
    //if no one is on the  line
    return "There is nobody waiting to be served!";
  }
  //else since there must be someone on the line...

  /*starting at index 0, return 1 person, and
  remove first person from line; they are to be served*/
  var firstPerson = katzDeliLine.splice(0,1);

  /*return message stating who the first person on line
    person being served is*/
  return `Currently serving ${firstPerson}.`;
}

function currentLine(katzDeliLine){
  if (katzDeliLine.length === 0){
    //if there is no one on the line
    return "The line is currently empty.";
  }
  //else since there must be someone on the line...

  //prepare beginning of message to be returned
  var currentStr = "The line is currently: ";

  //initialize the changing for-loop variables
  var addedStr; //string storing information about a person on line
  var position;  //integer storing person's place on line for addedStr
  var linePerson; //string storing name of person for addedStr

  //iterate through kayzDeliLine to record information about people on line
  for (var i=0; i<katzDeliLine.length; i++){

    position = i+1; //position of person being identified in this iteration
    linePerson = katzDeliLine[i]; //name of person ""

    //prepare the string to add to currentStr
    if (i === katzDeliLine.length - 1){
      //if person identified in this iteration is last in line

      //omit comma and space in string since no one else needs to be identified
      addedStr = `${position}. ${linePerson}`;
    }else{
      //if person identified in this iteration is not last in line

      //add comma and space in string since someone else will be identified
      addedStr = `${position}. ${linePerson}, `;
    }
  }

    //append, to message to be returned, information about the person identified
    currentStr = `${currentStr}${addedStr}`;

    return currentStr;
  }
}
