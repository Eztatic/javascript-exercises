const sumAll = function(num1, num2) {
      let sum = 0;
      if(num1 > 0 
            && num2 > 0 
            && typeof(num1) === typeof(1) 
            && typeof(num2) === typeof(1)){
            if(num1 > num2){
                  for(let i = num2; i <= num1; num2++) {
                        sum = sum + num1;
                        num1--;
                  }
            } else {
                  for(let i = num1; i <= num2; num1++) {
                        sum = sum + num2;
                        num2--;
                  }
            }
      } else {
            return 'ERROR';
      }

      return sum;
};

sumAll(1, 4);
sumAll(1, 4000);
sumAll(123, 1);
sumAll(-10, 4);
sumAll(10, "90");
sumAll(10, [90, 1]);

// Do not edit below this line
module.exports = sumAll;
