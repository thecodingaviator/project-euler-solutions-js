function specialPythagoreanTriplet(n) {
 let sumOfabc = n;
 let i,j,k
 // Basically find all numbers that add up to n
 for(i=1; i<=n/2; i++)
  for(j=1; i+j<=n; j++)
    for(k=1; i+j+k<=n; k++)
      // If i, j, k add up to n and are a pythagorean triplet, return their product
      if(i+j+k==n && i*i+j*j==k*k)
        return i*j*k
}

// I don't like Brute Forcing it like this. Maybe there's a way using (a+b+c)^2 = a^2+b^2+c^2+2(ab+bc+ca)?
