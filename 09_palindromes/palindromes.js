const palindromes = function (string) {
      let reversed = string.replace(/[^a-zA-Z0-9]/g, '')
                           .toLowerCase()
                           .split('')
                           .reverse()
                           .join('');
      let noSpecChar = string.replace(/[^a-zA-Z0-9]/g, '')
                             .toLowerCase()
                             .split('')
                             .join('');
      for(let i = 0; i <= string.length; i++){
            if(reversed[i] !== noSpecChar[i]){
                  return false;
            }
      }
      return true;
};

// Do not edit below this line
module.exports = palindromes;
