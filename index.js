var katzDeli=[];
function takeANumber(katzDeliLine,name) {
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}
function nowServing(katzDeliLine) {
  if (katzDeliLine.length===0) {
    return 'There is nobody waiting to be served!'
  }
  else {
    var msg=`Currently serving ${katzDeliLine[0]}.`
    katzDeliLine.shift()
    return msg
  }
}
function currentLine(katzDeliLine) {
  if (katzDeliLine.length===0) {
    return "The line is currently empty."
  }
  else {
    var msg=[]
    for(let i=0;i<katzDeliLine.length;i++) {
        msg.push(`${i+1}. ${katzDeliLine[i]}`)
      }
    var msg2=[]
    for (let i=0;i<katzDeliLine.length-1;i++) {
      msg2.push(msg[i]+", ")
    }
    msg2[katzDeliLine.length-1]=msg[katzDeliLine.length-1]
    var msgString="The line is currently: "
    for (let i=0;i<katzDeliLine.length;i++) {
      msgString=msgString+msg2[i]
    }
  }
  return msgString
}
/*
msg2[katzDeliLine.length]=msg[katzDeliLine.length]

return `The line is currently: ${for (i=0;i=katzDeliLine.length;i++) {katzDeliLine[i]}}`
for (let i=katzDeliLine.length;i<katzDeliLine.length+1;i++) {
  msg2.push(msg[i]+",")
}

katzdeliline: current line
katzDeli:
*/
