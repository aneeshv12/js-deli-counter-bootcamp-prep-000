function takeANumber(currentline,name){
  currentline.push(name);
  var message = `Welcome, ${name}. You are number ${currentline.length} in line.`;
}