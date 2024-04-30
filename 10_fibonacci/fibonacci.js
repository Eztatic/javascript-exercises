const fibonacci = function(num) {
      if(num == 0){
            return 0;
      }else if(num < 0){
            return 'OOPS';
      }
      let fibArray = [1, 1];
      for(let i = 0; i < num-2; i++) {
            fibArray.push(fibArray[i] + fibArray[i+1]);
      }
      return fibArray[num-1];
};

// Do not edit below this line
module.exports = fibonacci;
