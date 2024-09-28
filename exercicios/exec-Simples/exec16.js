function FizzBuzz(number) {
    if (typeof number !== 'number') return number;
    if(number % 3 == 0 && number % 5 == 0) return 'FizzBuzz';
    if (number % 3 == 0) return 'Fizz';
    if(number % 5 == 0)return 'Buzz';
    return number;
};

for (let number = 0; number <= 100; number++) {
    console.log(number, FizzBuzz(number));
}