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

function currentLine(katzDeliLine){
  if(katzDeliLine.length == 0) {
    return "The line is currently empty."
  } else {
    var names = []
    for(var i =0; i < katzDeliLine.length; i++) {
       names.push(`${i+1}. ${katzDeliLine [i]}` )
    }
    
    // names === ["1. Bill", "2. Jane", "3. Ann"]
    // "
    return `The line is currently: ${names.join(', ')}`
  }
}
