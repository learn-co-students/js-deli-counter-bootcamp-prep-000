var katzDeliLine = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  var number = katzDeliLine.length;
  return 'Welcome, ' + name + '. You are number ' + number + ' in line.';
}

function nowServing (katzDeliLine, name){
  if (katzDeliLine.length === 0){
    //you want to check the length. You do not want to compare it to an array
    //how do I do that? just get rid of the brackets?
    //exactly. you want to check to see if the length is 0.
    //nice! Let me see if I can try to get the other part
    //this condition is not rendering like you think it is
    // does length return an integer or an array?
    //an integer. right and you are expecting it to be equal to an array.
    //Right. I see what I did wrong
    //Excellent. Want to take a stab at fixing it?
    //sure!
      return 'There is nobody waiting to be served!';
  } else if (katzDeliLine.length > 0){
    //you need to remove the person from the line as you serve them.
    //what method do you have in js to remove the first element from an array?
    //shift()? Or slice() but that's not usually recommended right?
    //Shift sounds good. Either could work.
    katzDeliLine.shift(); // does shift take an argument here? What do you mean?
    return 'Currently serving Steven.';
  }
}

function currentLine(katzDeliLine){//calls for a loop!
  var number = katzDeliLine.length;
  var katzLineUp = new Array
  if (katzDeliLine.length === 0){ 
    return "The line is currently empty.";
  } else{
    var output = []
    for (var i = 0; i< katzDeliLine.length; i++){ //this will go 1 too far
      output.push(`${i+1}. ${katzDeliLine[i]}`) // <--- hard coded, see the issue?
    } 
  }
  return `The line is currently: ${output.join(', ')}`
}  
