function largestPalindromeProduct(n) {
  let upper=10 ** n - 1
  let lower=10 ** (n-1)
  let local=0
  let largest=0
  for(let i=lower; i<=upper; i++)
    for(let j=lower; j<=upper; j++) {
      local = i*j;
      if(local%11==0 && palindrome(local) && local>largest)
        largest = local
    }
  return largest
}

function palindrome(n) {
  return n+""==(n+"").split("").reverse().join("")
}
