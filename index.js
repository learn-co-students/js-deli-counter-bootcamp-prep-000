const katzDeliLine = [];

function takeANumber(line, newPerson){
  line.push(newPerson);
  console.log (`Welcome, ${newPerson}. Your number is ${line.length} in line`);
};

function currentLine(line){
  console.log ("The line is currently:");
  if (line.length > 0){
    for (i = 0; i <line.length-1; i++){
      console.log (`${i+1}. ${line[i]},`);
    };
    console.log (`${line.length}. ${line[i]}.`);
  }else{
    console.log("The line is currently empty.");
  };
};

function nowServing(line){
  if (line.length >0){
    console.log (`Currently serving ${line[0]}.`);
    line.shift;
  }else{
    return "There is nobody waiting to be served!";
  };
};
