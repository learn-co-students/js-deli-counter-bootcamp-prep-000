var katzDeli = [];

function takeANumber(katzDeli, person ){
  katzDeli.push(person);
  return `Welcome, ${person}. You are number ${katzDeli.length} in line.`;
}

function nowServing(x){
  var currentPerson = [];
  if(x.length === 0) {
    return 'There is nobody waiting to be served!' ;
  }else {
    currentPerson.push(x[0])
    x.shift();
    return `Currently serving ${currentPerson[0]}.`;
}
}

function currentLine(line) {
  var array= [];
  if(line.length > 0) {
    for (var i = 0; i < line.length; i++){
      array.push(` ${array.length + 1}. ${line[i]}`)
    }
    return `The line is currently:${array}`;
   }
 else {
  return "The line is currently empty." ;
  }
}
