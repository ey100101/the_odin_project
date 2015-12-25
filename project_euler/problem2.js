var num1 = 1, num2 = 2, fsum = 0, sum = 2;

while(num2 < 4000000) {
  fsum = num1 + num2;
  num1 = num2;
  num2 = fsum;

  if(fsum % 2 === 0) {
    sum += fsum;
  }
}

console.log(sum);
