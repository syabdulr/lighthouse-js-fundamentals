const isOdd = function(num){
  if(num % 3 === 0){
    return true;
  }else{
    return false;
  }
}
console.log("3 is odd: " + isOdd(3));
console.log("8 is odd: " + isOdd(8));