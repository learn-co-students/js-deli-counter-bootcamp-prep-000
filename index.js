
var i=0 ;
var katzDeli = ["Ada"]
var otherDeli = ["Steven", "Blake", "Avi"]
//var otherDeli = []
var katzDeliLine = []


function takeANumber(array, string) {

array.push(string)
return 'Welcome, ' + `${string}` + '. You are number ' + (array.length) + ' in line.'
}


//======================================

var deliLine = ["Steven", "Blake", "Avi"]
function nowServing(array) {

if (array.length >= 1){


return `Currently serving ${array.shift()}.` ;
}
else {
return 'There is nobody waiting to be served!';
}
}

//========================================


function currentLine(array) {
  var lineStatus;
  var peopleInLine = [];
  var msg = `The line is currently:`

  if (array.length < 1) {
    peopleInLine.push(`The line is currently empty.`);
  } else {
    for (let i = 0; i < array.length; i++) {

     peopleInLine.push(` ${i + 1}. ${array[i]}`);

    }

 peopleInLine = msg + peopleInLine
  }
  return peopleInLine;
}
