

// 1) deli takeANumber adds a person to the line:
// 2) deli takeANumber appends the person the end of the line if there are already people on it:
// 3) deli takeANumber properly handles multiple people being added:
function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return `Welcome, `+ name +`. You are number ` + katzDeliLine.length + ` in line.`

}


// 4) deli nowServing returns the line is empty when no one is on line:
// 5) deli nowServing returns an announcement about the person it is serving, and shifts the line:

function nowServing(katzDeliLine){
  var currentlyServing = katzDeliLine[0];
  katzDeliLine.shift()
  if (katzDeliLine.length > 0) {
    return `Currently serving ` + currentlyServing + `.`
    } else {
    return `There is nobody waiting to be served!`
  }
}

// 6) deli currentLine(line) returns "The line is currently empty." if no one is in line:
// 7) deli currentLine(line) says who is in line when there are people waiting:

//function currentLine(katzDeliLine){
//  if (katzDeliLine.length > 0) {
  //  console.log("The line is currently: 1. ${katzDeliLine[0]}, 2. ${katzDeliLine[1]}")
  //} else {
  //  console.log("The line is currently empty.")
  //}
//}


function currentLine(line) {
  var array = [];
    if (line.length !== 0 ) {
      for (var i = 0; i < line.length; i++) {
        array.push(" "+`${i + 1}`+". " + `${line[i]}`+"");
      }
    } else {
     return "The line is currently empty.";
    }
    return "The line is currently:" + `${array}`;
}
