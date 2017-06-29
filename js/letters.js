var sample_text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod \
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo \
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse \
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non \
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

var counter = {
  "a" : 0,  "b" : 0,  "c" : 0,  "d" : 0,
  "e" : 0,  "f" : 0,  "g" : 0,  "h" : 0,
  "i" : 0,  "j" : 0,  "k" : 0,  "l" : 0,
  "m" : 0,  "n" : 0,  "o" : 0,  "p" : 0,
  "q" : 0,  "r" : 0,  "s" : 0,  "t" : 0,
  "u" : 0,  "v" : 0,  "w" : 0,  "x" : 0,
  "y" : 0,  "z" : 0
};

function countLetters(counter, sample_text){
  //base case
  if(sample_text.length === 0) {
    return counter;
  }

  //make sample_text lowercase
  var lowercaseStr = sample_text.toLowerCase();

  //counter doesn't have a property of the first character of the string, go next
  if(counter.hasOwnProperty(lowercaseStr.substring(0,1)) === false) {
      return countLetters(counter, sample_text.substring(1, sample_text.substring().length));
  } else {
  counter[lowercaseStr.substring(0,1)]++;
  return countLetters(counter, sample_text.substring(1, sample_text.substring().length));
}
}

$(document).ready(function(){
  countLetters(counter, sample_text);
  $("#result").html(JSON.stringify(counter));
});