function longestCollatzSequence(limit) {
  let term=1
  let localTerm=0
  let counterOrig=1
  let currCounter=1
  for(var i=2; i<limit; i++) {
    currCounter=1
    localTerm=i
    for(;localTerm!=1;)
    {
    localTerm=localTerm%2==0?localTerm/2:3*localTerm+1
    currCounter++
    }
    if(currCounter>counterOrig){
      term=i
      counterOrig=currCounter
    }
  }
  return term;
}
