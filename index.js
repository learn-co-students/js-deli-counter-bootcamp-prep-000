
 var katzDeli = [];

function takeANumber(line, name){
  
  line.push(name)
  
  console.log("Welcome, " + name + ". You are number " + line.length + " in line.")
  return "Welcome, " + name + ". You are number " + line.length + " in line."
}


function nowServing(line){
  if (line.length === 0){
    console.log("There is nobody waiting to be served!")
    return "There is nobody waiting to be served!"
  } else {
    //console.log("Currently serving " + line.shift() + ".")
    return "Currently serving " + line.shift() +"."
  }
  
}

function currentLine(line){
  if(!line.length) {
    return "The line is currently empty.";
  }
  var lineNamesandNumbers = [];
  
  for(var i=0; i<line.length; i++) {
    lineNamesandNumbers.push(i+1 + ". "+ line[i]);
  }
  console.log("The line is currently: " + lineNamesandNumbers)
  return "The line is currently: " + lineNamesandNumbers.join(', ');
}
  
currentLine(katzDeli)

/*global describe, it 
3. Build a function `currentLine` that returns the current line. For example, if `katzDeliLine` is currently `["Ada", "Grace"]`, `currentLine(katzDeliLine)` would return `"The line is currently: 1. Ada, 2. Grace"`.  If there is nobody in line, it should return `"The line is currently empty."`
  

  describe('currentLine(line)', () => {
    it('returns "The line is currently empty." if no one is in line', () => {
      expect(currentLine([])).toEqual("The line is currently empty.");
    });

    it('says who is in line when there are people waiting', () => {
      expect(currentLine(["Bill", "Jane", "Ann"])).toEqual("The line is currently: 1. Bill, 2. Jane, 3. Ann");
    });
  });
})
*/