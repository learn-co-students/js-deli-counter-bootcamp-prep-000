var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return 'Welcome, ' + name + '. You are number ' + katzDeliLine.length + ' in line.';
  //      `Welcome, ${name} you are number ${katzDeliLine.length}.``
}

function nowServing(katzDeliLine) {
  if(katzDeliLine.length == 0) {
    // console.log("There is nobody waiting to be served!")
    return "There is nobody waiting to be served!"
  } else {
    //console.log("Currently serving " + line.shift());
    return "Currently serving " + katzDeliLine.shift() + '.';
  }
}

//
// function currentLine(katzDeliLine){
//
// }
