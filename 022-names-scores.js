function namesScores(arr) {
  arr=insertionSort(arr)
  let total=0
  for(let i=0; i<arr.length; i++)
    total+=(i+1)*letterValue(arr[i])
  return total
}

function insertionSort(arr) {
  let j
  for(let i=1; i<arr.length; i++) {
    let temp=arr[i]
    for(j=i-1; j>=0 && arr[j]>temp; j--)
      arr[j+1]=arr[j]
    arr[j+1]=temp
  }
  return arr
}

function letterValue(word) {
  let score=0
  for(let i=0; i<word.length; i++)
    score+=word.charCodeAt(i)-64
  return score
}
