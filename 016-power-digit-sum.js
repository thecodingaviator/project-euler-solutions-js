function powerDigitSum(exponent) {
  let power=1
  var numArray = [2]
  while(power!=exponent){
    updateArray(numArray, numArray.length)
    power++
  }
  power=0
  for(var i=0; i<numArray.length; i++) {
    power+=numArray[i]
  }
  return power
}

function updateArray(numArray, len) {
  for(var i=len-1; i>=0; i--) {
    numArray[i]*=2
  }
  for(var i=len-1; i>=0; i--) {
    if(numArray[i]>9) {
      numArray[i]-=10
      if(typeof numArray[i-1] == "number"){
        numArray[i-1]+=1
      }
      else {
        numArray.unshift(1)
      }
    }
  }
}

powerDigitSum(15);
