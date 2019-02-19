function takeANumber(whichDeli,name){
  whichDeli.push(name)
  var spotInLine = whichDeli.length
  return "Welcome, " + name + ". You are number " + spotInLine + " in line."  
  
}

function nowServing(whichDeli){
  if (whichDeli.length === 0){
    return "There is nobody waiting to be served!"
  }
  else{
    var sentence = "Currently serving " + whichDeli[0] + "."
    
    whichDeli.shift()
    
    return sentence
  }
}

function currentLine(whichDeli){
  if (whichDeli.length === 0){
    return "The line is currently empty."
  }
  else
  {
    var sentence = "The line is currently: "
    for (var i = 1; i < whichDeli.length + 1; i++)
    {
      sentence = sentence + i + ". " + whichDeli[i-1]
      if (i < whichDeli.length){
        sentence = sentence + ", "
      }
    }
  }
  return sentence
}

//console.log(currentLine(["Ada", "Grace"]))
/*

  
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