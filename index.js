var katzDeli=[];
function takeANumber(katzDeliLine,name)
{
  katzDeliLine.push(name);
  var k=katzDeliLine.length;
  return `Welcome, ${name}. You are number ${k} in line`;
}
function nowServing(katzDeliLine)
{
  if(katzDeliLine.length===0)
  {return'There is nobody waiting to be served!';}
  else
  {
  var m=  katzDeliLine.shift();
  return `currently serving ${m}`;
  }

}
function currentLine(katz){
if(katz.length===0)
{return'The line is currently empty';}


else
{
  var i=0;
  console.log('The line is currently:');
  var j=katz.length;
  for(i=0;i<j;i++)
  {
    console.log(`${i+1}. ${katz[i]},`);
  }
}
  
  
}