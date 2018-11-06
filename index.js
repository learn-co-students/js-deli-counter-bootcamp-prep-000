function takeANumber(array, name) {
  array.push(name);
  return `Welcome, ${name}. You are number ${array.length} in line.`;
}

function nowServing(deliLine) {
  if(deliLine.length === 0) {
    return "There is nobody waiting to be served!";
  }
  else {
    return `Currently serving ${deliLine.shift()}.`;
  }
}

function currentLine(deliLine) {
  var array = [];
  
  if (deliLine.length === 0) {
    return "The line is currently empty.";
  }
  else {
    for (var i = 0; i < deliLine.length; i++) {
      array.push(`${i + 1}. ${deliLine[i]}`);
    }
    return `The line is currently: ${array.join(', ')}`;
  }
}

/*
    it('says who is in line when there are people waiting', () => {
      expect(currentLine(["Bill", "Jane", "Ann"])).toEqual("The line is currently: 1. Bill, 2. Jane, 3. Ann");
    });
  });
})

*/