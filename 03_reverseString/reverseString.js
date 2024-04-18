const reverseString = function(string) {
      let reversedString = "";
      let g = string.length-1;
      string.split();
      for(let i = 1; i <= string.length; i++) {
            reversedString = reversedString.concat(string[g]);
            g--;
      }
      return reversedString;
};

reverseString("hello");
reverseString("hello there");
reverseString("123! abc!");
reverseString("");

// Do not edit below this line
module.exports = reverseString;
