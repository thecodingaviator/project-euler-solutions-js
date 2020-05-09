function latticePaths(gridSize) {
  return fact(2*gridSize)/Math.pow(fact(gridSize),2)
}

function fact(gridSize) {
  let c=1
  for(let i=2; i<=gridSize; i++)
    c*=i
  return c
}
