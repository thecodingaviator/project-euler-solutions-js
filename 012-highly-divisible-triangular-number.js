function divisibleTriangleNumber(n) {
  let i=n+"".length, currentNatural=1
  while(numberOfFactors(currentNatural)<n) {
    currentNatural=i*(i+1)/2
    i++
  }
  return currentNatural
}

/* My original code
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
*/

// @JeremyLT on the freeCodeCamp forum helped me with this:
function numberOfFactors(n) {
  let count=2
  let i=2
  // Single bound computation is faster
  const bound = Math.floor(Math.sqrt(n))
  // Check i from 2 to largest possible factor
  while(i < bound) {
    if (n % i == 0)
      // Because factors come in pairs
      // if i is a factor, n/i is too
      count += 2
    i += 1
  }
  // If n = i*i, then we only want to count
  // the factor i once
  if (i**2==n)
    count++
  return count
}
