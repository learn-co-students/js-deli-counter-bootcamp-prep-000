var katzDeli = [];
var greeting;

function takeANumber(katzDeliLine,name) {
 katzDeliLine.push(name)

greeting=`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
return greeting

}

function nowServing(katzDeliLine) {
  var nooneinline;
  var serving;
  if (katzDeliLine.length === 0 ) {
    nooneinline='There is nobody waiting to be served!'
    return nooneinline

  } else if (katzDeliLine.length>0) {
    serving=`Currently serving ${katzDeliLine[0]}.`
    katzDeliLine.shift()
    return serving
  }
}

function currentLine(katzDeliLine)
{
var newarray=[];
  if (katzDeliLine.length === 0)
  {
    return ('The line is currently empty.');
  }else{
for(let i = 0; i < katzDeliLine.length; i++)
{ newarray=[...newarray,' '+(i+1)+'. '+ katzDeliLine[i]];}
console.log(newarray)
  return ('The line is currently:'+newarray);
}
}
