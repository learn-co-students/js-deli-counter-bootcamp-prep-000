// This is a series of functions designed to simulate a deli counter. There is a funciton for taking a number, calling who is next in line, and also telling you who is currently in line.
var katzDeli

var katzDeliLine=[];

//When someone enters the deli and takes a number, their name is added to the end of the katzDeliLine array. The computer then returns the phrase listed including their name and the number they are in line.
function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name)
  return ('Welcome, '+ name +'. You are number ' + (katzDeliLine.length)+ ' in line.')
}

//nowServing function is designed to call out who is next in line. It defines a new array called next. This array (if the length of katzDeliLine is equal to 0) will say nobody is waiting to be served. Else it will pull (unshift) the first person in katzDeliLine, and then delete (shift) that person from katzDeliLine. Then it returns Currently serving (name). and the function ends.
function nowServing(katzDeliLine){
  var next=[];
  if (katzDeliLine.length===0){
    return ('There is nobody waiting to be served!')
  }else {
    next.unshift(katzDeliLine[0])
    katzDeliLine.shift()
    return ('Currently serving ' + next[0]+ '.')
  }
}


function currentLine(line){
  var waiting=[];
  if (line.length===0) {
    return ('The line is currently empty.')
  } else {
    for (var I=0; I<line.length; I++){
      waiting.push( I+1 +'. ' + line[I])
    }
    return ('The line is currently: ' + waiting.join(', '))
  }
  // var waiting=[];
  // do{
  //   return('The line is currently: ')
  // }while (waiting.length>0){}
  //     // This line is in progres and needs to be addressed/completed
  //   waiting.push(array[waiting.length] +
  //   }
  //   return waiting
  // }
}
