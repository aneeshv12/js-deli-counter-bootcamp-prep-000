function takeANumber(currentline,name){
  currentline.push(name);
  var message = `Welcome, ${name}. You are number ${currentline.length} in line.`;
  return message;
}

function nowServing(currentline){
  if(currentline.length===0){
    return "There is nobody waiting to be served!"
  }else{
    var empty = currentline.shift();
    return `Currently serving ${empty}.`
  }
}