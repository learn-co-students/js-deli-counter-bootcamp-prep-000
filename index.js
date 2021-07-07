var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  katzDeliLine;
  var i
  for (i=0; i < katzDeliLine.length; i++) {
    return ("Welcome, " + name + ". You are number " + katzDeliLine.length + " in line.")
  }
}

function nowServing(katzDeliLine){
katzDeliLine;
  var x = katzDeliLine.length;

    if (x > 0) {

      var name = `${katzDeliLine[0]}`;
      katzDeliLine.shift();
      katzDeliLine;
      return "Currently serving " + name + '.';

    }
    else {
      return "There is nobody waiting to be served!";

    }
return;
}

function currentLine(katzDeliLine){
  katzDeliLine;
    var x = katzDeliLine.length;
    var count = 0;
    var s = "The line is currently: "

      if (x > 0) {
        for(var i = 0; i < katzDeliLine.length; i++){
            ++count;
              var name = `${katzDeliLine[i]}`;
              var a = count + '. ' + name ;

               if(count < x){
                 s += a + ', ';
               }
               else {
                 s+= a;
               }
        }
        return s;
}
        else {
          return "The line is currently empty."
        }
    }
