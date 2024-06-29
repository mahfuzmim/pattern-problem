

const getNumberAlphabetPattern= (number,type ) => {

    if(number<1  || number>26){
        return
    }

    let string = "";

    
  if (isNaN(type)) {
    for (let i = 1; i <= number; i++) {
      for (let j = 1; j <= number; j++) {
        if (i == 1) {
          string += String.fromCharCode(65 + j - 1).toLowerCase();
        } else if (i == number) {
          string += String.fromCharCode(65 + number- j).toLowerCase();
        } else {
          if (j == 1) {
            string += String.fromCharCode(65 + i - 1).toLowerCase();
          } else if (j == number) {
            string += String.fromCharCode(65 + number- i).toLowerCase();
          } else {
            string += " ";
          }
        }
      }
      string += "\n";
    }
  } else {
    for (let i = 1; i <= number; i++) {
      for (let j = 1; j <= number; j++) {
        if (i == 1) {
          string += j;
        } else if (i == number) {
          string += number- j + 1;
        } else {
          if (j == 1) {
            string += i;
          } else if (j == number) {
            string += number- i + 1;
          } else {
            string += " ";
          }
        }
      }
      string += "\n";
    }
  }
  console.log(string);
};

getNumberAlphabetPattern(10, 1);
