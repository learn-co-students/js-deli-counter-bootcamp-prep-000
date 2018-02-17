function takeANumber(line, customer) {
  // console.log(customer,);
  line.push(customer);
  var place = line.indexOf(customer) + 1;
  // console.log(line.indexOf(customer));
  //
  // console.log(line);
  return 'Welcome, ' + customer + '. You are number ' + place + ' in line.';

}

function nowServing(line) {
  if (line.length < 1) {
    return "There is nobody waiting to be served!";
  } else {
    return 'Currently serving ' + line.shift() + '.';
  }
}

function currentLine(line) {
  if (line.length < 1) {
    return "The line is currently empty.";
  } else {
    var numLine = 'The line is currently: ',
        custArray = [];
    for (var i = 0; i < line.length; i++) {
      custArray.push(i + 1 + ". " + line[i]);
    }
    return (numLine + custArray.join(', '));
  }
}

// function currentLine(line) {
//   if (line.length < 1) {
//     return "The line is currently empty.";
//   } else {
//     var numLine = 'The line is currently: ';
//     for (var i = 1; i <= line.length; i++) {
//       var fullLine = numLine.push(i + ": " + line(i - 1))
//     }
//     // return katzDeliLine;
//   }
// }

// for(var i=0; i<line.length; i++) {
//   lineNamesandNumbers.push(i+1 + ". "+ line[i]);
// }
// console.log("The line is currently: " + lineNamesandNumbers)
// return "The line is currently: " + lineNamesandNumbers.join(', ');
// }
