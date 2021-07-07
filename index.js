function takeANumber(katzDeliLine,name) {
  katzDeliLine.push(name);
  var x = `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
  return x;
}

function nowServing(katzDeli) {
 var a='There is nobody waiting to be served!'
 if (katzDeli.length>0){
  var serve = `Currently serving ${katzDeli[0]}.`;
  katzDeli.shift()
   return serve;
 }
 else return a;
}

function currentLine(katzDeliLine) {
  var line='The line is currently:';
  var i=1;
  for(i=1;i<=katzDeliLine.length;i++){
    if (i!=katzDeliLine.length)
    line = line+` ${i}. ${katzDeliLine[i-1]},`;
    else{
    line = line+` ${i}. ${katzDeliLine[i-1]}`;
    return line;}
  }
  if (katzDeliLine.length === 0);{
  var line1 = 'The line is currently empty.'
    return line1;
  }
}
/*
    it('says who is in line when there are people waiting', () => {
      expect(currentLine(["Bill", "Jane", "Ann"])).toEqual("The line is currently: 1. Bill, 2. Jane, 3. Ann");
    });
  });
})
*/