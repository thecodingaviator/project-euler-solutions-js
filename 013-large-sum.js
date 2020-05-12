function largeSum(arr) {
  let local=0
  let j=arr[0].length-1
  let sumArray=[]
  // jth digit will be accesssed.....
  while(j>=0) {
    // .....in i arrays/i times
    for(let i=0; i<arr.length; i++)
      local+=parseInt(arr[i].charAt(j))
    sumArray.unshift(local%10)
    // Carry-over
    if(local>10)
      local=(Math.floor(local/10))
    else
      local=0
    j--
  }
  if(local!=0)
    sumArray.unshift(local)
  return parseInt(sumArray.join("").substring(0,10))
}
