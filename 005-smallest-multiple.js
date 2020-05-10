function smallestMult(n) {
  let prod=[...Array(n).keys()].map(i=>i+1)
  for(let i=n-1; i>=0; i--)
    while(!isPrime(prod[i]))
      for(let j=i-1; j>=0; j--)
        if(prod[i]%prod[j]==0)
          prod[i]/=prod[j]
  let product=1
  if(n>7)
    for(let i=8; i<n; i*=2)
      prod[i-1]=2
  for(let i=0; i<n; i++)
    product*=prod[i]
  console.log(prod)
  return product
}

function isPrime(n) {
  for(let i=2; i<n; i++)
    if(n%i==0)
      return false
  return true
}
