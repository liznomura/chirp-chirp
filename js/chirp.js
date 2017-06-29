var chirp = function(n){
  if(n === 0) {
    return "";
  }

  var chirpStr = 'chirp ';
  var resultStr = chirp(--n);
  resultStr += chirpStr;
  return resultStr;
};

console.log(chirp(3));

// $(document).ready(function(){
//   $("#result").html(chirp(3));
// });