function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return(`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`)
};

function nowServing(katzDeliLine){

  if(katzDeliLine.length > 0){
    var n = katzDeliLine[0]
      katzDeliLine.shift();
      return `Currently serving ${n}.`
  }
  else{return "There is nobody waiting to be served!"};

};

function currentLine(katzDeliLine){
  var line = 'The line is currently:';
  var lineList = [];
//output string message
    if (katzDeliLine.length > 0){
      var i = 0
      while(i < (katzDeliLine.length)){

        lineList.push(` ${[i+1]}. ${katzDeliLine[i]}`);
        i++;
    //calls "line" to add to loop of the number. name until array is completely looped over
      };
      var list = lineList.join();
      return line + list
  }

  else {return "The line is currently empty."}

};

//else{ return 'The line is currently empty.'}

//for(var i = 0; i < katzDeliLine; i++){

  //lineList = ' ' + [i+1] + '. ' + katzDeliLine[i];
//calls "line" to add to loop of the number. name until array is completely looped over
//};
