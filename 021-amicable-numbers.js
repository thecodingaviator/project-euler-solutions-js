function sumAmicableNum(n) {
  let sum=0
  for(let i=1; i<n; i++)
    if(isAmicable(i))
      sum+=i
  return sum
}

function sumFactors(n) {
  let sum=0
  for(let i=1; i<n/2+1; i++)
    if(n%i==0)
      sum+=i
  return sum
}

function isAmicable(n) {
  let ami=sumFactors(n)
  if(n!=ami && sumFactors(ami)==n)
    return true
  return false
}
