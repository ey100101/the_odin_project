var num = 600851475143, prime = 2;

while(num != prime ){
    if(num%prime == 0){
      num /= prime;
      prime = 2;
    } else {
      prime += 1;
    }
}

console.log(prime);
