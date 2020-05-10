function smallestMult(n) {
  // Fill prod with 1 to n
  let prod=[...Array(n).keys()].map(i=>i+1)
  // Divide all numbers in prod by their factors until prime
  for(let i=n-1; i>=0; i--)
    while(!isPrime(prod[i]))
      for(let j=i-1; j>=0; j--)
        if(prod[i]%prod[j]==0)
          prod[i]/=prod[j]
  // Because multiples of 2 greater than 7 get reduced to 1
  if(n>7)
    prod[1]=2 ** Math.floor(Math.log2(n)-1)
  // Calculate products from prod array
  let product=1
  for(let i=0; i<n; i++)
    product*=prod[i]
  return product
}

function isPrime(n) {
  let s=Math.floor(Math.sqrt(n))
  for(let i=2; i<=s; i++)
    if(n%i==0)
      return false
  return true
}
