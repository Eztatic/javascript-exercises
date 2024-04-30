const findTheOldest = function(arr) {
      let currentYear = new Date().getFullYear();
      return arr.sort((person1, person2) => {
            let deathYr1 = person1.yearOfDeath;
            let deathYr2 = person2.yearOfDeath;
            if(person1.yearOfDeath === undefined){
                  deathYr1 = currentYear;
            }else if(person2.yearOfDeath === undefined){
                  deathYr2 = currentYear;
            }
            let age1 = deathYr1 - person1.yearOfBirth;
            let age2 = deathYr2 - person2.yearOfBirth;
            return age1 - age2;

      }).findLast(() => true);
};

// Do not edit below this line
module.exports = findTheOldest;
