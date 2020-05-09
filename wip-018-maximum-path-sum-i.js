//Incomplete
function maximumPathSumI(triangle) {
  let sum=triangle[0][0]
  let lowerBound=0, upperBound=1
  let obj={}
  for(var i=1; i<triangle.length; i++){
    obj=returnMax(triangle[i], lowerBound, upperBound)
    sum+=obj.m
    lowerBound=obj.lowerBound
    upperBound=obj.upperBound
  }
  return sum
}

function returnMax(arr, lowerBound, upperBound){
  let m=0
  if(arr[lowerBound]>arr[upperBound])
    m=arr[lowerBound]
  else if(upperBound==lowerBound) {
    m=arr[lowerBound]
  }
  else {
    m=arr[upperBound]
    lowerBound++
    upperBound++
  }
  return {
    m,
    lowerBound,
    upperBound
  }
}
