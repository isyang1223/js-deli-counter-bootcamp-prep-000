var katzDeli = [];
function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine){
  if (!katzDeliLine.length){
    return `There is nobody waiting to be served!`
  }
  return `Currently serving ${katzDeliLine.shift()}.`
}

function currentLine(katzDeliLine) {
  if (!katzDeliLine.length){
    return `The line is currently empty.`
  } else {
    return `The liune is currently: ${katzDeliLine.length}. ${katzDeliLine},`
  }
  
}