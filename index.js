
var  katzDeli = [];
function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`

/*for (var i=katzDeliLine.length; i>=0; i--) {
  katzDeli.push(katzDeliLine[i]);
  if (katzDeliLine.length>0) {
  katzDeliLine.push(name);
  var num = i+1;
return 'Welcome, ' + katzDeliLine[i] + '. You are number '+ num +' in line.';

  }
}*/
}
function nowServing(katzDeliLine,katzDeli) {
  var  katzDeli = [];
  if ( katzDeliLine.length > 0) {
  for (var i =0; i<katzDeliLine.length; i++){
    var string = 'Currently serving ' + katzDeliLine[i]+'.';
      katzDeliLine.splice(i,1);
      return string;
    }
    }else {
      return 'There is nobody waiting to be served!';
    }
}
function currentLine(katzDeliLine) {
  if ( katzDeliLine.length>0) {
    var string = 'The line is currently: ';
    var last = katzDeliLine.slice(-1);
    var lastNum= katzDeliLine.length;
    for ( var i =0; i<katzDeliLine.length-1; i++) {
      var num = i+1;
      string+= num+'. '+ katzDeliLine[i] + ', '
    }
    return string+lastNum+'. '+last;
  }else {
    return 'The line is currently empty.';
  }
    }
