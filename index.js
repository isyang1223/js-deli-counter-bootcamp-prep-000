var katzDeli = [];
function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine){
  katzDeliLine.shift();
  katzDeliLine.pop();
  return `Currently serving ${katzDeliLine}.`
}