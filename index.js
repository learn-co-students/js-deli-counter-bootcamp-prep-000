function takeANumber(people, name){
  people.push(name);
  let position = people.length;
  
  return `Welcome, ${name}. You are number ${position} in line.`;
}

function nowServing(people){
  if(people.length){
    let head = people.shift();
    return `Currently serving ${head}.`;
  }
  else{
    return "There is nobody waiting to be served!";
  }
}

function currentLine(line){
  if(line.length){
    let output = "The line is currently: ";
    let indexedPeople = [];

    for(let i=0; i<line.length; i++){
      let position = i + 1;
      let person = line[i];
      indexedPeople.push(`${position}. ${person}`);
    }

    output += indexedPeople.join(", ");
    return output;
  }
  else{
    return "The line is currently empty.";
  }
}
