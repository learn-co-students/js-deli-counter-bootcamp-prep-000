var katzDeliLine = [];

function takeANumber(katzDeliLine, customer) {
  katzDeliLine.push(customer);
  return `Welcome, ${customer}. You are number ${katzDeliLine.length} in line.`
}

function currentLine(katzDeliLine){
  var len = katzDeliLine.length;
  var text = "";
  if (len===0){
      text = "The line is currently empty.";
  } else {
    text = "The line is currently:";
    for (let i = 0; i < len; i ++) {
      text = `${text} ${i+1}. ${katzDeliLine[i]},`;
    }
    text = text.slice(0, -1);
  }
  console.log(text);
  return text;
}

function nowServing(katzDeliLine){
  var text = "";
  if (katzDeliLine.length === 0) {
    text = "There is nobody waiting to be served!";
  } else {
    text = `Currently serving ${katzDeliLine.shift()}.`;
  }
  return text;
}


// Test scripts
// ============
//console.log(nowServing(katzDeliLine));

//currentLine(katzDeliLine);

//let announce = takeANumber(katzDeliLine, "Bill");
//let announce2 = takeANumber(katzDeliLine, "Jane");
//console.log(katzDeliLine);
currentLine(katzDeliLine);

//let announce3 = takeANumber(katzDeliLine, "Ann");

//console.log(katzDeliLine);
//console.log(announce);
//console.log(nowServing(katzDeliLine));


//currentLine(katzDeliLine);


//console.log(katzDeliLine);
//console.log(announce2);

//currentLine(katzDeliLine);

