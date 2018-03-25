var katzDeli = [];

// takes in: current line, name; returns: position in line
function takeANumber(katzDeliLine, name) {
  const number = katzDeliLine.length + 1;
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${number} in line.`;
}

// return first person in line and delete from katzDeliLine
function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return `There is nobody waiting to be served!`;
  }
  var current_person = katzDeliLine.shift();
  //delete katzDeliLine[0];
  return `Currently serving ${current_person}.`;
}

// returns defined string with numbered katzDeliLine
function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return `The line is currently empty.`;
  }
  var new_line = [];
  var i = 0;
  for(i=0; i < katzDeliLine.length; i++) {
    //console.log(i);
    new_line.push(` ${i + 1}. ` + katzDeliLine[i]);
  }
  return `The line is currently:` + new_line;
}

console.log(currentLine(["Bill", "Jane", "Ann"]));

/*
    it('says who is in line when there are people waiting', () => {
      expect(currentLine(["Bill", "Jane", "Ann"])).toEqual("The line is currently: 1. Bill, 2. Jane, 3. Ann");
    });
  });
})
*/