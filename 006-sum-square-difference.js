function sumSquareDifference(n) {
  let norm=0
  let squa=0
  for(let i=0; i<=n; i++)
  {
    norm+=Math.pow(i,2)
    squa+=i
  }
  return Math.pow(squa, 2)-norm
}
