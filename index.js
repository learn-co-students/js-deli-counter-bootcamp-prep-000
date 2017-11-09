var katzDeli = ['Bill', 'Jane', 'Ann'];
var person = 'Ada';
var i = 2;

//console.log("Welcome, " + `${person}. ` + 'You are number ' + `${i} ` + 'in line.')

function takeANumber(line, person){
  line.push(person);
  return "Welcome, " + `${person}. ` + 'You are number ' + `${line.indexOf(person) + 1} ` + 'in line.';
}

function nowServing(line){
  if (line.length == 0){
    return "There is nobody waiting to be served!"
  }
  else {
      var serving =  "Currently serving " + `${line[0]}.`
      line.shift();
      return serving;
  }
}

function currentLine(line){
  var customers = [];
  if (line.length == 0){
    return "The line is currently empty."
  }
  else {
    for (i=0; i < line.length; i++){
      customers.push(` ${i + 1}. ` + `${line[i]}`);
    }
    return "The line is currently:" + `${customers}`;
  }
}

//var check1 = takeANumber(katzDeli, 'Jim');
//var check2 = nowServing(katzDeli);
var check3 = currentLine(katzDeli);
console.log(check3);
