function divisibleTriangleNumber(n) {
  let i=n+"".length, currentNatural=1
  while(numberOfFactors(currentNatural)<n) {
    currentNatural=i*(i+1)/2
    i++
  }
  return currentNatural
}

function numberOfFactors(n) {
  let count=2
  let i=2
  while(i**2<n) {
    if (n % i == 0)
      // Because factors come in pairs
      count += 2
    i += 1
  }
  if (i**2==n)
    count++
  return count
}
